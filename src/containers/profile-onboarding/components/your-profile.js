/* eslint-disable import/named */
import React, { Component } from 'react';

import { YourProfile, Card } from '@shared';

class Profile extends Component {
  state = {};

  render() {
    return <YourProfile screen={'onboarding'} title="Your Profile" />;
  }
}

export default Profile;
