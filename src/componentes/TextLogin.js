import React from 'react';
import styled from 'styled-components';

const ContainerTextLogin = styled.Text`
  margin-bottom: 10;
  font-weight: bold;
  color: #00AEEF;
`;

export const TextLogin = ({children}) => {
  return (
    <ContainerTextLogin>{children}</ContainerTextLogin>
  );
};