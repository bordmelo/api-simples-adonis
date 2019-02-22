'use strict'

// importação do model User
const User = use("App/Models/User")

class UserController {
    // define método assincrono para criar recebendo dados de uma requisição
    async create ({ request }) {
        // armazena campos da requisição
        const data = request.only(['username', 'email', 'password'])

        // cadastra no banco passando a data
        const user = await User.create(data)

        return user
    }
}

module.exports = UserController
