export type Action = 'Add' | 'Delete';
export type Data = { value: string };
type CommitAnnotation = (action: Action, data: Data) => void;
type Commit = { commit: CommitAnnotation };

const actions = {
  Add({ commit }: Commit, data: Data) {
    commit('Add', data);
  }
};

export default actions;
