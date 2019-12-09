import React from "react";
import { Linking } from "react-native";
import styled from "styled-components/native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DriverStateVerification = ({ state = "update" }) => {
  const Title = {
    "verified-user": "Your Driver One application was successful!",
    report: "Please submit application to Driver One",
    update: "Your application to Driver One is pending."
  };

  const TextLocal = {
    "verified-user":
      " After careful reveiw of your application, you have been approved to apply to any job listedon Driver Hub",
    update:
      "We are currently reviewing your application. Please check back in 1-2 business days for an updated status",
    report: ""
  };

  const textState = TextLocal[state];
  const titleState = Title[state];
  return (
    <Container>
      <IconContainer>
        <MaterialIcons color="#64abef" name={state} size={24} />
      </IconContainer>
      <H2>{titleState}</H2>
      <Text>{textState}</Text>
      <Text>Why do I need approval?</Text>
      <Text>
        In order to apply and view job details, we require drivers to go through
        a quick application process on our website.
      </Text>
      <TextLink>For more information please visit:</TextLink>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://www.joindriverone.com/")}
      >
        https://www.joindriverone.com/
      </Text>
    </Container>
  );
};

export default DriverStateVerification;

const Container = styled.View`
  margin-bottom: 18px;
`;

const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const Text = styled.Text`
  margin-bottom: 8px;
`;
const H2 = styled.Text`
  margin-bottom: 18px;
  font-weight: bold;
  font-size: 12px;
`;

const TextLink = styled.Text``;
