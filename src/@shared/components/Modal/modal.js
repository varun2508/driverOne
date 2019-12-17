import React from 'react';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';

const ModalComponent = ({ children, handleCloseModal, isOpenModal }) => {
  if (!isOpenModal) {
    return null;
  }

  return (
    <Modal>
      <Container onPress={handleCloseModal} activeOpacity={1}>
        <ModalContent activeOpacity={1}>
          <Icon onPress={handleCloseModal} style={closeIcon} name="close" />
          {children}
        </ModalContent>
      </Container>
    </Modal>
  );
};

export default ModalComponent;

const closeIcon = {
  alignSelf: 'flex-end',
  marginRight: 20,
  marginTop: 10,
  marginBottom: 20,
  fontSize: 24
};

const Modal = styled.Modal``;

const Container = styled.TouchableOpacity`
  background-color: #858585;
  flex: 1;
  justify-content: center;
  padding: 0 20px;
`;

const ModalContent = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 0px 5px 0px;
`;
