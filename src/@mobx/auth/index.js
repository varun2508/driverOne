import { types, flow } from 'mobx-state-tree';
import AsyncStorage from '@react-native-community/async-storage';

import { navigate } from '@shared/helpers';
import api from 'api';

const ProfileInfo = {
  user: types.optional(types.string, ''),
};

const Profile = types
  .model('Profile', {
    email: types.optional(types.string, ''),
  })
  .actions((self) => {
    const logIn = flow(function* logIn(data, componentId) {
      try {
        const response = yield api.post('/login', data);
        const { token, email } = response;
        yield AsyncStorage.setItem('token', token);

        self.email = email;
        navigate('ProfileScreen', componentId);
      } catch (e) {
        console.log(e);
      }
    });

    const registration = flow(function* registration(data, componentId) {
      try {
        const response = yield api.post('/register', data);
        const { token, email } = response;
        yield AsyncStorage.setItem('token', token);
        self.email = email;

        navigate('ProfileScreen', componentId);
      } catch (e) {
        console.log(e);
      }
    });

    return {
      logIn,
      registration,
    };
  })
  .create();

export default Profile;
