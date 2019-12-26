import React, { useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

import User from '@mobx/user';
import { baseURL } from '../../utils/constants';

import {
  YourProfile,
  JobPreferences,
  Qualifications,
  Policy,
  DriverStateVerification,
  ProfileHeader
} from '@shared';

const UpdateProfile = observer(
  ({ componentId, data = { key: '', title: '' } }) => {
    const { profile } = User;
    const [loading, setLoading] = useState(false);
    const { key, title } = data;
    const imageSrc = `${baseURL}${profile.photo}`;

    const Profile = () => (
      <ProfileContainer>
        <YourProfile
          screen="updateProfie"
          title={title}
          componentId={componentId}
          setLoading={setLoading}
        />
      </ProfileContainer>
    );

    const Steps = {
      Profile: <Profile />,
      Preferences: <JobPreferences title={title} componentId={componentId} />,
      Qualifications: (
        <Qualifications title={title} componentId={componentId} />
      ),
      Policy: <Policy title={title} />,
      // prettier-ignore
      DriverVerified:<DriverStateVerification title={title} componentId={componentId} />
    };
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <ProfileHeader
            name={profile.first_name}
            imageSrc={imageSrc}
            loading={loading}
          />
          {Steps[key]}
        </View>
      </Container>
    );
  }
);

export default UpdateProfile;

const Container = styled.View`
  display: flex;
  flex: 1;
  padding-bottom: 20px;
`;
const ProfileContainer = styled.View``;
