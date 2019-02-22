'use strict'

// importa model Produto
const Produto = use('App/Models/Produto')

class ProdutoController {
  
  // lista todos registros
  async index () {
    const produtos = Produto.all()

    return produtos
  }

  // cria um novo registro
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'descricao',
      'preco',
      'estoque'
    ])

    const produto = await Produto.create({ ...data, user_id: id })

    return produto
  }

  // exibe apenas um registros
  async show ({ params }) {
    const produto = await Produto.findOrFail(params.id)

    return produto
  }

  // altera um registro
  async update ({ params, request, response }) {
    const produto = await Produto.findOrFail(params.id)

    const data = request.only([
      'descricao',
      'preco',
      'estoque'
    ])
    
    produto.merge(data)

    await produto.save()

    return produto
  }

  // remove um registro
  async destroy ({ params, auth, response }) {
    const produto = await Produto.findOrFail(params.id)
    
    if (produto.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Não autorizado!'})
    }

    await produto.delete()
  }
}

module.exports = ProdutoController
