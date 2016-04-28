// Generated by CoffeeScript 1.10.0
var ADD_TODO_STATE, LOAD_TODO_STATE, MODIFY_TODO_STATE, REMOVE_TODO_STATE, SI, assign, constants, handleAction, handleActions, normalizerTodos, reduxActions, ref;

assign = Object.assign;

reduxActions = require('cfx.redux-actions').reduxActions;

handleAction = reduxActions.handleAction, handleActions = reduxActions.handleActions;

SI = require('cfx.seamless-immutable');

constants = require('../constants/Todos');

ref = constants.types, LOAD_TODO_STATE = ref.LOAD_TODO_STATE, ADD_TODO_STATE = ref.ADD_TODO_STATE, MODIFY_TODO_STATE = ref.MODIFY_TODO_STATE, REMOVE_TODO_STATE = ref.REMOVE_TODO_STATE;

normalizerTodos = (require('../initials/Todos')).normalizer.todos;

module.exports = handleActions({
  LOAD_TODO_STATE: function(state, action) {
    return action.payload.todos;
  },
  ADD_TODO_STATE: function(state, action) {
    var todo;
    todo = action.payload.todo;
    return SI.Array.push(state, [todo]);
  },
  MODIFY_TODO_STATE: function(state, action) {
    var index, ref1, todo;
    ref1 = action.payload, index = ref1.index, todo = ref1.todo;
    return SI.Array.set(state, index, assign({}, state[index], todo));
  },
  REMOVE_TODO_STATE: function(state, action) {
    var todo, todoId;
    todoId = action.payload.todoId;
    todo = (normalizerTodos(state)).entities.todos[todoId];
    return SI.Array.removeItem(state, todo);
  }
});
