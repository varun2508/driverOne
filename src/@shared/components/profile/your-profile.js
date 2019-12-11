/* eslint-disable import/named */
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { observer } from "mobx-react";

import User from "@mobx/user";
import { LocationInput } from "@shared";

const YourProfile = () => {
  const { setProfileInfo, profile } = User;

  const [firstName, setFirstName] = useState(profile.first_name);
  const [lastName, setLastName] = useState(profile.last_name);

  const handleFirstName = value => {
    setFirstName(value);
    setProfileInfo({ first_name: value });
  };

  const handleLastName = value => {
    setLastName(value);
    setProfileInfo({ last_name: value });
  };
  console.log("----------profile", profile);
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
        label={firstName && "First Name"}
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
        label={lastName && "Last Name"}
        placeholderTextColor="#000"
      />
      <View style={{ marginTop: 20 }}>
        <LocationInput
          name="locationId"
          placeholder={{ label: "Location", value: "", color: "#000" }}
          label="Location"
          location={profile.location}
        />
      </View>
    </>
  );
};

export default observer(YourProfile);
