/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import styled from "styled-components/native";
import { observer } from "mobx-react";

import User from "@mobx/user";

// eslint-disable-next-line import/named
import { LocationInput } from "@shared";

const time = { week: false, sixMonths: false, year: false, permanent: false };

const JobPreferences = () => {
  const { profile, setProfileInfo } = User;
  const { checkState, priceRange, pickupPointId, deliveryLocationid } = profile;
  const [multiSliderValue, setMultiSliderValuesChange] = useState(priceRange);
  const [selectedTime, setTime] = useState(checkState);

  const multiSliderValuesChange = values => {
    setMultiSliderValuesChange(values);
    setProfileInfo({ priceRange: values });
  };

  const handleContract = value => {
    setTime({ [value]: true });
    setProfileInfo({ checkState: { [value]: true } });
  };

  return (
    <>
      <ScrollView>
        <LocationInput
          placeholder={{ label: "Pickup point", value: null }}
          name="pickupPointId"
          label="Pickup point"
          location={pickupPointId}
        />
        <Wrapper>
          <LocationInput
            placeholder={{ label: "Delivery location", value: null }}
            name="deliveryLocationid"
            label="Delivery location"
            location={deliveryLocationid}
          />
        </Wrapper>
        <SwiperContainer>
          <Label>
            <Text>Pay Range </Text>
            <Range>
              <Text style={{ color: "#2182D9" }}>
                ${multiSliderValue[0]} -{" "}
              </Text>
              <Text style={{ color: "#2182D9" }}>
                ${multiSliderValue[1]}/hour
              </Text>
            </Range>
          </Label>
          <Price>
            <Text>1$</Text>
            <MultiSlider
              values={[multiSliderValue[0], multiSliderValue[1]]}
              onValuesChange={multiSliderValuesChange}
              min={1}
              sliderLength={230}
              max={30}
              selectedStyle={{
                backgroundColor: "#2282d9"
              }}
              unselectedStyle={{
                backgroundColor: "#d4d0d1"
              }}
              containerStyle={{
                height: 40
              }}
              trackStyle={{
                height: 3,
                paddingRight: 10,
                backgroundColor: "red"
              }}
              touchDimensions={{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderColor: "#2282d9",
                slipDisplacement: 20
              }}
              customMarker={() => (
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderWidth: 2,
                    borderRadius: 20,
                    backgroundColor: "#fff",
                    borderColor: "#2282d9"
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
            checked={selectedTime.week}
            onPress={() => handleContract("week")}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="3 - 6 months"
            checked={selectedTime.sixMonths}
            onPress={() => handleContract("sixMonths")}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="1 year"
            checked={selectedTime.year}
            onPress={() => handleContract("year")}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="Permanent"
            checked={selectedTime.permanent}
            onPress={() => handleContract("permanent")}
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
    backgroundColor: "transparent"
  },
  text: {
    fontWeight: "100"
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
