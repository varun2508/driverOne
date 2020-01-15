import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardJob from '@shared/components/cards/CardJob';
import { timeSince } from '@shared/helpers';

const ListTab = ({ jobsList }) => {
  // const getPickUpPoint = pickup_points => {
  //   return pickup_points.forEach(element => {
  //     return element.location;
  //   });
  // };
  console.log('-------props---');
  return (
    <View>
      {jobsList.map(
        ({
          name,
          date_start,
          created_at,
          status,
          hours,
          pay_from,
          pay_to,
          logo,
          rating
        }) => (
          <CardJob
            key={name}
            name={name}
            city={'Newark, PA'}
            startsIn={date_start}
            createdAt={timeSince(
              new Date(new Date(created_at.split(' ').join('T')))
            )}
            status={status}
            duration={`${hours} hours`}
            price={`$${pay_from} - $${pay_to}`}
            logo={
              'https://pbs.twimg.com/profile_images/801363163740565505/BF44jfpn_400x400.jpg'
            }
            rating={4}
            tab="closed"
          />
        )
      )}
    </View>
  );
};

export default ListTab;
