export type Action = 'Add' | 'Delete';
export type Data = {
  value?: string;
  id?: number;
};
type CommitAnnotation = (action: Action, data: Data) => void;
type Commit = { commit: CommitAnnotation };

const actions = {
  Add({ commit }: Commit, data: Data) {
    commit('Add', data);
  },
  Delete({ commit }: Commit, data: Data) {
    commit('Delete', data);
  }
};

export default actions;
