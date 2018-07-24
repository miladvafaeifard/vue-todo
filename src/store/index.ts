import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import ITodoState from './interfaces/ITodoState';

const state: ITodoState = {
  field: '',
  uuid: 0,
  todos: [
    {
      id: 0,
      title: 'Hello my girl'
    }
  ]
};

const createStore = () => {
  return new Vuex.Store<ITodoState>({
    state,
    mutations,
    actions
  });
};

export default createStore;
