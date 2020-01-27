import React from 'react';
import styled from 'styled-components/native';
import { Rating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { greyColor } from '../../../utils/stylesConstants';
const CardJob = ({
  name,
  city,
  date,
  status,
  duration,
  price,
  logo,
  rating,
  tab,
  onPress,
  startsIn,
  createdAt
}) => {
  return (
    <Card onPress={onPress} activeOpacity={1}>
      <HeaderCard>
        <LeftHeaderPart>
          <ImageContainer>
            <CardImage
              source={{
                uri: logo
              }}
            />
            {rating && (
              <Rating
                imageSize={15}
                readonly
                startingValue={rating}
                ratingCount={5}
              />
            )}
          </ImageContainer>

          <ContainerInfo>
            <Info>{name}</Info>
            <Info>
              <Ionicons
                name={'ios-pin'}
                style={{ marginRight: 3, fontSize: 12 }}
                size={12}
              />{' '}
              {city}
            </Info>
            <Info>
              {duration} &#9679; {price}
            </Info>
            <Info>Starts at {startsIn}</Info>
          </ContainerInfo>
        </LeftHeaderPart>
        {createdAt && <CreatedAtText>{createdAt} ago</CreatedAtText>}
      </HeaderCard>
      <FooterCard>
        <Date>{date && `Applied on ${date}`}</Date>
        <StatusContainer>
          {tab !== 'completed' && <Status tab={tab}>{status}</Status>}
          {status === 'Submited' && <AntDesign style={icon} name="check" />}
        </StatusContainer>
      </FooterCard>
    </Card>
  );
};

export default CardJob;

const icon = {
  fontSize: 15,
  color: '#2182d9'
};

const Card = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.34);
  background-color: #fff;
  border-radius: 5px;
`;

const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
  margin-top: 15px;
`;

const LeftHeaderPart = styled.View`
  flex-direction: row;
`;

const FooterCard = styled.View`
  border: 1px solid rgb(232, 232, 232);
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const ContainerInfo = styled.View`
  margin-top: -15px;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const Info = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
  color: grey;
`;

const Date = styled.Text`
  font-size: 12px;
  color: #b1acae;
`;

const StatusContainer = styled.Text`
  flex-direction: row;
  align-items: center;
`;

const Status = styled.Text`
  color: ${props => (props.tab === 'closed' ? 'grey' : '#2182d9')} 
  font-size: 12px;
`;

const CreatedAtText = styled.Text`
  /* color: 'grey'; */
  font-size: 12px;
`;

const ImageContainer = styled.View`
  margin: 0 10px 10px;
`;

const CardImage = styled.Image`
  width: 75px;
  height: 50px;
  margin-bottom: 4px;
`;

CardJob.defaulProps = {
  onPress: () => {}
};
