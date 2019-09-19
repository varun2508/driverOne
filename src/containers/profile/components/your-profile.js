import React from 'react';
import { Input } from 'react-native-elements';

const YourProfile = () => {
  return (
    <>
      <Input
        secureTextEntry
        value=""
        onBlur={() => {}}
        containerStyle={{ paddingHorizontal: 0, marginBottom: 10 }}
        onChangeText={() => {}}
        placeholder="First Name"
        label={false && 'First Name'}
      />
      <Input
        secureTextEntry
        value=""
        containerStyle={{ paddingHorizontal: 0, marginBottom: 10 }}
        onBlur={() => {}}
        onChangeText={() => {}}
        placeholder="Last Name"
        label={false && 'Last Name'}
      />
      <Input
        secureTextEntry
        value=""
        containerStyle={{ paddingHorizontal: 0 }}
        onBlur={() => {}}
        onChangeText={() => {}}
        placeholder="Location"
        label={false && 'Location'}
      />
    </>
  );
};

export default YourProfile;
