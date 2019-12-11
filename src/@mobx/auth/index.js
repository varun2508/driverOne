import { types, flow } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";
import { navigate } from "@shared/helpers";
import api from "api";
import User from "@mobx/user";

const Profile = types
  .model("Profile", {
    email: types.optional(types.string, ""),
    errorMessage: types.optional(types.string, "")
  })
  .actions(self => {
    const logIn = flow(function* logIn(data, componentId) {
      try {
        // const searchParams = Object.keys(data)
        //   .map(key => {
        //     console.log("----key------", key);
        //     return (
        //       encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        //     );
        //   })
        //   .join("&");
        const response = yield api.post("/api/user/login", data);
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

    const registration = flow(function* registration(data) {
      try {
        console.log("----------data", data);
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

    const getMe = flow(function* getMe() {
      try {
        const token = yield AsyncStorage.getItem("token");
        const response = yield api.get("/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        User.setProfileInfo(response);
        return;
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    const updateProfile = flow(function* updateProfile(data) {
      try {
        console.log("----------data", data);
        const token = yield AsyncStorage.getItem("token");
        const response = yield api.patch("/api/user/profile", data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        Alert.alert("You were successfully updated! ");
        console.log("----------resposnes", response);
      } catch (e) {
        const { message } = e.response.data;
        self.errorMessage = message;
      }
    });

    return {
      logIn,
      registration,
      getMe,
      updateProfile
    };
  })
  .create();

export default Profile;
