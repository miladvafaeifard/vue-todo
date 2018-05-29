import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    field: '',
    uuid: 0,
    todos: [
      {
        id: 0,
        title: 'Hello my girl'
      }
    ]
  },
  mutations: {
    Add(state) {
      if (state.field) {
        state.todos.push({
          id: state.uuid++,
          title: state.field
        });
      }
    }
  },
  actions: {
    Add({ commit }) {
      commit('Add');
    }
  }
});
