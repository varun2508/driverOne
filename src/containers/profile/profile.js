import React, { useState, useEffect } from 'react';
import { AsyncStorage, RefreshControl } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { navigate } from '@shared/helpers';
import { Card, ProfileHeader } from '@shared';
import { Loader } from '@shared/components';
import { baseURL } from '../../utils/constants';
import { observer } from 'mobx-react';
import User from '@mobx/user';
import Auth from '@mobx/auth';

const list = [
  {
    title: 'Profile',
    icon: 'person-outline',
    value: {
      key: 'Profile',
      title: 'Your Profile'
    }
  },
  {
    title: 'Job Preferences',
    icon: 'assignment',
    value: {
      key: 'Preferences',
      title: 'Job Preferences'
    }
  },
  {
    title: 'Qualifications',
    icon: 'check-circle',
    value: {
      key: 'Qualifications',
      title: 'Qualifications'
    }
  },
  {
    title: 'Driver One Employment Verified',
    icon: 'verified-user',
    value: {
      key: 'DriverVerified',
      title: 'Driver One Employment'
    }
  }
];

const Profile = ({ componentId }) => {
  const { profile } = User;
  const [loading, setLoading] = useState(true);
  const imageSrc = `${baseURL}${profile.photo}`;

  const navigateTo = value => {
    navigate('UpdateProfile', componentId, value);
  };

  const fetchData = async () => {
    console.log('----------fetching');
    setLoading(true);
    await Auth.getMe();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <ProfileHeader name={profile.first_name} imageSrc={imageSrc} />
      <ScrollViewWrapper
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
      >
        <CardWrapper>
          <Card containerStyle={{ paddingBottom: 0 }}>
            <Statistic>
              <Stats>
                <Amount>0</Amount>
                <SubText>Pending jobs</SubText>
              </Stats>
              <Stats>
                <Amount>0</Amount>
                <SubText>Active job</SubText>
              </Stats>
              <Stats>
                <Amount>0</Amount>
                <SubText>Your rating</SubText>
              </Stats>
            </Statistic>
            <NavigationBar>
              {list.map((item, i) => (
                <ListItem
                  key={i}
                  titleStyle={{ fontSize: 14 }}
                  title={item.title}
                  leftIcon={{ name: item.icon, color: 'gray' }}
                  bottomDivider
                  onPress={() => navigateTo(item.value)}
                  chevron={{ color: '#64abef' }}
                />
              ))}
              <ListItem
                title="Make a Referral"
                titleStyle={{ fontSize: 14 }}
                leftIcon={{ name: 'people', color: 'gray' }}
                bottomDivider
                onPress={() => navigate('HowItWorks', componentId)}
                chevron={{ color: '#64abef' }}
              />
            </NavigationBar>
          </Card>
          <ListItem
            title="Training Video"
            containerStyle={{
              shadowColor: '#999',
              shadowOffset: { width: 0, height: 0.5 },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 1,
              borderRadius: 4
            }}
            titleStyle={{ fontSize: 14 }}
            style={{ marginTop: 20 }}
            leftIcon={{ name: 'tv' }}
            bottomDivider
            onPress={() => {}}
            chevron={{ color: '#64abef' }}
          />
        </CardWrapper>

        <Button
          containerStyle={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20
          }}
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            navigate('AuthScreen', componentId, {});
          }}
          title="LOG OUT"
        />
      </ScrollViewWrapper>
    </Container>
  );
};

export default observer(Profile);

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const NavigationBar = styled.View`
  display: flex;
  margin-top: 28px;
  margin-right: -31px;
  border-top-width: 0.5px;
  border-top-color: #999;
  margin-left: -31px;
`;

const Amount = styled.Text`
  font-size: 20px;
  color: #64abef;
`;
const Stats = styled.View`
  display: flex;
  align-items: center;
`;
const SubText = styled.Text`
  font-size: 12px;
`;

const Statistic = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardWrapper = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;

const ScrollViewWrapper = styled.ScrollView`
  margin-top: 40px;
`;
