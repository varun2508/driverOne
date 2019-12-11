import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/FontAwesome5";

import User from "@mobx/user";

const defaultPlaceholder = {
  label: "Select location",
  value: null,
  color: "#000"
};
const { setProfileInfo } = User;
const options = [
  { value: 0, label: "New York, NY" },
  { value: 1, label: "Chicago, IL" },
  { value: 2, label: "Austin, TX" },
  { value: 3, label: "Los Angeles, CA" },
  { value: 4, label: "Houston, TX" },
  { value: 5, label: "Philadelphia, PA" },
  { value: 6, label: "Phoenix, AZ" },
  { value: 7, label: "Portland, OR" },
  { value: 8, label: "Seattle, WA" },
  { value: 9, label: "Omaha, NE" },
  { value: 10, label: "Newark, NJ" }
];

const LocationInput = ({
  location,
  label,
  placeholder = defaultPlaceholder,
  name
}) => {
  const [locationId, setLocationId] = useState("");
  useEffect(() => {
    options.forEach(el => {
      if (el.label === location) {
        setLocationId(el.value);
      }
    });
  }, []);

  const handleLocation = value => {
    console.log("-----handleLocation-----", value, [name]);
    setProfileInfo({ [name]: value, location: options[value].label });
    setLocationId(value);
  };

  return (
    <WrapperContaiener>
      {locationId ? <Label>{label}</Label> : null}

      <Container>
        <Icon
          name="map-marker-alt"
          size={13}
          color="#000"
          style={{ marginBottom: 5 }}
        />
        <Wrapper>
          <RNPickerSelect
            onValueChange={value => handleLocation(value)}
            placeholder={placeholder}
            style={pickerSelectStyles}
            items={options}
            value={locationId}
          />
        </Wrapper>
        <Icon
          name="plus"
          size={12}
          color="#000"
          style={{ marginBottom: 5, marginLeft: -25 }}
        />
      </Container>
    </WrapperContaiener>
  );
};

export default LocationInput;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "100%",
    height: 20,
    color: "#000",
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 18
  },
  inputAndroid: {
    width: "100%",
    color: "#999",
    paddingLeft: 10,
    paddingBottom: 5
  },
  placeholder: {
    color: "#000",
    fontSize: 18,
    marginLeft: 10
  }
});

const WrapperContaiener = styled.View``;

const Container = styled.View`
  border-bottom-width: 1;
  border-bottom-color: gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Wrapper = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  color: #86939e;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;
