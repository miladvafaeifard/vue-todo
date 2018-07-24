export type Action = 'Add' | 'Delete';
type CommitAnnotation = (action: Action) => void;
type Commit = { commit: CommitAnnotation };

const actions = {
  Add({ commit }: Commit) {
    commit('Add');
  }
};

export default actions;
