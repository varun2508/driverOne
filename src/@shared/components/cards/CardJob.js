import React from 'react';
import styled from 'styled-components/native';
import { Rating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardJob = ({ name, city, date, status, duration, price, logo, rating, tab, onPress }) => {
  return (
    <Card onPress={onPress} activeOpacity={1}>
      <HeaderCard>
        <LeftHeaderPart>
          <ImageContainer>
            <CardImage
              source={{
                uri: logo,
              }}
            />
          </ImageContainer>

          <ContainerInfo>
            <Info>{name}</Info>
            <Info>{city}</Info>
            <Info>
              {duration} {price}
            </Info>
          </ContainerInfo>
        </LeftHeaderPart>
        {rating && <Rating imageSize={15} readonly startingValue={rating} ratingCount={5} />}
      </HeaderCard>
      <FooterCard>
        <Date>Applied on {date}</Date>
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
  color: '#2182d9',
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
  margin-bottom: 15px;
  justify-content: space-between;
`;

const Info = styled.Text`
  font-size: 12px;
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
  color: ${(props) => (props.tab === 'closed' ? 'grey' : '#2182d9')} 
  font-size: 12px;
`;

const ImageContainer = styled.View`
  margin: 0 10px 10px;
  border: 1px solid #fee7d0;
`;

const CardImage = styled.Image`
  width: 70px;
  height: 50px;
`;

CardJob.defaulProps = {
  onPress: () => {},
};
