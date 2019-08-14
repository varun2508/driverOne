import { Navigation } from 'react-native-navigation';

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

const goHome = () => {};

function pushSingleScreenApp() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'WelcomeScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export { goToMain, goHome, pushSingleScreenApp };

// export const goHome = async (props) => {
//   return Navigation.setRoot({
//     root: {
//       bottomTabs: {
//         children: [
//             {
//                 stack: {
//                   children: [{
//                     component: {
//                       name: 'Status',
//                     },
//                   }],
//                   options: {
//                     bottomTab: {
//                         text: 'Status',
//                       textColor,
//                       selectedTextColor,
//                       icon: Status,
//                     },
//                   },
//                 },
//               },
//           {
//             stack: {
//               children: [{
//                 component: {
//                   name: 'Play',
//                 },
//               }],
//               options: {
//                 bottomTab: {
//                   text: 'Play & Win',
//                   textColor,
//                   selectedTextColor,
//                   icon: Play,
//                 },
//               },
//             },
//           },
//           {
//             stack: {
//               children: [{
//                 component: {
//                   name: 'More',
//                 },
//               }],
//               options: {
//                 bottomTab: {
//                   text: 'More',
//                   textColor,
//                   selectedTextColor,
//                   icon: More,
//                 },
//               },
//             },
//           },
//         ],
//         options: {},
//       },
//     },
//   });
// };
