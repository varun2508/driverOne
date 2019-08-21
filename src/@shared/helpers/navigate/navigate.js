import { Navigation } from 'react-native-navigation';

const navigate = (screenName, componentId, props) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps: props,
    },
    options: {
      animations: false,
    },
  });
};

export default navigate;
