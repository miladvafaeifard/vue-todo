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
  id: string;
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
      _id: uniqid(),
      field: data.field
    };

    HttpService.post<ResponseMessege>(
      `todos?id=${newTask._id}&text=${newTask.field}`
    )
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
    const newTask = {
      ...data
    };
    HttpService.put<ResponseMessege>(
      `todos?id=${newTask._id}&text=${newTask.task}&completed=${
        newTask.completed
      }`
    )
      .then(res => res.data)
      .then(res => {
        if (!res.messege) {
          commit('Update', data);
        }
      });
  },
  Filter({ commit }: Commit) {
    commit('Filter');
  },
  LoadTodos({ commit }: Commit) {
    HttpService.get('todos')
      .then(res => res.data)
      .then(res => {
        if (!res.message) {
          commit('SetTodos', { todos: res.todos });
        }
      });
  }
};

export default actions;
