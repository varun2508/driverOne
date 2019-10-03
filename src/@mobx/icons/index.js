import { types, onPatch, flow } from 'mobx-state-tree';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// let Home;
// let Search;
// let MyList;
// let Profile;
// let More;
// let Settings;
// let DotsVertical;

const Fonts = [
  Entypo.getImageSource('home', 30),
  FontAwesome.getImageSource('search', 30),
  Feather.getImageSource('bookmark', 30),
  Ionicons.getImageSource('ios-people', 30),
  Ionicons.getImageSource('md-menu', 30),
  Ionicons.getImageSource('md-settings', 30),
  Entypo.getImageSource('dots-three-vertical', 20),
  MaterialIcons.getImageSource('person', 30),
  MaterialIcons.getImageSource('work', 30),
  MaterialIcons.getImageSource('local-atm', 30),
];
const Item = types.model({
  scale: types.optional(types.number, 0),
  uri: types.optional(types.string, ''),
});

const Icons = types
  .model('Icons', {
    icons: types.optional(types.map(Item), {}),
  })
  .actions((self) => {
    const fetchIcons = flow(function* fetchIcons() {
      try {
        const [
          Home,
          Search,
          MyList,
          Profile,
          More,
          Settings,
          DotsVertical,
          Person,
          Work,
          LocalAtm,
        ] = yield Promise.all(Fonts);
        const obj = {
          Home,
          Search,
          MyList,
          Profile,
          More,
          Settings,
          DotsVertical,
          Person,
          Work,
          LocalAtm,
        };

        self.icons = obj;
      } catch (error) {
        console.log(error);
      }
    });
    return {
      fetchIcons,
    };
  })
  .create();

onPatch(Icons, (patch) => {
  console.log(patch);
});

export default Icons;
