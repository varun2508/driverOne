import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  DatePickerAndroid,
  ScrollView
} from 'react-native';
import { format } from 'date-fns';
import { ModalComponent } from '@shared/components/modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import JobsList from '@mobx/jobsApi';
import { primaryColor, greyColor } from '../../../utils/stylesConstants';
import FilterLocation from './filterLocation';
import IosDateModal from './iosDateModal';
import Mileage from './mileage';
import Hours from './hours';
import PayRange from './payRange';

// import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
// import JobsList from '@mobx/jobsApi';

// {
// 	"search_string": "Newark",
//     "pickup_points": {
//     	"0": "Newark, NJ",
//     	"1": "Fairfax, VA"
//     },
//     "delivery_locations": {
//     	"0": "Fairfax, VA"
//     },
//     "final_destinations": {
//     	"0": "Newark, NJ"
//     },
//     "date_start": "01/13/2020",
//     "date_end": "01/20/2020",
//     "mileage_from": "50",
//     "mileage_to": "75",
//     "hours_from": "0",
//     "hours_to": "50",
//     "pay_from": "20",
//     "pay_to": "30",
//     "page": "1",
//     "count": "5"
// }

const FiltersModal = ({ isOpenModal, setIsOpenModal, handleCloseModal }) => {
  const [filters, setFilters] = useState({
    pickup_points: {},
    delivery_locations: {},
    final_destinations: {},
    date_start: '',
    date_end: '',
    mileage_from: '',
    mileage_to: '',
    hours_from: '',
    hours_to: '',
    pay_from: '',
    pay_to: ''
  });
  const [openDeliveryLocation, handleDeliveryLocation] = useState(false);
  const [pickupPoints, setPickUpPoints] = useState([]);
  const [deliveryPoints, setDeliveryPoints] = useState([]);
  const [finalPoints, setFinalPoints] = useState([]);
  const [date, handleDate] = useState({ from: new Date(), to: new Date() });
  const [dateTypeToChange, handleDateTypeToChange] = useState('from');
  const [modalHourVisible, handleModalHourVisible] = useState(false);
  const [mileageFrom, handleMileageFrom] = useState('20');
  const [mileageTo, handleMileageTo] = useState('100');
  const [hoursFrom, handleHoursFrom] = useState('0');
  const [hoursTo, handleHoursTo] = useState('10');
  const [payFrom, handlePayFrom] = useState('0');
  const [payTo, handlePayTo] = useState('30');

  const handleOpenDeliveryLocation = () => {
    handleDeliveryLocation(!openDeliveryLocation);
  };

  const setLocation = (value, category) => {
    if (category === 'pickupPoint') {
      setPickUpPoints([...pickupPoints, value]);
    } else if (category === 'deliveryLocation') {
      setDeliveryPoints([...deliveryPoints, value]);
    } else {
      setFinalPoints([...finalPoints, value]);
    }
  };

  const onDelete = async (index, category) => {
    if (category === 'pickupPoint') {
      pickupPoints.splice(index, 1);
      const updatedPoints = pickupPoints;
      setPickUpPoints([...updatedPoints]);
    } else if (category === 'deliveryLocation') {
      deliveryPoints.splice(index, 1);
      const updatedDeliveryPoints = deliveryPoints;
      setDeliveryPoints([...updatedDeliveryPoints]);
    } else {
      finalPoints.splice(index, 1);
      const updatedFinalPoints = finalPoints;
      setFinalPoints([...updatedFinalPoints]);
    }
  };
  const applyFilters = async () => {
    await JobsList.searchJobs({
      pickup_points: {
        ...pickupPoints
      },
      delivery_locations: {
        ...deliveryPoints
      },
      final_destinations: {
        ...finalPoints
      },
      date_start: format(date.from, 'MM/dd/yy'),
      date_end: format(date.to, 'MM/dd/yy'),
      mileage_from: mileageFrom,
      mileage_to: mileageTo,
      hours_from: hoursFrom,
      hours_to: hoursTo,
      pay_from: payFrom,
      pay_to: payTo
    });
    handleCloseModal();
  };

  const setDateToAndroid = async mode => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      handleDate({ ...date, [mode]: new Date(year, month, day) });
      if (action === 'dismissedAction') {
        // Selected year, month (0-11), day
        // this.setState({ date: { ...date, to: new Date() } });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  const changeDate = async mode => {
    if (Platform.OS === 'ios') {
      await handleDateTypeToChange(mode);
      handleModalHourVisible(true);
    } else {
      setDateToAndroid(mode);
    }
  };
  const setDateForIos = (datePicked, type) => {
    handleDate({ ...date, [type]: datePicked });
  };
  const multiSliderValuesChange = values => {
    handleMileageFrom(values[0]);
    handleMileageTo(values[1]);
  };

  const setHours = amount => {
    handleHoursFrom(amount[0]);
    handleHoursTo(amount[1]);
  };
  const multiSliderPayRangeChange = values => {
    handlePayFrom(values[0]);
    handlePayTo(values[1]);
  };
  return (
    <ModalComponent
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
      handleCloseModal={handleCloseModal}
      style={styles.modal}
    >
      <SaveButton onPress={() => applyFilters()}>
        <SaveButtonText>SAVE</SaveButtonText>
      </SaveButton>
      <TitleTextContainer>
        <TitleText>Filters</TitleText>
      </TitleTextContainer>
      <GreyText>Based on your profile preferences</GreyText>
      <View style={{ height: '80%' }}>
        <ScrollView>
          <LocationContainer>
            <FilterLocation
              placeholder={{
                label: 'Add location',
                value: '',
                color: greyColor
              }}
              name="pickupPoint"
              label="Pickup point"
              arrayOfpoints={pickupPoints}
              setLocation={setLocation}
              onDelete={onDelete}
            />
            {openDeliveryLocation && (
              <>
                <FilterLocation
                  placeholder={{
                    label: 'Add location',
                    value: '',
                    color: greyColor
                  }}
                  name="deliveryLocation"
                  label="Delivery Location"
                  arrayOfpoints={deliveryPoints}
                  setLocation={setLocation}
                  onDelete={onDelete}
                />

                <FilterLocation
                  placeholder={{
                    label: 'Add location',
                    value: '',
                    color: greyColor
                  }}
                  name="finalDestination"
                  label="Final Destination Point"
                  arrayOfpoints={finalPoints}
                  setLocation={setLocation}
                  onDelete={onDelete}
                />
              </>
            )}
            <DeliveryLocationControl
              onPress={() => handleOpenDeliveryLocation()}
            >
              <DeliveryLocationControlText>
                {openDeliveryLocation && 'Close'} Delivery & Destination
                Locations
              </DeliveryLocationControlText>
            </DeliveryLocationControl>
          </LocationContainer>
          <Devider />
          <View>
            <IosDateModal
              modalHourVisible={modalHourVisible}
              dateTypeToChange={dateTypeToChange}
              date={date}
              setDateForIos={setDateForIos}
              handleModalHourVisible={handleModalHourVisible}
            />
            <DatePickerLabel>Start Date</DatePickerLabel>
            <DatesContainer>
              <PickerContainer onPress={() => changeDate('from')}>
                <MaterialIcons
                  style={{ marginTop: 2 }}
                  color={primaryColor}
                  name="date-range"
                  size={17}
                />
                <DatesText>{format(date.from, 'MM/dd/yy')}</DatesText>
              </PickerContainer>
              <DatesText>to</DatesText>
              <PickerContainer onPress={() => changeDate('to')}>
                <MaterialIcons
                  style={{ marginTop: 2 }}
                  color={primaryColor}
                  name="date-range"
                  size={17}
                />
                <DatesText>{format(date.to, 'MM/dd/yy')}</DatesText>
              </PickerContainer>
            </DatesContainer>
          </View>
          <Devider />
          <SectionContainer>
            <Mileage
              multiSliderValuesChange={multiSliderValuesChange}
              mileageFrom={mileageFrom}
              mileageTo={mileageTo}
            />
          </SectionContainer>
          <Devider />
          <SectionContainer>
            <Hours setHours={setHours} />
          </SectionContainer>
          <Devider />
          <SectionContainer>
            <PayRange
              multiSliderPayRangeChange={multiSliderPayRangeChange}
              payRangeFrom={payFrom}
              payRangeTo={payTo}
            />
          </SectionContainer>
          <Devider />
        </ScrollView>
      </View>
    </ModalComponent>
  );
};

