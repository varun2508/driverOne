import React, { useState, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { Loader } from '@shared/components';
import CardJob from '@shared/components/cards/CardJob';
import { timeSince, navigate } from '@shared/helpers';
import { baseURL } from '../../../utils/constants';
const ListTab = ({ jobsList, componentId, fetchData, loading }) => {
  // const getPickUpPoint = pickup_points => {
  //   return pickup_points.forEach(element => {
  //     return element.location;
  //   });
  // };
  const navigateTo = cardProps => {
    navigate('JobDetails', componentId, cardProps);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchData} />
      }
    >
      {jobsList.map(
        ({
          id,
          name,
          date_start,
          date_end,
          created_at,
          status,
          hours,
          pay_from,
          pay_to,
          logo,
          rating,
          pickup_points,
          delivery_locations,
          final_destinations,
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
            logo={`${baseURL}${logo}`}
            rating={4}
            tab="closed"
            onPress={() =>
              navigateTo({
                name,
                date_start,
                date_end,
                created_at,
                status,
                hours,
                pay_from,
                pay_to,
                logo: `${baseURL}${logo}`,
                rating,
                pickup_points,
                delivery_locations,
                final_destinations,
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
