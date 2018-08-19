import { HttpService } from '@/core/services/http-service';
import ITodo from '@/model/todo.interface';

export type Action = 'Add' | 'Delete' | 'Update' | 'LoadTodos' | 'SetTodos';
export type Data = {
  value?: string;
  id?: number;
  completed?: boolean;
  todos?: ITodo[];
};
type CommitAnnotation = (action: Action, data: Data) => void;
type Commit = { commit: CommitAnnotation };

const actions = {
  Add({ commit }: Commit, data: Data) {
    commit('Add', data);
  },
  Delete({ commit }: Commit, data: Data) {
    commit('Delete', data);
  },
  Update({ commit }: Commit, data: Data) {
    commit('Update', data);
  },
  LoadTodos({ commit }: Commit) {
    HttpService.get('todos')
      .then(res => res.data)
      .then(todos => {
        commit('SetTodos', { todos });
      });
  }
};

export default actions;
