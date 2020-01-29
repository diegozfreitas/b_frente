import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  font-size: 14;
  padding-vertical: 8;

  padding-horizontal: 8;
  background: #f2f2f2;
  margin-bottom: 20;
  width: 100%;
`;

const ContainerText = styled.TextInput`
  border-bottom-width: 1;
  border-bottom-color: #888;
  width: 100%;
  align-self: center;
`;

const Label = styled.Text`
  border-bottom-color: #ddd;
  font-size: 12;
  padding-vertical: 8;
`;

export const TextInput = ({ label, placeholder, secureTextEntry }) => {
  return (
    <Container>
      <Label>{label}</Label>
      
      <ContainerText
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
};
