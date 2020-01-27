import React, { useState, useEffect } from 'react';
import { RefreshControl, Dimensions, View } from 'react-native';
import { observer } from 'mobx-react';

import styled from 'styled-components/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Loader } from '@shared/components';
import Jobs from '@mobx/jobs';
import JobsList from '@mobx/jobsApi';
import { primaryColor, greyColor } from '../../utils/stylesConstants';
import Header from './components/header';
import ListTab from './components/listTab';
import MapTab from './components/mapTab';

const Search = ({ componentId }) => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const { allJobs } = Jobs;
  const fetchData = async () => {
    setLoading(true);
    await JobsList.getAllJobs();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }

  const renderScene = ({ route }) => {
    switch (route.key) {
      case '0':
        return <ListTab jobsList={allJobs.data} componentId={componentId} />;
      case '1':
        return <MapTab />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header />
      <TabView
        navigationState={{
          index,
          routes: [
            { key: '0', title: 'List' },
            { key: '1', title: 'Map' }
          ]
        }}
        renderScene={props => renderScene(props)}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: '#fff',
              height: 0
            }}
            activeColor="red"
            style={{
              // flex: 1,
              // justifyContent: 'space-around',
              // flexDirection: 'row',
              // borderWidth: 2,
              // borderColor: 'red'

              marginRight: '25%',
              marginLeft: '25%',
              alignContent: 'center',
              backgroundColor: '#fff',
              color: 'red',
              height: 63
            }}
            labelStyle={{
              color: { primaryColor },
              fontSize: 14,
              textTransform: 'capitalize',
              paddingTop: 0,
              fontWeight: '600',
              paddingBottom: 0
            }}
            tabStyle={{
              width: 100,
              padding: 0,
              borderWidth: 1,
              borderColor: primaryColor,
              // backgroundColor: index === 0 ? primaryColor : greyColor,
              // borderRadius: 5,
              marginTop: 15
            }}
            getLabelText={({ route }) => {
              return (
                <View
                  style={{
                    backgroundColor:
                      +route.key === index ? primaryColor : '#FFF',
                    height: '100%',
                    width: 99,
                    // borderRadius: 5,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      color: +route.key === index ? '#fff' : primaryColor,
                      fontSize: 15,
                      letterSpacing: 1.2
                    }}
                  >
                    {route.title}
                  </Text>
                </View>
              );
            }}
          />
        )}
        initialLayout={{ width: Dimensions.get('window').width }}
        onIndexChange={indexTab => setIndex(indexTab)}
      />
    </Container>
  );
};

export default observer(Search);

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const Text = styled.Text`
  color: red;
`;
