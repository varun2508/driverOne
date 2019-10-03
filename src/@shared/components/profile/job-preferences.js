import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styled from 'styled-components/native';

// eslint-disable-next-line import/named
import { LocationInput } from '@shared';

class JobPreferences extends Component {
  state = {
    multiSliderValue: [3, 7],
    checkboxSelected: { week: false, sixMonths: false, year: false, permanent: false },
  };

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  };

  handleContract = (value) => {
    const { checkboxSelected } = this.state;
    const contract = checkboxSelected[value];

    this.setState({ checkboxSelected: { ...checkboxSelected, [value]: !contract } });
  };

  render() {
    const { multiSliderValue, checkboxSelected } = this.state;
    return (
      <>
        <ScrollView>
          <LocationInput />
          <Wrapper>
            <LocationInput />
          </Wrapper>
          <SwiperContainer>
            <Label>
              <Text>Pay Range </Text>
              <Range>
                <Text style={{ color: '#2182D9' }}>${multiSliderValue[0]} - </Text>
                <Text style={{ color: '#2182D9' }}>${multiSliderValue[1]}/hour</Text>
              </Range>
            </Label>
            <Price>
              <Text>1$</Text>
              <MultiSlider
                values={[multiSliderValue[0], multiSliderValue[1]]}
                onValuesChange={this.multiSliderValuesChange}
                min={1}
                sliderLength={230}
                max={30}
                allowOverlap
                snapped
              />
              <Text>30$</Text>
            </Price>
          </SwiperContainer>
          <SwiperContainer>
            <Text style={{ marginBottom: 10 }}>Contract Length </Text>
            <CheckBox
              title="1 week"
              checked={checkboxSelected.week}
              onPress={() => this.handleContract('week')}
              containerStyle={styles.container}
              textStyle={styles.text}
            />
            <CheckBox
              title="3 - 6 months"
              checked={checkboxSelected.sixMonths}
              onPress={() => this.handleContract('sixMonths')}
              containerStyle={styles.container}
              textStyle={styles.text}
            />
            <CheckBox
              title="1 year"
              checked={checkboxSelected.year}
              onPress={() => this.handleContract('year')}
              containerStyle={styles.container}
              textStyle={styles.text}
            />
            <CheckBox
              title="Permanent"
              checked={checkboxSelected.permanent}
              onPress={() => this.handleContract('permanent')}
              containerStyle={styles.container}
              textStyle={styles.text}
            />
          </SwiperContainer>
        </ScrollView>
      </>
    );
  }
}

export default JobPreferences;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    paddingBottom: 5,
    marginLeft: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: '100',
  },
});

const Wrapper = styled.View`
  margin-top: 10;
  margin-bottom: 10;
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
`;
