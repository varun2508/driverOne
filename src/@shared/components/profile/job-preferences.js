/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';
import User from '@mobx/user';
import {
  ProfileTitleContainer,
  OnboardingTitleContainer,
  Title
} from '../../../utils/stylesConstants';
// eslint-disable-next-line import/named
import { LocationInput, Card, BackButton } from '@shared';
import { ConfirmUpdateButton } from '@shared/components/buttons';

const time = { week: false, sixMonths: false, year: false, permanent: false };

const JobPreferences = ({ screen, title, componentId }) => {
  const { profile, setProfileInfo } = User;
  const {
    contract_type,
    license,
    endorsement,
    delivery_locations: deliveryLocations,
    pickup_points: pickupPoints,
    pay_from,
    pay_to
  } = profile;
  // const [multiSliderValue, setMultiSliderValuesChange] = useState(priceRange);
  const [selectedContractLength, setTime] = useState(contract_type);
  const [payFromLocal, setPayFrom] = useState(pay_from);
  const [payToLocal, setPayTo] = useState(pay_to);

  const multiSliderValuesChange = values => {
    setPayFrom(values[0]);
    setPayTo(values[1]);
    setProfileInfo({ pay_from: values[0], pay_to: values[1] });
  };

  const handleContract = value => {
    if (value === 'one_week') {
      setTime({
        one_week: true,
        three_months: false,
        one_year: false,
        permanent: false
      });
    }
    if (value === 'three_months') {
      setTime({
        one_week: false,
        three_months: true,
        one_year: false,
        permanent: false
      });
    }
    if (value === 'one_year') {
      setTime({
        one_week: false,
        three_months: false,
        one_year: true,
        permanent: false
      });
    }
    if (value === 'permanent') {
      setTime({
        one_week: false,
        three_months: false,
        one_year: false,
        permanent: true
      });
    }
  };

  useEffect(() => {
    setProfileInfo({
      contract_type: selectedContractLength
    });
  }, [selectedContractLength]);

  return (
    <>
      <CardWrapper>
        <Card containerStyle={{ paddingBottom: 0 }}>
          {screen === 'onboarding' ? (
            <OnboardingTitleContainer>
              <Title>{title}</Title>
            </OnboardingTitleContainer>
          ) : (
            <ProfileTitleContainer>
              <Title>{title}</Title>
            </ProfileTitleContainer>
          )}

          {screen !== 'onboarding' && <BackButton componentId={componentId} />}
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
                checked={selectedContractLength.one_week}
                onPress={() => handleContract('one_week')}
                containerStyle={styles.container}
                textStyle={styles.text}
              />
              <CheckBox
                title="3 - 6 months"
                checked={selectedContractLength.three_months}
                onPress={() => handleContract('three_months')}
                containerStyle={styles.container}
                textStyle={styles.text}
              />
              <CheckBox
                title="1 year"
                checked={selectedContractLength.one_year}
                onPress={() => handleContract('one_year')}
                containerStyle={styles.container}
                textStyle={styles.text}
              />
              <CheckBox
                title="Permanent"
                checked={selectedContractLength.permanent}
                onPress={() => handleContract('permanent')}
                containerStyle={styles.container}
                textStyle={styles.text}
              />
            </SwiperContainer>
          </ScrollView>
        </Card>
      </CardWrapper>
      {screen !== 'onboarding' && <ConfirmUpdateButton profile={profile} />}
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
const CardWrapper = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;
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
