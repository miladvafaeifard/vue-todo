export default interface IState<T> {
  field: string;
  uuid: number;
  todos: Array<T>;
}
