import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileHeader = ({ name, imageSrc }) => (
  <Header>
    <LinearGradient
      colors={['#0f2ba1', '#61aff4']}
      start={{ x: 0.0, y: 0.6 }}
      end={{ x: 0.7, y: 1.0 }}
      style={styles.container}
    />
    <ProfileImg>
      <Name>Hi {name}!</Name>
      <Image
        resizeMode="cover"
        source={{ uri: 'https://picsum.photos/700' }}
        style={{ height: '100%', width: '100%', borderRadius: 100 }}
      />
    </ProfileImg>
  </Header>
);

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 200,
    width: '100%'
  }
});

const Header = styled.View`
  display: flex;
  /* flex: 0.8; */
  height: 200px;
  z-index: 9;
  background-color: #82c0fb;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ProfileImg = styled.View`
  height: 100px;
  width: 100px;
  border: 4px solid #fff;
  border-radius: 100;
  position: absolute;
  background-color: gray;
  bottom: -30px;
`;
const Name = styled.Text`
  font-size: 24px;
  color: #fff;
  top: -50px;
  position: absolute;
`;
