import { types, getSnapshot } from 'mobx-state-tree';

const initialState = { checkState: {}, priceRange: [] };

const User = types
  .model('User', {
    user: types.optional(types.map(types.frozen()), initialState)
  })
  .actions(self => {
    const setProfileInfo = data => {
      const selfUser = getSnapshot(self.user);
      const user = { ...selfUser, ...data };
      self.user = user;
    };

    return {
      setProfileInfo
    };
  })
  .views(self => ({
    get profile() {
      return getSnapshot(self.user);
    }
  }))
  .create();

export default User;
