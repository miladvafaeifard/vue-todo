import { HttpService } from './http-service';

export interface ResponseMessage {
  message: string;
  todos?: [];
  task: {
    id: string;
    text: string;
  };
}

export const TodoService = {
  create: async (task: any) => {
    return HttpService.post<ResponseMessage>(
      `todos?id=${task._id}&text=${task.field}`
    ).then(res => res.data);
  },
  remove: async (id: string) => {
    return HttpService.delete(`todos/${id}`).then(res => res.data);
  },
  update: async (task: any) => {
    return HttpService.put<ResponseMessage>(
      `todos?id=${task._id}&text=${task.task}&completed=${task.completed}`
    ).then(res => res.data);
  },
  getAll: async () => {
      return     HttpService.get<ResponseMessage>('todos')
      .then(res => res.data);
  }
};
