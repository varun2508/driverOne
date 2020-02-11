import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import format from 'date-fns/format';
import LinearGradient from 'react-native-linear-gradient';
import { BackButton } from '@shared';
import JobsList from '@mobx/jobsApi';
import { SimpleButton, FullScreenDevider } from '@shared';

const JobDetails = props => {
  const { componentId } = props;
  const {
    id,
    name,
    date_start,
    date_end,
    created_at,
    status,
    hours,
    pay_from,
    pay_to,
    mileage,
    logo,
    pickup_points,
    delivery_locations,
    final_destinations,
    equipment_type,
    job_details
  } = props.data;
  const apply = async () => {
    console.log('----------calling in component');
    await JobsList.applyToJob({
      job_id: id
    });
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0f2ba1', '#61aff4']}
        start={{ x: 0.0, y: 0.6 }}
        end={{ x: 0.7, y: 1.0 }}
        style={styles.gradiend}
      >
        <GradientText>
          Have questions? <UnderlineText>Contact us</UnderlineText> or call
          1-800-Drivers
        </GradientText>
      </LinearGradient>
      <ScrollView>
        <BackButtonContainer>
          <BackButton componentId={componentId} backScreen="search" />
        </BackButtonContainer>
        <InfoContainer>
          <CardImage
            source={{
              uri: logo
            }}
          />
          <Text>Company name: {name || '--'}</Text>
          <Text>
            {hours} hours <PointSymbol> &#9679; </PointSymbol> {mileage} miles
          </Text>

          <Text>
            {`$${pay_from} - $${pay_to}`}{' '}
            <GreyText> Rates based on experence</GreyText>
          </Text>
          <Text>
            Posted on {format(new Date(created_at.split(' ')[0]), 'MM/dd/yyyy')}
          </Text>
          <BoldText>Start Date</BoldText>
          <Text>
            {date_start &&
              format(new Date(date_start.split(' ')[0]), 'MM/dd/yyyy')}{' '}
            -{' '}
            {date_end && format(new Date(date_end.split(' ')[0]), 'MM/dd/yyyy')}
          </Text>
          <BoldText>Locations</BoldText>
          <Text>
            Start:{' '}
            {pickup_points[0] &&
              pickup_points.map(el => <Text>{el.location}; </Text>)}
          </Text>
          <Text>
            Delivery:{' '}
            {delivery_locations[0] &&
              delivery_locations.map(el => <Text>{el.location}; </Text>)}
          </Text>
          <Text>
            End:{' '}
            {final_destinations[0] &&
              final_destinations.map(el => <Text>{el.location}; </Text>)}
          </Text>
          <BoldText>Equipment Type</BoldText>
          <Text>{equipment_type}</Text>
          <BoldText>Details</BoldText>
          <Text>{job_details}</Text>
        </InfoContainer>
        <FullScreenDevider />
        <SimpleButton
          title={'Express Interest'}
          style={{ marginLeft: 15, marginRight: 15 }}
          titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
          onPress={apply}
        />
      </ScrollView>
    </View>
  );
};

export default JobDetails;
const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  gradiend: {
    display: 'flex',
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const BackButtonContainer = styled.View`
  margin-left: 15px;
`;

const InfoContainer = styled.View`
  margin: 5px 25px 25px 25px;
`;
const CardImage = styled.Image`
  width: 105px;
  height: 80px;
  border: 1px solid #fee7d0;
  margin-bottom: 4px;
`;
const Text = styled.Text`
  padding: 2px 0;
`;

const GreyText = styled.Text`
  color: grey;
  font-style: italic;
`;
const GradientText = styled.Text`
  color: #fff;
`;

const UnderlineText = styled.Text`
  text-decoration: underline;
  text-decoration-color: #fff;
`;
const PointSymbol = styled.Text`
  font-size: 7px;
`;

const BoldText = styled.Text`
  font-weight: bold;
  margin: 10px 0 5px 0;
`;
