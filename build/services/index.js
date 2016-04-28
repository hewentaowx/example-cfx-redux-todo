// Generated by CoffeeScript 1.10.0
var Todos, assign, fetch, resource, url;

assign = Object.assign;

fetch = require('node-fetch');

resource = {
  host: 'localhost',
  port: 3000,
  router: {
    todos: 'todos'
  }
};

url = (function() {
  var baseUrl;
  baseUrl = "http://" + resource.host + ":" + resource.port;
  return {
    todos: baseUrl + "/" + resource.router.todos
  };
})();

Todos = (require('./Todos'))(fetch, url);

module.exports = assign({}, Todos);
