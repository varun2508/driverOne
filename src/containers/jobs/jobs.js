import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import PendingTab from './PendingTab';
import ActiveTab from './ActiveTab';
import CompletedTab from './CompletedTab';
import ClosedTab from './ClosedTab';

const Jobs = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: '#193ed9',
            }}
            style={{
              backgroundColor: '#fff',
              height: 40,
              marginTop: 40,
            }}
            labelStyle={{
              color: '#193ed9',
              fontSize: 14,
              textTransform: 'capitalize',
              paddingTop: 0,
              fontWeight: '600',
              paddingBottom: 0,
            }}
            tabStyle={{
              padding: 0,
            }}
            contentContainerStyle={{ marginTop: 0, marginBottom: 0 }}
          />
        )}
        navigationState={{
          index,
          routes: [
            { key: 'first', title: 'Pending' },
            { key: 'second', title: 'Active' },
            { key: 'third', title: 'Completed' },
            { key: 'fourth', title: 'Closed' },
          ],
        }}
        renderScene={SceneMap({
          first: PendingTab,
          second: ActiveTab,
          third: CompletedTab,
          fourth: ClosedTab,
        })}
        tabStyle={{ backgroundColor: 'red' }}
        onIndexChange={(indexTab) => setIndex(indexTab)}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </>
  );
};

export default Jobs;
