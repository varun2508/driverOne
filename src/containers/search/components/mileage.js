import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Mileage = ({ multiSliderValuesChange, mileageFrom, mileageTo }) => {
  return (
    <View>
      <SwiperContainer>
        <Label>
          <PickerLabel>Mileage</PickerLabel>
          <Range>
            <Text style={{ color: '#2182D9' }}>{mileageFrom} - </Text>
            <Text style={{ color: '#2182D9' }}>{mileageTo} miles</Text>
          </Range>
        </Label>
        <Price>
          <Text
            style={{
              marginRight: 10
            }}
          >
            {'<25'}
          </Text>
          <MultiSlider
            values={[mileageFrom, mileageTo]}
            onValuesChange={multiSliderValuesChange}
            min={25}
            sliderLength={230}
            max={100}
            selectedStyle={{
              backgroundColor: '#2282d9'
            }}
            unselectedStyle={{
              backgroundColor: '#d4d0d1'
            }}
            containerStyle={{
              height: 40
            }}
            trackStyle={{
              height: 3,
              paddingRight: 10,
              backgroundColor: 'red'
            }}
            touchDimensions={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderColor: '#2282d9',
              slipDisplacement: 20
            }}
            customMarker={() => (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderWidth: 2,
                  borderRadius: 20,
                  backgroundColor: '#fff',
                  borderColor: '#2282d9'
                }}
              />
            )}
            allowOverlap
            snapped
          />
          <Text
            style={{
              marginLeft: 10
            }}
          >
            100+
          </Text>
        </Price>
      </SwiperContainer>
    </View>
  );
};

export default Mileage;

const PickerLabel = styled.Text`
  /* margin: 0 10px 0 20px; */
  font-size: 16px;
  letter-spacing: 1.05;
`;

const SwiperContainer = styled.View`
  margin-top: 15px;
`;
const Price = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Label = styled.View`
  display: flex;
  flex-direction: row;
`;
const Range = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
  margin-left: 10px;
`;
