import { HttpService } from '@/core/services/http-service';
import ITodo from '@/model/todo.interface';
import uniqid from 'uniqid';
import { TodoService } from '@/core/services/todo-service';

export type Action =
  | 'Add'
  | 'Delete'
  | 'Update'
  | 'LoadTodos'
  | 'SetTodos'
  | 'Filter'
  | 'SetField';

type CommitAnnotation = (action: Action, data?: any) => void;
type Commit = { commit: CommitAnnotation };

const actions = {
  Add({ commit }: Commit, data: { field: string }) {
    TodoService.create({
      _id: uniqid(),
      field: data.field
    }).then((res: any) => {
      if (!res.message) {
        commit('Add', { id: res.task.id, field: res.task.text });
      }
    });
  },
  Delete({ commit }: Commit, data: any) {
    TodoService.remove(data._id).then(res => {
      if (!res.message) {
        commit('Delete', data);
      }
    });
  },
  Update({ commit }: Commit, data: ITodo) {
    TodoService.update({ ...data }).then(res => {
      if (!res.message) {
        commit('Update', data);
      }
    });
  },
  Filter({ commit }: Commit) {
    commit('Filter');
  },
  LoadTodos({ commit }: Commit) {
    TodoService.getAll().then(res => {
      if (!res.message) {
        commit('SetTodos', { todos: res.todos });
      }
    });
  }
};

export default actions;
