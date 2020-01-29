import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import { Button, Body, TextInput, TextLogin } from './../../componentes';
import logo from './../../assets/img/logo.png';

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const Content = styled.View`
  padding-vertical: 24;
  padding-horizontal: 24;
  background: #ddd;
  border-radius: 6;
`;

const ImagemLogo = styled.Image`
  width: 100%;
  height: 60;
  margin-bottom: 50;
  align-self: center;
  resize-mode: contain;
`;

export const Login = () => {
  const handleOnLogin = () => Actions.users();

  return (
    <Body as={View}>
      <Container>
        <Content>
          <ImagemLogo source={logo} />
          {/* <ImagemLogo source={require('./../../assets/img/logo.png')} /> */}

          <TextLogin>Login</TextLogin>

          <TextInput label="CPF" />

          <TextInput label="Senha" />

          <Button onPress={handleOnLogin}>LOGAR</Button>
        </Content>
      </Container>
    </Body>
  );
};
