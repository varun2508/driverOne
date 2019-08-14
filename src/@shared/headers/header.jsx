import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import Logo from './logo.svg';

const Header = () => (
  <Container>
    <Logo width={120} height={40} />
  </Container>
);

export default Header;

const Container = styled.View`
  background: #fff;
`;
