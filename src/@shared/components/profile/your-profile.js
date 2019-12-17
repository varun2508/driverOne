/* eslint-disable import/named */
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { observer } from 'mobx-react';
import { goHome } from 'navigation';
import User from '@mobx/user';
import { LocationInput } from '@shared';

const Label = () => (
  <View style={{ display: 'flex', flexDirection: 'row' }}>
    <Text style={{ marginRight: 5 }}>About me</Text>
    <Text style={{ color: '#82c0fb' }}>(Viewable by employers)</Text>
  </View>
);

const YourProfile = ({ screen }) => {
  const { setProfileInfo, profile } = User;
  const [firstName, setFirstName] = useState(profile.first_name);
  const [lastName, setLastName] = useState(profile.last_name);
  const [about, setAbout] = useState(profile.about);
  const handleFirstName = value => {
    setFirstName(value);
    setProfileInfo({ first_name: value });
  };

  const handleLastName = value => {
    setLastName(value);
    setProfileInfo({ last_name: value });
  };

  const handleChangeAbout = value => {
    setAbout(value);
    setProfileInfo({ about: value });
  };

  // useEffect(() => {
  //   if (screen === 'onboarding' && profile.first_name) {
  //     goHome();
  //   }
  // }, []);
  return (
    <>
      <Input
        value={firstName}
        containerStyle={{
          paddingHorizontal: 0,
          marginBottom: 10,
          marginTop: 20
        }}
        onChangeText={handleFirstName}
        placeholder="First Name"
        label={firstName && 'First Name'}
        placeholderTextColor="#000"
      />
      <Input
        value={lastName}
        containerStyle={{
          paddingHorizontal: 0,
          marginBottom: 10,
          marginTop: 20
        }}
        onChangeText={handleLastName}
        placeholder="Last Name"
        label={lastName && 'Last Name'}
        placeholderTextColor="#000"
      />
      <View style={{ marginTop: 20 }}>
        <LocationInput
          name="locationId"
          placeholder={{ label: 'Location', value: '', color: '#000' }}
          label="Location"
          location={profile.location}
          arrayOfpoints={[
            {
              id: 1,
              location_point: profile.location
            }
          ]}
        />
      </View>
      {screen !== 'onboarding' && (
        <View>
          <Input
            label={<Label />}
            multiline
            containerStyle={{
              paddingHorizontal: 0,
              marginBottom: 10,
              marginTop: 10
            }}
            onChangeText={value => handleChangeAbout(value)}
            value={about}
            numberOfLiness={10}
            style={{ height: 200, textAlignVertical: 'top' }}
          />
        </View>
      )}
    </>
  );
};

export default observer(YourProfile);
