/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';

import User from '@mobx/user';

// eslint-disable-next-line import/named
import { LocationInput } from '@shared';

const time = { week: false, sixMonths: false, year: false, permanent: false };

const JobPreferences = () => {
  const { profile, setProfileInfo } = User;
  const {
    checkState,
    priceRange,
    contract_week,
    contract_sixmonths,
    contract_year,
    contract_permanent,
    delivery_locations: deliveryLocations,
    pickup_points: pickupPoints,
    pay_from,
    pay_to
  } = profile;
  const [multiSliderValue, setMultiSliderValuesChange] = useState(priceRange);
  const [selectedContractLength, setTime] = useState({
    contract_week,
    contract_sixmonths,
    contract_year,
    contract_permanent
  });
  const [payFromLocal, setPayFrom] = useState(pay_from);
  const [payToLocal, setPayTo] = useState(pay_to);

  const multiSliderValuesChange = values => {
    setPayFrom(values[0]);
    setPayTo(values[1]);
    setProfileInfo({ pay_from: values[0], pay_to: values[1] });
  };

  const handleContract = value => {
    setTime({ [value]: true });
    setProfileInfo({ [value]: true });
  };
  return (
    <>
      <ScrollView>
        <LocationInput
          placeholder={{ label: 'Pickup point', value: '', color: '#000' }}
          name="pickupPointId"
          label="Pickup point"
          // location={pickupPointId}
          arrayOfpoints={pickupPoints}
        />
        <Wrapper>
          <LocationInput
            placeholder={{
              label: 'Delivery location',
              value: '',
              color: '#000'
            }}
            name="deliveryLocationid"
            label="Delivery location"
            // location={deliveryLocationid}
            arrayOfpoints={deliveryLocations}
          />
        </Wrapper>
        <SwiperContainer>
          <Label>
            <Text>Pay Range </Text>
            <Range>
              <Text style={{ color: '#2182D9' }}>${payFromLocal} - </Text>
              <Text style={{ color: '#2182D9' }}>${payToLocal}/hour</Text>
            </Range>
          </Label>
          <Price>
            <Text>1$</Text>
            <MultiSlider
              values={[payFromLocal, payToLocal]}
              onValuesChange={multiSliderValuesChange}
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
                ></View>
              )}
              allowOverlap
              snapped
            />
            <Text
              style={{
                marginLeft: 10
              }}
            >
              30$
            </Text>
          </Price>
        </SwiperContainer>
        <SwiperContainer>
          <Text style={{ marginBottom: 10 }}>Contract Length </Text>
          <CheckBox
            title="1 week"
            checked={selectedContractLength.contract_week}
            onPress={() => handleContract('contract_week')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="3 - 6 months"
            checked={selectedContractLength.contract_sixmonths}
            onPress={() => handleContract('contract_sixmonths')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="1 year"
            checked={selectedContractLength.contract_year}
            onPress={() => handleContract('contract_year')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="Permanent"
            checked={selectedContractLength.contract_permanent}
            onPress={() => handleContract('contract_permanent')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
        </SwiperContainer>
      </ScrollView>
    </>
  );
};

export default observer(JobPreferences);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    paddingBottom: 5,
    marginLeft: 0,
    backgroundColor: 'transparent'
  },
  text: {
    fontWeight: '100'
  }
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
