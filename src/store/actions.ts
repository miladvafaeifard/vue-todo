import { HttpService } from '@/core/services/http-service';
import ITodo from '@/model/todo.interface';
import uniqid from 'uniqid';

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

interface ResponseMessege {
  messege: string;
  task: {
    id: string;
    text: string;
  };
}

const actions = {
  Add({ commit }: Commit, data: { field: string }) {
    const newTask = {
      id: uniqid(),
      field: data.field
    };

    HttpService.post<ResponseMessege>(`todos?id=${newTask.id}&text=${newTask.field}`)
      .then(res => res.data)
      .then(res => {
        if (!res.messege) {
          commit('Add', { id: res.task.id, field: res.task.text });
        }
      });
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
