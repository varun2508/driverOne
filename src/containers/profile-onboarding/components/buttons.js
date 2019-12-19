import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { observer } from 'mobx-react';

import User from '@mobx/user';
import { goHome } from 'navigation';

const Buttons = ({ nextStep, step }) => {
  const { profile } = User;
  const [isUpdated, setUpdatedState] = useState(false);
  const {
    pay_from,
    pay_to,
    pickup_points,
    delivery_locations,
    classLicince,
    contractLength
  } = profile;

  useEffect(() => {
    if (
      pickup_points.length ||
      delivery_locations.length ||
      pay_from < 30 ||
      pay_to < 30
    ) {
      setUpdatedState(true);
    } else {
      setUpdatedState(false);
    }
  }, []);

  // useEffect(() => {
  //   if (step === 2 && (classLicince || contractLength)) {
  //     setUpdatedState(true);
  //   } else {
  //     setUpdatedState(false);
  //   }
  // }, [classLicince, contractLength]);

  const confirmHandle = () => {
    setUpdatedState(false);
    nextStep();
  };

  const handleNextStep = () => {
    if (step === 3) {
      goHome();
      return;
    }
    nextStep();
  };
  return isUpdated ? (
    <Button
      containerStyle={styles.button}
      onPress={confirmHandle}
      title="Confirm"
    />
  ) : (
    <Button
      containerStyle={styles.button}
      onPress={handleNextStep}
      title="Skip"
    />
  );
};

export default observer(Buttons);

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    height: 40,
    marginRight: 10
  },
  button: {
    flex: 1,
    height: 40
  }
});
