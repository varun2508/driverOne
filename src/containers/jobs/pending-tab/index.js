import React, { useState } from 'react';
import styled from 'styled-components/native';
import CardJob from '@shared/components/cards/CardJob';

import { SimpleButton } from '@shared/components/buttons';

const jobsList = [
  {
    name: 'CDL A',
    city: 'Newark, NJ',
    date: '06/03/2019',
    status: 'Submited',
    duration: '22 hours',
    price: '$22-$26',
    logo:
      'https://vinkod23.ru/ckeditor_assets/pictures/221/content_c31c593a6741a832e25atotachi.png',
  },
  {
    name: 'CDL B',
    city: 'New York, NY',
    date: '10/03/2019',
    status: 'Submited',
    duration: '22 hours',
    price: '$3-$24',
    logo:
      'https://vinkod23.ru/ckeditor_assets/pictures/221/content_c31c593a6741a832e25atotachi.png',
  },
  {
    name: 'CDL C',
    city: 'Newark, NJ',
    date: '12/03/2019',
    status: 'Submited',
    duration: '22 hours',
    price: '$10-$23',
    logo:
      'https://vinkod23.ru/ckeditor_assets/pictures/221/content_c31c593a6741a832e25atotachi.png',
  },
];

const PendingTab = () => {
  const [loading, setLoading] = useState(false);
  const [isFindJob, setIsFindJob] = useState(false);

  const handleSearchJob = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsFindJob(true);
    }, 2000);
  };

  if (loading) {
    return (
      <Container>
        <Caption>Loading...</Caption>
      </Container>
    );
  }

  if (isFindJob) {
    return (
      <Container>
        {jobsList.map(({ name, city, date, status, duration, price, logo }) => (
          <CardJob
            key={name}
            name={name}
            city={city}
            date={date}
            status={status}
            duration={duration}
            price={price}
            logo={logo}
            tab="pending"
          />
        ))}
      </Container>
    );
  }

  return (
    <Container>
      <Caption>You have no jobs pending.</Caption>
      <SimpleButton onPress={handleSearchJob} title="Search Job" />
    </Container>
  );
};

const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const Caption = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 40;
  margin-bottom: 20px;
`;

export default PendingTab;
