import React from 'react';

import styled from 'styled-components/native';

const ModalComponent = ({ children }) => {
  return (
    <Modal>
      <Container>{children}</Container>
    </Modal>
  );
};

export default ModalComponent;

const Modal = styled.Modal`
  background-color: #858585;
  position: absolute;
  flex: 1;
`;

const Container = styled.TouchableOpacity`
  background-color: red;
`;
