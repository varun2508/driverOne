import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import SelectInput from 'react-native-select-input-ios';
import Icon from 'react-native-vector-icons/FontAwesome5';

const iosInput = {
  minHeight: 30,
  paddingBottom: 10,
  paddingTop: 10,
};

const iosLabel = {
  fontSize: 18,
};

const iosStyle = Platform.OS === 'ios' ? iosInput : {};
const iosLabelStyle = Platform.OS === 'ios' ? iosLabel : {};

const LocationInput = ({ handleLocation, location }) => {
  const options = [
    { value: 0, label: 'Location', disabled: true },
    { value: 1, label: 'Chicago' },
    { value: 2, label: 'Austin' },
  ];

  return (
    <Container>
      <Icon name="map-marker-alt" size={12} color="#000" />
      <Wrapper>
        {location ? <Label>Location</Label> : null}
        <SelectInput
          placeholder="Location"
          value={location}
          options={options}
          onValueChange={handleLocation}
          style={{ ...styles.input, ...iosStyle }}
          labelStyle={{ ...styles.lablel, ...iosLabelStyle }}
        />
      </Wrapper>
    </Container>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
  },

  lablel: {
    color: '#999',
    paddingLeft: 10,
  },
});

const Container = styled.View`
  border-bottom-width: 1;
  border-bottom-color: gray;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.View`
  width: 100%;
`;

const Label = styled.Text``;
