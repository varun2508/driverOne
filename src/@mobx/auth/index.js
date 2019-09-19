import { types, flow } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';

import { navigate } from '@shared/helpers';
import api from 'api';

const Profile = types
  .model('Profile', {
    email: types.optional(types.string, ''),
    errorMessage: types.optional(types.string, ''),
  })
  .actions((self) => {
    const logIn = flow(function* logIn(data, componentId) {
      try {
        const response = yield api.post('/login', data);
        const { token, email } = response;
        yield AsyncStorage.setItem('token', token);

        self.email = email;
        navigate('App', componentId);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const registration = flow(function* registration(data, componentId) {
      try {
        const response = yield api.post('/register', data);
        const { token, email } = response;
        yield AsyncStorage.setItem('token', token);
        self.email = email;

        navigate('App', componentId);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    return {
      logIn,
      registration,
    };
  })
  .create();

export default Profile;
