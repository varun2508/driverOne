import React from 'react';
import styled from 'styled-components/native';

const Jobs = () => {
  return (
    <Container>
      <Text>Jobs</Text>
    </Container>
  );
};

export default Jobs;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: red;
`;
