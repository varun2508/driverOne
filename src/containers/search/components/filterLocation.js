import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { primaryColor, greyColor } from '../../../utils/stylesConstants';

const options = [
  { value: 0, label: 'New York, NY' },
  { value: 1, label: 'Chicago, IL' },
  { value: 2, label: 'Austin, TX' },
  { value: 3, label: 'Los Angeles, CA' },
  { value: 4, label: 'Houston, TX' },
  { value: 5, label: 'Philadelphia, PA' },
  { value: 6, label: 'Phoenix, AZ' },
  { value: 7, label: 'Portland, OR' },
  { value: 8, label: 'Seattle, WA' },
  { value: 9, label: 'Omaha, NE' },
  { value: 10, label: 'Newark, NJ' }
];

class FilterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationId: null,
      locationName: '',
      type: ''
    };
  }

  handleLocation = async (value, type) => {
    console.log('----------handle location', value);
    await this.setState(() => {
      return { locationName: options[value].label, locationId: value, type };
    });
    if (Platform.OS !== 'ios') {
      console.log('----------android', value);
    }
  };

  onDonePress = async () => {
    const { setLocation } = this.props;
    const { locationName, type } = this.state;

    console.log('----------done press');
    if (Platform.OS === 'ios') {
      console.log('----------ios', locationName);
      setLocation(locationName, type);
    }
  };

  render() {
    const { label, placeholder, arrayOfpoints, name, onDelete } = this.props;
    console.log('-----arrayOfpoints-----', arrayOfpoints);
    const { locationId } = this.state;
    return (
      <WrapperContaiener>
        {label ? <LocationLabelText>{label}</LocationLabelText> : null}

        <Container>
          <Icon
            name="map-marker-alt"
            size={13}
            color="#000"
            style={{ marginBottom: 5 }}
          />
          <Wrapper>
            <RNPickerSelect
              onValueChange={value => this.handleLocation(value, name)}
              placeholder={placeholder}
              style={pickerSelectStyles}
              items={options}
              value={locationId}
              onDonePress={() => this.onDonePress()}
            />
          </Wrapper>
          {Platform.OS === 'ios' && (
            <Icon
              name="plus"
              size={12}
              color="#86939e"
              style={{ marginBottom: 5, marginLeft: -25 }}
            />
          )}
        </Container>
        <LocationsWrapper>
          {arrayOfpoints.map((el, i) => {
            return (
              <AddedLocationContainer>
                <Text>
                  <LocationText>{el}</LocationText>
                  <Text>{'  '}</Text>
                  <Icon
                    name="times"
                    size={12}
                    color="#fff"
                    onPress={() => {
                      onDelete(i, name);
                    }}
                  />
                </Text>
              </AddedLocationContainer>
            );
          })}
        </LocationsWrapper>
      </WrapperContaiener>
    );
  }
}

export default FilterLocation;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: 20,
    color: '#000',
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 18
  },
  inputAndroid: {
    width: '100%',
    color: '#999',
    paddingLeft: 10,
    paddingBottom: 5
  },
  placeholder: {
    color: greyColor,
    fontSize: 16,
    marginLeft: 10
  }
});

const WrapperContaiener = styled.View`
  min-height: 50px;
  margin-bottom: 30px;
  /* border: 1px solid red; */
`;

const LocationsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: -20px;
`;

const AddedLocationContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 25px;
  margin-top: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 25px;
  background-color: ${primaryColor};
`;
const LocationText = styled.Text`
  color: #fff;
`;
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

const LocationLabelText = styled.Text`
  margin: 5px 0 10px 0px;
  font-size: 14px;
  color: #000;
`;
