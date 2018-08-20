import uniqid from 'uniqid';
import ITodoState from '@/store/interfaces/ITodoState';
import ITodo from '@/model/todo.interface';

const mutations = {
  Add(state: ITodoState) {
    if (state.field) {
      state.todos.push({
        id: uniqid(),
        title: state.field,
        completed: false
      });

      state.filteredTodos = null;
      state.field = '';
    }
  },
  Delete(state: ITodoState, data: { id: number } = { id: -1 }) {
    state.todos = state.todos.filter(s => s.id !== data.id);

    if (state.field) {
      state.filteredTodos = [...state.todos.filter(filterByfield(state.field))];
    }
  },
  Update(state: ITodoState, data: { todo: ITodo }) {
    const index = state.todos.findIndex(todo => {
      return todo.id === data.todo.id;
    });

    state.todos.splice(index, 1, data.todo);

    if (state.field) {
      state.filteredTodos = [...state.todos.filter(filterByfield(state.field))];
    }
  },
  Filter(state: ITodoState) {
    if (!state.field) {
      state.filteredTodos = null;
    } else {
      state.filteredTodos = [...state.todos.filter(filterByfield(state.field))];
    }
  },
  SetTodos(state: ITodoState, data: { todos: ITodo[] }) {
    state.todos = data.todos;
  }
};

const filterByfield = (field: string) => (todo: ITodo) => {
  return todo.title.toLowerCase().includes(field.toLowerCase());
};

export default mutations;
