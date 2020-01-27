import React from 'react';
import { View, ScrollView } from 'react-native';
import CardJob from '@shared/components/cards/CardJob';
import { timeSince, navigate } from '@shared/helpers';

const ListTab = ({ jobsList, componentId }) => {
  // const getPickUpPoint = pickup_points => {
  //   return pickup_points.forEach(element => {
  //     return element.location;
  //   });
  // };
  const navigateTo = cardProps => {
    console.log('----------navigating', cardProps);
    navigate('JobDetails', componentId, cardProps);
  };
  console.log('-------props---');
  return (
    <ScrollView>
      {jobsList.map(
        ({
          id,
          name,
          date_start,
          created_at,
          status,
          hours,
          pay_from,
          pay_to,
          logo,
          rating,
          pickup_points,
          mileage,
          equipment_type,
          job_details
        }) => (
          <CardJob
            key={id}
            name={name}
            city={pickup_points[0] ? pickup_points[0].location : '--'}
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
            onPress={() =>
              navigateTo({
                name,
                date_start,
                created_at,
                status,
                hours,
                pay_from,
                pay_to,
                logo,
                rating,
                pickup_points,
                equipment_type,
                mileage,
                job_details
              })
            }
          />
        )
      )}
    </ScrollView>
  );
};

export default ListTab;
