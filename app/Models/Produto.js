'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {

    // define relação da tabela produtos <> users
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Produto
