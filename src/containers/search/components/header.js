import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import JobsList from '@mobx/jobsApi';
import FiltersModal from './filtersModal';
import { primaryColor, greyColor } from '../../../utils/stylesConstants';

import styled from 'styled-components/native';

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const searchJob = async e => {
    setLoading(true);
    await JobsList.searchJobs({
      search_string: e
    });
    setLoading(false);
  };
  return (
    <View>
      <LinearGradient
        colors={['#0f2ba1', '#61aff4']}
        start={{ x: 0.0, y: 0.6 }}
        end={{ x: 0.7, y: 1.0 }}
        style={styles.container}
      >
        <Container>
          <SearchBox>
            <FontAwesome5Icons
              name="search"
              color={greyColor}
              size={18}
              style={{ marginLeft: 15 }}
            />
            <Input
              placeholder="Search location, company, or job ..."
              placeholderTextColor={greyColor}
              onChangeText={e => searchJob(e)}
            />
            <FontAwesomeIcons
              name="sliders"
              color={primaryColor}
              size={20}
              style={{ marginRight: 15 }}
              onPress={() => handleOpenModal()}
            />
          </SearchBox>
          <FontAwesome5Icons
            name="sort-amount-down"
            color="#FFF"
            style={styles.icon}
          />
          <FiltersModal
            isOpenModal={isOpenModal}
            setIsOpenModal
            handleCloseModal={handleCloseModal}
          />
        </Container>
      </LinearGradient>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20
  }
});
const Container = styled.View`
  /* flex: 1; */
  flex-direction: row;
  height: 45px;
  margin-bottom: -18px;
`;

const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;

  width: 80%;
  height: 50px;
  justify-content: space-between;
  background: #fff;
  border-radius: 25px;
`;

const Input = styled.TextInput`
  width: 70%;
`;
