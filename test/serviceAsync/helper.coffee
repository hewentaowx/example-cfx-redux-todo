echo = console.log
dd = require 'ddeyes'

services = require '../../src/services/index'

{
  normalize
  Schema
  arrayOf
} = require 'normalizr'

todosSchema = new Schema 'todos'

getTodos = -> services.fetch()

module.exports = {
  getTodos
}
