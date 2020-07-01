import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: "all",
    todos: [
      {
        id: 1,
        title: "Finish Vue Course",
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: "Take Over the world",
        completed: true,
        editing: false
      },
      {
        id: 3,
        title: "Refactor my code",
        completed: false,
        editing: false
      }
    ]
  },
  getters: {
    remaining(state) {
      return state.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0;
    },
    todosFiltered(state) {
      if (state.filter == "all") {
        return state.todos;
      } else if (state.filter == "active") {
        return state.todos.filter(todo => !todo.completed);
      } else if (state.filter == "completed") {
        return state.todos.filter(todo => todo.completed);
      }

      return state.todos;
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0;
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false
      });
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    }
  },
  actions: {},
  modules: {}
});
