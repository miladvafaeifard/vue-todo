import { HttpService } from '@/core/services/http-service';
import ITodo from '@/model/todo.interface';

export type Action =
  | 'Add'
  | 'Delete'
  | 'Update'
  | 'LoadTodos'
  | 'SetTodos'
  | 'Filter'
  | 'SetField';

interface IdString {
  id: number;
}

type CommitAnnotation = (action: Action, data?: any) => void;
type Commit = { commit: CommitAnnotation };

const actions = {
  Add({ commit }: Commit) {
    commit('Add');
  },
  Delete({ commit }: Commit, data: IdString) {
    commit('Delete', data);
  },
  Update({ commit }: Commit, data: ITodo) {
    commit('Update', data);
  },
  Filter({ commit }: Commit) {
    commit('Filter');
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
