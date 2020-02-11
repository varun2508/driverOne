import React from 'react';
import styled from 'styled-components/native';
import { greyColor } from '../../../utils/stylesConstants';

const FullScreenDevider = () => {
  return <Devider />;
};

export default FullScreenDevider;

const Devider = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${greyColor};
  height: 2;
  width: 100%;
  opacity: 0.4;
`;
