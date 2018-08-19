import ITodoState from '@/store/interfaces/ITodoState';

const getters = {
  completedTodos: (state: ITodoState) =>
    state.todos.filter(todo => todo.completed),
  filteredTodos: (state: ITodoState) => state.filteredTodos,
  field: (state: ITodoState) => state.field
};

export default getters;
