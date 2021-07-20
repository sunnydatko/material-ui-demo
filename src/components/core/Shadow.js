import React from 'react';
import styled from 'styled-components';

const ShadowDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5) !important;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  z-index: 10;
`;

const Shadow = ({ onClick }) => {
  return <ShadowDiv onClick={onClick} />;
};

export default Shadow;
