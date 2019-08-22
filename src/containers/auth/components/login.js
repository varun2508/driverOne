import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submit = () => {
    console.log({ email, password });
  };

  return (
    <Container>
      <Input
        value={email}
        placeholder="Email adress"
        inputContainerStyle={styles.input}
        label={email && 'Email adress'}
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        secureTextEntry
        value={password}
        placeholder="Password"
        label={password && 'Password'}
        onChangeText={(e) => setPassword(e)}
      />
      <Button title="SUBMIT" buttonStyle={styles.button} onPress={submit} />
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
