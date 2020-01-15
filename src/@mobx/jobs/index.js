import { types, getSnapshot } from 'mobx-state-tree';

const initialState = {};

const Jobs = types
  .model('Job', {
    jobs: types.optional(types.map(types.frozen()), initialState)
  })
  .actions(self => {
    const setJobsInfo = data => {
      const jobs = { data };
      self.jobs = jobs;
    };

    return {
      setJobsInfo
    };
  })
  .views(self => ({
    get allJobs() {
      return getSnapshot(self.jobs);
    }
  }))
  .create();

export default Jobs;
