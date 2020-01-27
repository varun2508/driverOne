import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { BackButton } from '@shared';

const JobDetails = props => {
  console.log('-------props---', props);
  const { componentId } = props;
  const {
    name,
    date_start,
    created_at,
    status,
    hours,
    pay_from,
    pay_to,
    mileage,
    rating,
    pickup_points,
    equipment_type,
    job_details
  } = props.data;
  return (
    <ScrollView>
      <LinearGradient
        colors={['#0f2ba1', '#61aff4']}
        start={{ x: 0.0, y: 0.6 }}
        end={{ x: 0.7, y: 1.0 }}
        style={styles.container}
      >
        <GradientText>
          Have questions? <UnderlineText>Contact us</UnderlineText> or call
          1-800-Drivers
        </GradientText>
      </LinearGradient>
      <BackButtonContainer>
        <BackButton componentId={componentId} backScreen="search" />
      </BackButtonContainer>
      <InfoContainer>
        <CardImage
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/801363163740565505/BF44jfpn_400x400.jpg'
          }}
        />
        <Text>Company name: {name || '--'}</Text>
        <Text>
          {hours}hours <PointSymbol> &#9679; </PointSymbol> {mileage}
        </Text>

        <Text>
          {`$${pay_from} - $${pay_to}`}{' '}
          <GreyText> Rates based on experence</GreyText>
        </Text>
        <Text>Posted on {created_at}</Text>
        <BoldText>Start Date</BoldText>
        <Text>{date_start}</Text>
        <BoldText>Locations</BoldText>
        <Text>
          {pickup_points && pickup_points[0] && pickup_points[0].location}
        </Text>
        <BoldText>Equipment Type</BoldText>
        <Text>{equipment_type}</Text>
        <BoldText>Details</BoldText>
        <Text>{job_details}</Text>
      </InfoContainer>
    </ScrollView>
  );
};

export default JobDetails;
const styles = StyleSheet.create({
  container: {
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
