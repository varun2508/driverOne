import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const BackButton = ({ componentId, backScreen }) => {
  const backNavigation = () => {
    Navigation.pop(componentId);
  };
  return (
    <TouchableOpacity onPress={backNavigation}>
      <BackNavigation>
        <FontAwesome name="long-arrow-left" size={16} color="#64abef" />
        <SubText>Back to {backScreen || 'dashboard'} </SubText>
      </BackNavigation>
    </TouchableOpacity>
  );
};

export default BackButton;

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
