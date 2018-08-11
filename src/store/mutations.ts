import ITodoState from '@/store/interfaces/ITodoState';

const mutations = {
  Add(state: ITodoState, data: { value: string } = { value: '' }) {
    if (data.value) {
      state.todos.push({
        id: ++state.uuid,
        title: data.value,
        completed: false
      });
    }
  },
  Delete(state: ITodoState, data: { id: number } = { id: -1 }) {
    state.todos = state.todos.filter(s => s.id !== data.id);
  }
};

export default mutations;
