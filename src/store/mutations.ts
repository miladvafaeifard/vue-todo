import ITodoState from '@/store/interfaces/ITodoState';
import ITodo from '@/model/todo.interface';

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
  },
  Update(state: ITodoState, data: { todo: ITodo }) {
    const index = state.todos.findIndex(todo => {
      return todo.id === data.todo.id;
    });

    state.todos.splice(index, 1, data.todo);
  }
};

export default mutations;
