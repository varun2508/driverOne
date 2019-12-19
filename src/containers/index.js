import { Navigation } from 'react-native-navigation';

import { Header } from '@shared';

import WelcomeScreen from './welcome/welcome';
import AuthScreen from './auth/auth';
import Search from './search/search';
import ProfileScreen from './profile/profile';
import Jobs from './jobs/jobs';
import Payments from './payments/payments';
import ProfileOnboardingScreen from './profile-onboarding/profile';
import UpdateProfile from './update-profile/update-profile';
import App from '../../App';
import { HowItWorks, Referal } from './referal';

export default function registerScreens() {
  Navigation.registerComponent('NavHeader', () => Header);
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('AuthScreen', () => AuthScreen);
  Navigation.registerComponent(
    'ProfileOnboardingScreen',
    () => ProfileOnboardingScreen
  );
  Navigation.registerComponent('PaymentScreen', () => Payments);
  Navigation.registerComponent('JobsScreen', () => Jobs);
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('SearchScreen', () => Search);
  Navigation.registerComponent('UpdateProfile', () => UpdateProfile);
  Navigation.registerComponent('HowItWorks', () => HowItWorks);
  Navigation.registerComponent('Referal', () => Referal);
}
