import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import User from '@mobx/user';
import Auth from '@mobx/auth';
// import { observer } from 'mobx-react';

import { primaryColor } from '../../utils/stylesConstants';

const defaultPlaceholder = {
  label: 'Select location',
  value: null,
  color: '#000'
};
const { setProfileInfo } = User;
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

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationId: null,
      locationName: '',
      locations: []
    };
  }

  setLocation = () => {
    const { arrayOfpoints, location } = this.props;
    const tempLocations = [];
    options.forEach(el => {
      arrayOfpoints &&
        arrayOfpoints.forEach(point => {
          if (point.pickup_point && el.label === point.pickup_point) {
            tempLocations.push({
              name: point.pickup_point,
              id: point.id,
              type: 'pickUpLocation'
            });
          }

          if (point.delivery_location && el.label === point.delivery_location) {
            tempLocations.push({
              name: point.delivery_location,
              id: point.id,
              type: 'deliveryLocation'
            });
          }

          if (location && el.label === location) {
            this.setState({
              locationId: el.value
            });
          }
        });
    });
    this.setState({
      locations: tempLocations
    });
  };
  componentDidMount() {
    this.setLocation();
  }

  componentDidUpdate(prevProps) {
    const { arrayOfpoints } = this.props;

    if (this.props.arrayOfpoints.length !== prevProps.arrayOfpoints.length) {
      this.setLocation();
    }
  }

  handleLocation = value => {
    const { name } = this.props;
    setProfileInfo({ [name]: value, location: options[value].label });
    this.setState({ locationName: options[value].label, locationId: value });
  };

  onDonePress = async () => {
    const { locationName } = this.state;
    const { label } = this.props;

    if (Platform.OS === 'ios') {
      if (label === 'Pickup point') {
        await Auth.addPickUpPoint({
          pickup_point: locationName
        });
      }
      if (label === 'Delivery location') {
        await Auth.addDeliveryLocations({
          delivery_location: locationName
        });
      }
    }
  };

  onDelete = async (id, type) => {
    if (type === 'pickUpLocation') {
      await Auth.deletePickupPoints({ id });
    }
    if (type === 'deliveryLocation') {
      await Auth.deleteDeliveryLocations({ id });
    }
  };

  render() {
    const { label, placeholder } = this.props;

    const { locationId, locations } = this.state;
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
              onValueChange={value => this.handleLocation(value)}
              placeholder={placeholder}
              style={pickerSelectStyles}
              items={options}
              value={locationId}
              onDonePress={() => this.onDonePress()}
            />
          </Wrapper>
          <Icon
            name="plus"
            size={12}
            color="#86939e"
            style={{ marginBottom: 5, marginLeft: -25 }}
          />
        </Container>
        <LocationsWrapper>
          {locations.map(el => {
            return (
              <AddedLocationContainer>
                <Text>
                  <LocationText>{el.name}</LocationText>
                  <Text>{'  '}</Text>
                  <Icon
                    name="times"
                    size={12}
                    color="#fff"
                    onPress={() => {
                      this.onDelete(el.id, el.type);
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

export default LocationInput;

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
    color: '#000',
    fontSize: 18,
    marginLeft: 10
  }
});

const WrapperContaiener = styled.View`
  min-height: 50px;
  margin-bottom: 10px;
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

const Label = styled.Text`
  color: #86939e;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;
