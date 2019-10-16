import React from 'react';
import styled from 'styled-components/native';

const Search = () => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default Search;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: red;
`;
