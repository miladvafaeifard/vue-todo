import ITodoState from '@/store/interfaces/ITodoState';

const mutations = {
  Add(state: ITodoState, data: { value: '' }) {
    console.log('data: ', data);
    if (data.value) {
      state.todos.push({
        id: state.uuid++,
        title: data.value,
        completed: false
      });
    }
  }
};

export default mutations;
