import ITodoState from '@/store/interfaces/ITodoState';

const mutations = {
  Add(state: ITodoState) {
    if (state.field) {
      state.todos.push({
        id: state.uuid++,
        title: state.field
      });
    }
  }
};

export default mutations;
