import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Loader = ({ styles }) => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#0f2ba1" style={styles} />
    </Container>
  );
};

export default Loader;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
