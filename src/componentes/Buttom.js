import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  padding-vertical: 16;
  background: #00AEEF;
  border-radius: 2;
  width: 90%;
  align-self: center;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16;
  text-align: center;
`;

export const Button = ({children, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Label>{children}</Label>
    </Container>
  );
};
