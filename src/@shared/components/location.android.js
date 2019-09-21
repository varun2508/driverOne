import React, { useState } from 'react';
import { Picker } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Location = () => {
  const [location, setLocation] = useState(0);
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
        <Picker
          selectedValue={location}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          {options.map(({ label, value }) => (
            <Picker.Item label={label} value={value} />
          ))}
        </Picker>
      </Wrapper>
    </Container>
  );
};

export default Location;

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
