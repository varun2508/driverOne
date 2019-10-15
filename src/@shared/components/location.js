import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';

import User from '@mobx/user';

const defaultPlaceholder = { label: 'Select location', value: null };
const { setProfileInfo } = User;
const options = [
  { value: 0, label: 'Location', disabled: true },
  { value: 1, label: 'Chicago' },
  { value: 2, label: 'Austin' },
];

const LocationInput = ({ location, placeholder = defaultPlaceholder, name }) => {
  const [locationId, setLocationId] = useState();

  const handleLocation = (value) => {
    setProfileInfo({ [name]: value });
    setLocationId(value);
  };

  return (
    <WrapperContaiener>
      {locationId ? <Label>Location</Label> : null}

      <Container>
        <Icon name="map-marker-alt" size={12} color="#000" style={{ marginBottom: 5 }} />
        <Wrapper>
          <RNPickerSelect
            onValueChange={(value) => handleLocation(value)}
            placeholder={placeholder}
            style={pickerSelectStyles}
            items={options}
            value={locationId}
          />
        </Wrapper>
      </Container>
    </WrapperContaiener>
  );
};

export default LocationInput;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: 20,
    color: '#000',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  inputAndroid: {
    width: '100%',
    color: '#999',
    paddingLeft: 10,
    paddingBottom: 5,
  },
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
