import { Navigation } from 'react-native-navigation';

import { Header } from '@shared';

import WelcomeScreen from './welcome/welcome';
import AuthScreen from './auth/auth';
import App from '../../App';

export default function registerScreens() {
  Navigation.registerComponent('NavHeader', () => Header);
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('AuthScreen', () => AuthScreen);
}
