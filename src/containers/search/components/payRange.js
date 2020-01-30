import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PayRange = ({ multiSliderPayRangeChange, payRangeFrom, payRangeTo }) => {
  return (
    <View>
      <SwiperContainer>
        <Label>
          <PickerLabel>Pay Range</PickerLabel>
        </Label>
        <Price>
          <Text
            style={{
              marginRight: 10
            }}
          >
            {'$1'}
          </Text>
          <MultiSlider
            values={[payRangeFrom, payRangeTo]}
            onValuesChange={multiSliderPayRangeChange}
            min={1}
            sliderLength={230}
            max={30}
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
            $30
          </Text>
        </Price>
      </SwiperContainer>
    </View>
  );
};

export default PayRange;

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
