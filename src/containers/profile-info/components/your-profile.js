/* eslint-disable import/named */
import React, { Component } from 'react';

import { YourProfile, Card } from '@shared';

class Profile extends Component {
  state = {};

  render() {
    const {
      handleFirstName,
      handleLastName,
      firstName,
      lastName,
      handleLocation,
      location,
    } = this.props;

    return (
      <Card title="Your Profile">
        <YourProfile
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleLocation={handleLocation}
          firstName={firstName}
          lastName={lastName}
          location={location}
        />
      </Card>
    );
  }
}

export default Profile;
