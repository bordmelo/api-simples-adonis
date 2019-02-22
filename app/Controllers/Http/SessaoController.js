'use strict'

class SessaoController {
    // cria método assincrono recebendo requisição
    async create ({ request, auth }) {

        // resgata valores da requisição
        const { email, password } = request.all()

        // executa metodo para realizar login e gerar token JWT
        const token = await auth.attempt(email, password)

        return token
    }
}

module.exports = SessaoController
