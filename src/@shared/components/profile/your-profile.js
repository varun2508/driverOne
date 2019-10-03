/* eslint-disable import/named */
import React, { Component } from 'react';
import { Input } from 'react-native-elements';

import { LocationInput } from '@shared';

class YourProfile extends Component {
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
      <>
        <Input
          value={firstName}
          containerStyle={{ paddingHorizontal: 0, marginBottom: 10 }}
          onChangeText={handleFirstName}
          placeholder="First Name"
          label={firstName && 'First Name'}
        />
        <Input
          value={lastName}
          containerStyle={{ paddingHorizontal: 0, marginBottom: 10 }}
          onChangeText={handleLastName}
          placeholder="Last Name"
          label={lastName && 'Last Name'}
        />
        <LocationInput handleLocation={handleLocation} location={location} />
      </>
    );
  }
}

export default YourProfile;
