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
        console.log('-----error on get jobs-----', e);
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const searchJobs = flow(function* searchJobs(filters) {
      // console.log('------filters----', filters);
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.post('/api/job/search', filters, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          filters
        });

        Jobs.setJobsInfo(response);
        return;
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const applyToJob = flow(function* applyToJob(body) {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.post('/api/driver/take-job', body, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('----------on job apply', response);
        return;
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const getDriverPendingJobs = flow(function* getDriverPendingJobs(body) {
      console.log('--------on getDriverPendingJobsbe fore call----', body);
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.get(
          '/api/driver/jobs',
          {
            data: body
            // headers: {
            //   Authorization: `Bearer ${token}`
            // }
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        // ('/api/driver/jobs', body, {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // });
        console.log('----------getDriverPendingJobsbe', response);
        return;
      } catch (e) {
        console.log('-------error on get pending---');
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    return {
      getAllJobs,
      searchJobs,
      applyToJob,
      getDriverPendingJobs
    };
  })
  .create();

export default JobsList;
