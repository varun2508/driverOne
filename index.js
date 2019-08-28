import { Navigation } from 'react-native-navigation';
import registerScreens from './src/containers/index';

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./reacto-tron-config').then(() => console.log('Reactotron Configured'));
}

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });
});
