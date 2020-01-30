import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { primaryColor, greyColor } from '../../../utils/stylesConstants';

const Hours = ({ setHours }) => {
  const [selectedOption, setSelectedOption] = useState('first');

  const handleSelection = (amount, type) => {
    setSelectedOption(type);
    setHours(amount);
  };
  return (
    <SwiperContainer>
      <PickerLabel>Hours</PickerLabel>
      <HoursRangeContainer>
        <RangeWithRightBorder
          onPress={() => handleSelection([0, 10], 'first')}
          style={selectedOption === 'first' && styles.leftSelectedRange}
        >
          <Text
            style={
              selectedOption === 'first'
                ? styles.selectedText
                : styles.diselectedText
            }
          >
            >10
          </Text>
        </RangeWithRightBorder>
        <RangeWithRightBorder
          onPress={() => handleSelection([10, 15], 'second')}
          style={selectedOption === 'second' && styles.selected}
        >
          <Text
            style={
              selectedOption === 'second'
                ? styles.selectedText
                : styles.diselectedText
            }
          >
            10-15
          </Text>
        </RangeWithRightBorder>
        <RangeWithRightBorder
          onPress={() => handleSelection([16, 20], 'third')}
          style={selectedOption === 'third' && styles.selected}
        >
          <Text
            style={
              selectedOption === 'third'
                ? styles.selectedText
                : styles.diselectedText
            }
          >
            16-20
          </Text>
        </RangeWithRightBorder>
        <LastBlockRange
          onPress={() => handleSelection([20, 1000], 'fourth')}
          style={selectedOption === 'fourth' && styles.rightSelectedRange}
        >
          <Text
            style={
              selectedOption === 'fourth'
                ? styles.selectedText
                : styles.diselectedText
            }
          >
            20+
          </Text>
        </LastBlockRange>
      </HoursRangeContainer>
    </SwiperContainer>
  );
};

export default Hours;

const styles = StyleSheet.create({
  selected: {
    backgroundColor: primaryColor
  },
  selectedText: {
    color: '#fff'
  },
  diselectedText: {
    color: primaryColor
  },

  leftSelectedRange: {
    backgroundColor: primaryColor,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  rightSelectedRange: {
    backgroundColor: primaryColor,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  }
});

const SwiperContainer = styled.View`
  margin-top: 15px;
`;
const PickerLabel = styled.Text`
  /* margin: 0 10px 0 20px; */
  font-size: 16px;
  letter-spacing: 1.05;
`;

const HoursRangeContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
  width: 90%;
  height: 25px;
  border: 1px solid ${primaryColor};
  border-radius: 20px;
`;
const RangeWithRightBorder = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 25%;
  height: 100%;
  border-right-width: 1px;
  border-color: ${primaryColor};
`;

const LastBlockRange = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 25%;
  height: 100%;
`;
