import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Auth from '@mobx/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please! email?')
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, 'pretty sure this will be hacked'),
});

const Login = ({ componentId }) => {
  const submit = ({ email, password }) => {
    Auth.logIn({ email, password }, componentId);
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => submit(values)}
    >
      {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
        <Container>
          <Input
            value={values.email}
            onBlur={handleBlur('email')}
            placeholder="Email adress"
            containerStyle={styles.input}
            label={values.email && 'Email adress'}
            onChangeText={handleChange('email')}
            errorMessage={errors.email}
          />
          <Input
            secureTextEntry
            value={values.password}
            onBlur={handleBlur('password')}
            containerStyle={styles.input}
            onChangeText={handleChange('password')}
            placeholder="Password"
            label={values.password && 'Password'}
            errorMessage={errors.password}
          />
          <Button onPress={handleSubmit} title="Submit" style={styles.button} />
        </Container>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    marginBottom: 52,
  },
  button: {
    marginTop: 73,
  },
});

const Container = styled.View`
  width: 100%;
`;
