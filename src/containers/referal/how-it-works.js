import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import ScreenOne from './screen-one';
import SecondRoute from './second-route';

class HowItWorks extends Component {
  static options() {
    return {
      topBar: {
        elevation: 0,
        background: {
          translucent: true,
          blur: false,
          color: '#fff',
        },
        noBorder: true,
        visible: true,
        backButton: {
          visible: false,
        },
      },
    };
  }

  state = {
    index: 0,
    routes: [{ key: 'first', title: 'How it Works' }, { key: 'second', title: 'My Referrals' }],
  };

  render() {
    const { componentId } = this.props;
    return (
      <Container>
        <TabView
          renderTabBar={(props) => (
            <TabBar
              {...props}
              componentId={componentId}
              indicatorStyle={{
                backgroundColor: '#0575E0',
                width: 150,
                display: 'flex',
                marginLeft: 15,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              style={{ backgroundColor: '#fff', color: 'blue' }}
              renderLabel={({ route }) => <Text style={{ color: '#0575E0' }}>{route.title}</Text>}
            />
          )}
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => <ScreenOne componentId={componentId} />,
            second: SecondRoute,
          })}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </Container>
    );
  }
}

export default HowItWorks;

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const Text = styled.Text``;
