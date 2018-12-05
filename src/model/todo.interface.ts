export default interface ITodo {
    id?: number | string;
    _id: string;
    task: string;
    completed?: boolean;
}
