export type Action = 'Add' | 'Delete' | 'Update';
export type Data = {
  value?: string;
  id?: number;
  completed?: boolean;
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
  }
};

export default actions;
