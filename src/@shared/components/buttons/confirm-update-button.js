import React, { useState } from 'react';
import Auth from '@mobx/auth';
import { Button } from 'react-native-elements';
import User from '@mobx/user';

const ConfirmUpdateButton = props => {
  const { profile } = User;
  const [loading, setIsLoading] = useState(false);
  const updatedProfile = { ...profile, ...props };
  const updateInfo = async () => {
    setIsLoading(true);
    await Auth.updateProfile(updatedProfile);
    setIsLoading(false);
    return null;
  };

  return (
    <Button
      containerStyle={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
      onPress={() => updateInfo()}
      title="Confirm"
      loading={loading}
    />
  );
};

export default ConfirmUpdateButton;
