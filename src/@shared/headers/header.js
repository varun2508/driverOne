import React from "react";
import styled from "styled-components/native";

import { Logo } from "assets/icons";

const Header = () => (
  <Container>
    <Logo width={120} height={40} />
  </Container>
);

export default Header;

const Container = styled.View`
  background: #61aff4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
