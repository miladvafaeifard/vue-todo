import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import ITodoState from './interfaces/ITodoState';

const state: ITodoState = {
  field: '',
  todos: [],
  filteredTodos: null
};

const createStore = () => {
  return new Vuex.Store<ITodoState>({
    state,
    mutations,
    actions,
    getters
  });
};

export default createStore;
