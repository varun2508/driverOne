import { Navigation } from 'react-native-navigation';
import registerScreens from './src/containers/index';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
        // eslint-disable-next-line prettier/prettier
      },
    },
  });
});
