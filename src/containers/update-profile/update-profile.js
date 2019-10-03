import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { Navigation } from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Card, YourProfile, JobPreferences, Qualifications, Policy } from '@shared';

const UpdateProfile = ({ componentId }) => {
  // const navigateTo = () => {
  //   navigate('UpdateProfile', componentId);
  // };

  const backNavigation = () => {
    Navigation.pop(componentId);
  };
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Header>
          <Name>Hi Jhon</Name>
          <ProfileImg>
            <Image
              resizeMode="cover"
              source={{ uri: 'https://picsum.photos/700' }}
              style={{ height: '100%', width: '100%', borderRadius: 100 }}
            />
          </ProfileImg>
        </Header>
        <CardWrapper>
          <Card>
            <TitleContainer>
              <Title>Profile</Title>
            </TitleContainer>
            <TouchableOpacity onPress={backNavigation}>
              <BackNavigation>
                <FontAwesome name="long-arrow-left" size={16} color="#64abef" />
                <SubText>Back to dashboard</SubText>
              </BackNavigation>
            </TouchableOpacity>
            <YourProfile />
          </Card>
        </CardWrapper>
      </View>
      <Button
        containerStyle={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
        onPress={() => {}}
        title="Confirm"
      />
    </Container>
  );
};

export default UpdateProfile;

const Container = styled.View`
  display: flex;
  flex: 1;
  padding-bottom: 20px;
`;

const TitleContainer = styled.View`
  align-self: center;
`;
const Title = styled.Text`
  font-size: 20px;
`;

const BackNavigation = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubText = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  color: #64abef;
`;

const Statistic = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const CardWrapper = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;

const Header = styled.View`
  display: flex;
  flex: 0.5;
  height: 234px;
  z-index: 9;
  background-color: #82c0fb;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImg = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 100;
  position: absolute;
  background-color: gray;
  bottom: -30px;
`;
