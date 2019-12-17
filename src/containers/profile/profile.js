import React from "react";
import { Image, AsyncStorage } from "react-native";
import { ListItem, Button } from "react-native-elements";
import styled from "styled-components/native";

import { navigate } from "@shared/helpers";
import { Card } from "@shared";

const list = [
  {
    title: "Profile",
    icon: "person-outline",
    value: {
      key: "Profile",
      title: "Your Profile"
    }
  },
  {
    title: "Job Preferences",
    icon: "assignment",
    value: {
      key: "Preferences",
      title: "Job Preferences"
    }
  },
  {
    title: "Qualifications",
    icon: "check-circle",
    value: {
      key: "Qualifications",
      title: "Qualifications"
    }
  },
  {
    title: "Driver One Employment Verified",
    icon: "verified-user",
    value: {
      key: "DriverVerified",
      title: "Driver One Employment"
    }
  }
];

const Profile = ({ componentId }) => {
  const navigateTo = value => {
    navigate("UpdateProfile", componentId, value);
  };

  return (
    <Container>
      <Header>
        <Name>Hi John</Name>
        <ProfileImg>
          <Image
            resizeMode="cover"
            source={{ uri: "https://picsum.photos/700" }}
            style={{ height: "100%", width: "100%", borderRadius: 100 }}
          />
        </ProfileImg>
      </Header>
      <CardWrapper>
        <Card containerStyle={{ paddingBottom: 0 }}>
          <Statistic>
            <Stats>
              <Amount>0</Amount>
              <SubText>Pending jobs</SubText>
            </Stats>
            <Stats>
              <Amount>0</Amount>
              <SubText>Active job</SubText>
            </Stats>
            <Stats>
              <Amount>0</Amount>
              <SubText>Your rating</SubText>
            </Stats>
          </Statistic>
          <NavigationBar>
            {list.map((item, i) => (
              <ListItem
                key={i}
                titleStyle={{ fontSize: 14 }}
                title={item.title}
                leftIcon={{ name: item.icon, color: "gray" }}
                bottomDivider
                onPress={() => navigateTo(item.value)}
                chevron={{ color: "#64abef" }}
              />
            ))}
            <ListItem
              title="Make a Referral"
              titleStyle={{ fontSize: 14 }}
              leftIcon={{ name: "people", color: "gray" }}
              bottomDivider
              // onPress={() => navigate("HowItWorks", componentId)}
              chevron={{ color: "#64abef" }}
            />
          </NavigationBar>
        </Card>
        <ListItem
          title="Training Video"
          containerStyle={{
            shadowColor: "#999",
            shadowOffset: { width: 0, height: 0.5 },
            shadowOpacity: 0.5,
            shadowRadius: 1,
            elevation: 1,
            borderRadius: 4
          }}
          titleStyle={{ fontSize: 14 }}
          style={{ marginTop: 20 }}
          leftIcon={{ name: "tv" }}
          bottomDivider
          onPress={() => {}}
          chevron={{ color: "#64abef" }}
        />
      </CardWrapper>

      <Button
        containerStyle={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          navigate("AuthScreen", componentId, {});
        }}
        title="LOG OUT"
      />
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const NavigationBar = styled.View`
  display: flex;
  margin-top: 28px;
  margin-right: -31px;
  border-top-width: 0.5px;
  border-top-color: #999;
  margin-left: -31px;
`;

const Amount = styled.Text`
  font-size: 20px;
  color: #64abef;
`;
const Stats = styled.View`
  display: flex;
  align-items: center;
`;
const SubText = styled.Text`
  font-size: 12px;
`;

const Statistic = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const CardWrapper = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;

const Header = styled.View`
  display: flex;
  flex: 0.8;
  height: 234px;
  z-index: 9;
  background-color: #82c0fb;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImg = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 100;
  position: absolute;
  background-color: gray;
  bottom: -30px;
`;
