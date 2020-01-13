/* eslint-disable import/named */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { observer } from 'mobx-react';
import ImagePicker from 'react-native-image-picker';
import styled from 'styled-components/native';
import User from '@mobx/user';
import Auth from '@mobx/auth';
import { ConfirmUpdateButton } from '@shared/components/buttons';
import { LocationInput, Card, BackButton } from '@shared';
import {
  ProfileTitleContainer,
  OnboardingTitleContainer,
  Title
} from '../../../utils/stylesConstants';
const options = {
  title: 'Select Avatar',
  quality: 0.1,
  maxWidth: 500,
  maxHeight: 500,
  storageOptions: {
    skipBackup: true
  }
};

const Label = () => (
  <View style={{ display: 'flex', flexDirection: 'row' }}>
    <Text style={{ marginRight: 5 }}>About me</Text>
    <Text style={{ color: '#82c0fb' }}>(Viewable by employers)</Text>
  </View>
);

const YourProfile = ({ screen, title, componentId, setLoading }) => {
  const { profile } = User;
  const [first_name, setFirstName] = useState(profile.first_name);
  const [last_name, setLastName] = useState(profile.last_name);
  const [about, setAbout] = useState(profile.about);
  const [source, setAvatarSource] = useState('');

  const handleFirstName = value => {
    setFirstName(value);
    // setProfileInfo({ first_name: value });
  };

  const handleLastName = value => {
    setLastName(value);
    // setProfileInfo({ last_name: value });
  };

  const handleChangeAbout = value => {
    setAbout(value);
    // setProfileInfo({ about: value });
  };

  const uploadImage = () => {
    const data = new FormData();
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setLoading(true);
        setAvatarSource(source);
        data.append('photo', {
          uri: source.uri,
          name: 'image',
          type: 'image/jpg'
        });
        await Auth.uploadAvatar(data);
        setLoading(false);
      }
    });
  };

  // useEffect(() => {
  //   if (screen === 'onboarding' && profile.first_name) {
  //     goHome();
  //   }
  // }, []);
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
          {screen !== 'onboarding' && (
            <>
              <BackButton componentId={componentId} />
              <EditAvatarWrapper onPress={() => uploadImage()}>
                <EditAvatarText>Edit Avatar</EditAvatarText>
              </EditAvatarWrapper>
            </>
          )}

          <Input
            value={first_name}
            containerStyle={{
              paddingHorizontal: 0,
              marginBottom: 10,
              marginTop: 20
            }}
            onChangeText={handleFirstName}
            placeholder="First Name"
            label={first_name && 'First Name'}
            placeholderTextColor="#000"
          />
          <Input
            value={last_name}
            containerStyle={{
              paddingHorizontal: 0,
              marginBottom: 10,
              marginTop: 20
            }}
            onChangeText={handleLastName}
            placeholder="Last Name"
            label={last_name && 'Last Name'}
            placeholderTextColor="#000"
          />
          <View style={{ marginTop: 20 }}>
            <LocationInput
              name="locationId"
              placeholder={{ label: 'Location', value: '', color: '#000' }}
              label="Location"
              location={profile.location}
              arrayOfpoints={[
                {
                  id: 1,
                  location_point: profile.location
                }
              ]}
            />
          </View>
          {screen !== 'onboarding' && (
            <View>
              <Input
                label={<Label />}
                multiline
                containerStyle={{
                  paddingHorizontal: 0,
                  marginBottom: 10,
                  marginTop: 10
                }}
                onChangeText={value => handleChangeAbout(value)}
                value={about}
                numberOfLiness={10}
                style={{ height: 200, textAlignVertical: 'top' }}
              />
            </View>
          )}
        </Card>
      </CardWrapper>
      {screen !== 'onboarding' && (
        <ConfirmUpdateButton
          // profile={profile}
          first_name={first_name}
          last_name={last_name}
          about={about}
        />
      )}
    </>
  );
};

export default observer(YourProfile);

const CardWrapper = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;
const EditAvatarWrapper = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const EditAvatarText = styled.Text`
  font-size: 14px;
  color: #64abef;
`;