export default FiltersModal;

const styles = StyleSheet.create({
  modal: {
    maxHeight: '90%'
  }
});

const LocationContainer = styled.View`
  width: 80%;
  margin-left: 20px;
`;
const SaveButton = styled.TouchableOpacity`
  position: absolute;
  right: 60px;
  top: 24px;
`;

const SaveButtonText = styled.Text`
  color: ${primaryColor};
  font-size: 16px;
`;

const TitleTextContainer = styled.View`
  position: absolute;
  left: 20px;
  top: 24px;
`;
const TitleText = styled.Text`
  font-size: 20px;
  letter-spacing: 1.2;
`;
const GreyText = styled.Text`
  margin: -9px 0 20px 20px;
  font-size: 14px;
  color: ${greyColor};
`;

const DeliveryLocationControl = styled.TouchableOpacity``;
const DeliveryLocationControlText = styled.Text`
  /* margin: 5px 0 50px 0px; */
  font-size: 14px;
  color: ${primaryColor};
`;

const Devider = styled.View`
  height: 1px;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  background: ${greyColor};
  margin-bottom: 10px;
  margin-top: 10px;
`;

const DatePickerLabel = styled.Text`
  margin: 0 10px 0 20px;
  font-size: 16px;
  letter-spacing: 1.05;
`;
const DatesContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

const PickerContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${greyColor};
  padding-bottom: 8px;
  margin: 10px 20px 10px 20px;
`;
const DatesText = styled.Text`
  font-size: 16px;
  margin: 0 10px 0 10px;
`;

const SectionContainer = styled.View`
  margin: 10px 20px 10px 20px;
`;
