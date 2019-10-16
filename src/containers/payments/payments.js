import React from 'react';
import styled from 'styled-components/native';

const Payments = () => {
  return (
    <Container>
      <Text>Payments</Text>
    </Container>
  );
};

export default Payments;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: red;
`;
