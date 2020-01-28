import React from 'react';
import styled from 'styled-components';

const ContainerText = styled.TextInput`
  padding-vertical: 8;
  background: #f2f2f2;
  border-end-width: 1;
  border-style: solid;
  border-bottom-color: #ddd;
  margin-bottom: 20;
  width: 90%;
  align-self: center;
`;

export const CampoInputText = ({props_placeholder}) => {
  return (
    <ContainerText
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={props_placeholder}
    >
    </ContainerText>
  );
};
