import ITodo from '@/model/todo.interface';
import IState from '@/store/interfaces/IState';

export default interface ITodoState extends IState<ITodo> {
  todos: ITodo[];
  filteredTodos: ITodo[] | null;
}
