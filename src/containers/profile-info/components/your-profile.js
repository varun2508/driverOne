/* eslint-disable import/named */
import React, { Component } from "react";

import { YourProfile, Card } from "@shared";

class Profile extends Component {
  state = {};

  render() {
    return (
      <Card title="Your Profile">
        <YourProfile screen={"onboarding"} />
      </Card>
    );
  }
}

export default Profile;
