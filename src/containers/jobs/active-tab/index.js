import React, { useState } from 'react';

import styled from 'styled-components/native';

import { SimpleButton } from '@shared/components/buttons';
import Modal from '@shared/components/modal';
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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

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
          onPress={handleOpenModal}
        />
      ))}
      <Modal isOpenModal={isOpenModal} setIsOpenModal handleCloseModal={handleCloseModal}>
        <CaptionModal>Please confirm this route</CaptionModal>
        <SubTitle>By accepting this route, you are</SubTitle>
        <SubTitle>acknowledning receipt of your approval.</SubTitle>
        <ModalContent>
          <AmozonLink>Amazon Fulfillment in Linden, Nl</AmozonLink>
          <ContentInfo>Start Date: Wednesday, May 15, 2019 </ContentInfo>
          <ContentInfo>Start Time: 8:00 AM</ContentInfo>
          <ContentInfo>Location: Newark, Nj</ContentInfo>
          <SimpleButton style={marginButton} small title="Confirm job" />
          <SimpleButton style={marginButton} small white title="Decline job" />
        </ModalContent>
        <ModalFooter>
          <ModalFooterCaption>Please note</ModalFooterCaption>
          <ModalFooterText>
            Failure to report on time may result in a negative rating review and/or termination. If
            you cannot make your route, please call xxx-xxx-xxxx as soon as possible so we can
            assist you.
          </ModalFooterText>
          <FooterLink>View introductory</FooterLink>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ActiveTab;

const marginButton = {
  marginTop: 20,
  marginLeft: 5,
  marginRight: 5,
};

const Container = styled.View`
  margin: 20px;
`;

const CaptionModal = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  text-align: center;
`;

const ModalContent = styled.View`
  border: 1px solid #e8e8e8;
  border-left-width: 0;
  border-right-width: 0;
  margin-top: 30px;
  padding: 20px;
  padding-bottom: 30px;
`;

const AmozonLink = styled.Text`
  color: #2283d9;
  text-decoration: underline;
  text-decoration-color: #2283d9;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ContentInfo = styled.Text`
  font-size: 14px;
  margin-bottom: 3px;
`;

const ModalFooter = styled.View`
  margin: 25px 20px 5px 20px;
`;

const ModalFooterCaption = styled.Text`
  font-size: 14;
  margin-bottom: 10px;
`;

const ModalFooterText = styled.Text`
  font-size: 13;
`;

const FooterLink = styled.Text`
  margin-top: 8px;
  color: #2283d9;
  font-size: 14;
  text-decoration: underline;
  text-decoration-color: #2283d9;
`;
