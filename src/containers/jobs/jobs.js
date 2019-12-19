import React, { useState } from 'react';
import { Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import PendingTab from './pending-tab';
import ActiveTab from './active-tab';
import CompletedTab from './completed-tab';
import ClosedTab from './closed-tab';

const Jobs = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <TabView
        navigationState={{
          index,
          routes: [
            { key: '0', title: 'Pending' },
            { key: '1', title: 'Active' },
            { key: '2', title: 'Completed' },
            { key: '3', title: 'Closed' }
          ]
        }}
        renderScene={SceneMap({
          0: PendingTab,
          1: ActiveTab,
          2: CompletedTab,
          3: ClosedTab
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: '#193ed9'
            }}
            activeColor="red"
            style={{
              backgroundColor: '#fff',
              color: 'red',
              height: 40,
              marginTop: 40
            }}
            labelStyle={{
              color: '#b1abad',
              fontSize: 14,
              textTransform: 'capitalize',
              paddingTop: 0,
              fontWeight: '600',
              paddingBottom: 0
            }}
            tabStyle={{
              padding: 0
            }}
            getLabelText={({ route }) => {
              return (
                <Text
                  style={{
                    color: +route.key === index ? '#193ed9' : '#bdb8ba'
                  }}
                >
                  {route.title}
                </Text>
              );
            }}
          />
        )}
        initialLayout={{ width: Dimensions.get('window').width }}
        onIndexChange={indexTab => setIndex(indexTab)}
      />
    </>
  );
};

export default Jobs;
