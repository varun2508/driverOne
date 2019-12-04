import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

import LinearGradient from "react-native-linear-gradient";

const Header = () => {
  return (
    <LinearGradient
      colors={["#2282d9", "#61aff4"]}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <H1 h3 style={{ fontSize: 28, color: "#fff", letterSpacing: 1 }}>
        Welcome to Driver One!
      </H1>
      <H3>Before you get started, help us get to know</H3>
      <H3>you so that we can give you the best results</H3>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 218,
    marginRight: -21,
    marginLeft: -21,
    display: "flex",
    alignItems: "center",
    paddingTop: 64
  }
});

const H1 = styled.Text`
  font-size: 28px;
  color: #fff;
  margin-bottom: 12px;
`;
const H3 = styled.Text`
  font-size: 16px;
  color: #fff;
`;
