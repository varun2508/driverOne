import { types, flow } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";
import { navigate } from "@shared/helpers";
import api from "api";

const Profile = types
  .model("Profile", {
    email: types.optional(types.string, ""),
    errorMessage: types.optional(types.string, "")
  })
  .actions(self => {
    const logIn = flow(function* logIn(data, componentId) {
      try {
        const searchParams = Object.keys(data)
          .map(key => {
            console.log("----key------", key);
            return (
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            );
          })
          .join("&");
        const response = yield api.post("/api/user/login", searchParams);
        const { token, email } = response;
        yield AsyncStorage.setItem("token", token);
        console.log("------trying to navigate----");
        self.email = email;
        navigate("App", componentId);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const registration = flow(function* registration(data, componentId) {
      try {
        console.log("----------data", data);
        // const formdata = new FormData(data);
        const searchParams = Object.keys(data)
          .map(key => {
            console.log("----key------", key);
            return (
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            );
          })
          .join("&");
        console.log("----------sending", searchParams);
        const response = yield api.post("/api/user/register", searchParams);
        const { email } = response;
        // yield AsyncStorage.setItem("token", token);
        self.email = email;
        console.log("-----response-----", response);
        // navigate("App", componentId);
        Alert.alert("You were successfully registered! Please log in!");
        navigateTo("Log In");
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const getMe = flow(function* getMe(data, componentId) {
      try {
        const response = yield api.get("/api/user/me", data);
        const { email } = response;

        console.log("------getMe----", email);
        self.email = email;
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    return {
      logIn,
      registration,
      getMe
    };
  })
  .create();

export default Profile;
