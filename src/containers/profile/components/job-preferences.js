import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styled from 'styled-components/native';

// eslint-disable-next-line import/named
import { LocationInput } from '@shared';
import Card from './card';

class JobPreferences extends Component {
  state = {
    multiSliderValue: [3, 7],
  };

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  };

  render() {
    const { multiSliderValue } = this.state;
    return (
      <Card title="Your Job Preferences">
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
              checked
              containerStyle={styles.container}
              textStyle={styles.text}
            />
            <CheckBox
              title="3 - 6 months"
              checked
              containerStyle={styles.container}
              textStyle={styles.text}
            />
            <CheckBox
              title="1 year"
              checked
              containerStyle={styles.container}
              textStyle={styles.text}
            />
            <CheckBox
              title="Permanent"
              checked
              containerStyle={styles.container}
              textStyle={styles.text}
            />
          </SwiperContainer>
        </ScrollView>
      </Card>
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
