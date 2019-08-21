import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

const Login = () => {
  return (
    <Container>
      <Input placeholder="Email adress" inputContainerStyle={styles.input} />
      <Input placeholder="Password" />
      <Button title="SUBMIT" buttonStyle={styles.button} />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
  },
  button: {
    marginTop: 73,
  },
});

const Container = styled.View`
  width: 100%;
`;
