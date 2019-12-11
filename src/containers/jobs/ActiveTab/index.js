import React from 'react';

import styled from 'styled-components/native';

// import Modal from '@shared/components/Modal';
import CardJob from '@shared/components/cards/CardJob';

const jobsList = [
  {
    name: 'CDL A',
    city: 'Newark, NJ',
    date: '06/03/2019',
    status: 'Payment Pending',
    duration: '22 hours',
    price: '$22-$26',
    logo: 'https://pbs.twimg.com/profile_images/801363163740565505/BF44jfpn_400x400.jpg',
    rating: 4,
  },
];

const ActiveTab = () => {
  return (
    <Container>
      {jobsList.map(({ name, city, date, status, duration, price, logo, rating }) => (
        <CardJob
          key={name}
          name={name}
          city={city}
          date={date}
          status={status}
          duration={duration}
          price={price}
          logo={logo}
          rating={rating}
          tab="active"
        />
      ))}
      {/* <Modal>
        <Text>Text</Text>
      </Modal> */}
    </Container>
  );
};

export default ActiveTab;

const Container = styled.View`
  margin: 20px;
`;
