import React from 'react';
import styled from 'styled-components/native';

import CardJob from '@shared/components/cards/CardJob';

const jobsList = [
  {
    name: 'CDL A',
    city: 'Newark, NJ',
    date: '06/03/2019',
    status: 'Declined By You',
    duration: '22 hours',
    price: '$22-$26',
    logo:
      'https://vinkod23.ru/ckeditor_assets/pictures/221/content_c31c593a6741a832e25atotachi.png',
    rating: 4,
  },
  {
    name: 'CDL C',
    city: 'Newark, NJ',
    date: '06/03/2019',
    status: 'Job Closed',
    duration: '22 hours',
    price: '$22-$26',
    logo: 'https://pbs.twimg.com/profile_images/801363163740565505/BF44jfpn_400x400.jpg',
    rating: 2,
  },
];

const ClosedTab = () => {
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
          tab="closed"
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  margin: 20px;
`;

export default ClosedTab;
