import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

import { Button, Body } from './../../componentes';

const Content = styled.View`
  padding-vertical: 24;
  background: #ddd;
  border-radius: 6;
`;

export const Users = () => {
  
  const handleOnLogin = () => Actions.login();

  return (
    <Body>
      <Content>
        <Button onPress={handleOnLogin}>DESLOGAR</Button>
      </Content>
    </Body>
  );
};
