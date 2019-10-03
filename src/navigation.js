import { Navigation } from 'react-native-navigation';
import { getSnapshot } from 'mobx-state-tree';
import Icons from '@mobx/icons';

const goToMain = async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'WelcomeScreen',
        children: [
          {
            component: {
              name: 'WelcomeScreen',
            },
          },
        ],
      },
    },
  });
};

const profileDetails = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ProfileInfoScreen',
        children: [
          {
            component: {
              name: 'ProfileInfoScreen',
            },
          },
        ],
      },
    },
  });
};

function PreviewScreens() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'WelcomeScreen',
              options: {
                topBar: {
                  title: {
                    component: {
                      name: 'NavHeader',
                    },
                  },
                  background: {
                    color: '#7ac0ff',
                  },
                  noBorder: true,
                  drawBehind: false,
                  visible: true,
                  animate: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

const defaultTobBarOption = {
  visible: false,
  animate: false,
  height: 0,
  noBorder: true,
  drawBehind: true,
  transparent: true,
  elevation: 0,
  background: {
    color: 'transparent',
  },
};
const goHome = async (props) => {
  const Icon = getSnapshot(Icons.icons);
  const iconColor = '#8e8e93';
  const textColor = '#8e8e93';
  const selectedTextColor = '#0393FD';
  const selectedIconColor = '#0393FD';

  return Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            currentTabIndex: 3,
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'SearchScreen',
                    passProps: props,
                  },
                },
              ],
              options: {
                topBar: defaultTobBarOption,
                bottomTab: {
                  selectedIconColor,
                  iconColor,
                  textColor,
                  selectedTextColor,
                  icon: Icon.Search,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'JobsScreen',
                  },
                },
              ],
              options: {
                topBar: defaultTobBarOption,
                bottomTab: {
                  selectedIconColor,
                  iconColor,
                  textColor,
                  selectedTextColor,
                  icon: Icon.Work,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'PaymentScreen',
                  },
                },
              ],
              options: {
                topBar: defaultTobBarOption,
                bottomTab: {
                  selectedIconColor,
                  iconColor,
                  textColor,
                  selectedTextColor,
                  icon: Icon.LocalAtm,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'ProfileScreen',
                    passProps: props,
                  },
                },
              ],
              options: {
                topBar: defaultTobBarOption,
                bottomTab: {
                  selectedIconColor,
                  iconColor,
                  textColor,
                  selectedTextColor,
                  icon: Icon.Person,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export { goToMain, profileDetails, PreviewScreens, goHome };
