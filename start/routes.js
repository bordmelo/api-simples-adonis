'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessao', 'SessaoController.create')
// resource cria todas as rotas padroes de crud | apiOnly faz que as rotas sejam só relacionada a API (sem create e edit) | middleware('auth') protege a rota somente para usuário autenticado
Route.resource('produtos', 'ProdutoController').apiOnly().middleware('auth')