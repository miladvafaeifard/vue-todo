import uniqid from 'uniqid';
import ITodoState from '@/store/interfaces/ITodoState';
import ITodo from '@/model/todo.interface';

const ALLOWED_LETTERS_NUMBER = 4;

const mutations = {
  Add(state: ITodoState, data: {id: string, field: string}) {
    if (data.field) {
      state.todos.push({
        _id: data.id,
        task: data.field,
        completed: false
      });

      state.filteredTodos = null;
      state.field = '';
    }
  },
  Delete(state: ITodoState, data: { _id: string } = { _id: '' }) {
    state.todos = state.todos.filter(s => s._id !== data._id);

    if (state.field) {
      state.filteredTodos = [...state.todos.filter(filterByfield(state.field))];
    }
  },
  Update(state: ITodoState, data: { todo: ITodo }) {
    const index = state.todos.findIndex(todo => {
      return todo._id === data.todo._id;
    });

    state.todos.splice(index, 1, data.todo);

    if (state.field) {
      state.filteredTodos = [...state.todos.filter(filterByfield(state.field))];
    }
  },
  Filter(state: ITodoState) {
    if (state.field.length < ALLOWED_LETTERS_NUMBER) {
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
  return todo.task.toLowerCase().includes(field.toLowerCase());
};

export default mutations;
