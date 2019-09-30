import { Navigation } from 'react-native-navigation';

import { Header } from '@shared';

import WelcomeScreen from './welcome/welcome';
import AuthScreen from './auth/auth';
import Search from './search/search';
import ProfileScreen from './profile/profile';
import Jobs from './jobs/jobs';
import Payments from './payments/payments';
import ProfileInfoScreen from './profile-info/profile';
import App from '../../App';

export default function registerScreens() {
  Navigation.registerComponent('NavHeader', () => Header);
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('AuthScreen', () => AuthScreen);
  Navigation.registerComponent('ProfileInfoScreen', () => ProfileInfoScreen);
  Navigation.registerComponent('PaymentScreen', () => Payments);
  Navigation.registerComponent('JobsScreen', () => Jobs);
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('SearchScreen', () => Search);
}
