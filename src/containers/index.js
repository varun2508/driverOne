import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './welcome/welcome';
import { Header } from '@shared';
import App from '../../App';

export default function registerScreens() {
  Navigation.registerComponent('NavHeader', () => Header);
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
}
