import { types, flow } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import api from 'api';
import Jobs from '@mobx/jobs';

const JobsList = types
  .model('Jobs', {})
  .actions(self => {
    const getAllJobs = flow(function* getAllJobs() {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.get('/api/job/all', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        Jobs.setJobsInfo(response);
        return;
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    return {
      getAllJobs
    };
  })
  .create();

export default JobsList;
