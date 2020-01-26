import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import {View} from 'react-native';

import { Button, Body } from './../../componentes';

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const Content = styled.View`
  padding-vertical: 24;
  background: #ddd;
  border-radius: 6;
`;

export const Login = () => {
  const handleOnLogin = () => Actions.users();

  return (
    <Body as={View}>
      <Container>
        <Content>
          <Button prop_acao_bt={handleOnLogin}>LOGAR</Button>
        </Content>
      </Container>
    </Body>
  );
};
