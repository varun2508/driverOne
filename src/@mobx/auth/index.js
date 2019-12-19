import { types, flow } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import { navigate } from '@shared/helpers';
import api from 'api';
import User from '@mobx/user';

const Profile = types
  .model('Profile', {
    email: types.optional(types.string, ''),
    errorMessage: types.optional(types.string, '')
  })
  .actions(self => {
    const logIn = flow(function* logIn(data, componentId) {
      try {
        const response = yield api.post('/api/user/login', data);
        const { token, email } = response;
        yield AsyncStorage.setItem('token', token);
        self.email = email;
        navigate('App', componentId);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const registration = flow(function* registration(data) {
      try {
        const response = yield api.post('/api/user/register', data);
        const { email } = response;
        // yield AsyncStorage.setItem("token", token);
        self.email = email;
        // navigate("App", componentId);
        Alert.alert('You were successfully registered! Please log in!');
        navigateTo('Log In');
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const getMe = flow(function* getMe() {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.get('/api/user/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        User.setProfileInfo(response);
        return;
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const updateProfile = flow(function* updateProfile(data) {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.patch('/api/user/profile', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const addPickUpPoint = flow(function* addPickUpPoint(data) {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.post('/api/user/pickup-points', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        User.setProfileInfo(response);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const addDeliveryLocations = flow(function* addDeliveryLocations(data) {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.post('/api/user/delivery-locations', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        User.setProfileInfo(response);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const deleteDeliveryLocations = flow(function* deleteDeliveryLocations(
      data
    ) {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.delete('/api/user/delivery-locations', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data
        });
        User.setProfileInfo(response);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const deletePickupPoints = flow(function* deletePickupPoints(data) {
      try {
        const token = yield AsyncStorage.getItem('token');
        const response = yield api.delete('/api/user/pickup-points', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data
        });
        User.setProfileInfo(response);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    return {
      logIn,
      registration,
      getMe,
      updateProfile,
      addPickUpPoint,
      addDeliveryLocations,
      deletePickupPoints,
      deleteDeliveryLocations
    };
  })
  .create();

export default Profile;
