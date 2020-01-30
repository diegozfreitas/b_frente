import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

import { Button, Body, Espaco } from './../../componentes';

import { Card } from './components/Card';

const Content = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  margin-top: auto;
`;

const List = styled.FlatList`
  flex: 1;
`;


const data = [
  {
    id: 1,
    name: 'Diego',
    email: 'ddzadravec@gmail.com',
  },
  {
    id: 2,
    name: 'Eder',
    email: 'ederzadravec@gmail.com',
  },
  {
    id: 1,
    name: 'Diego',
    email: 'ddzadravec@gmail.com',
  },
  {
    id: 2,
    name: 'Eder',
    email: 'ederzadravec@gmail.com',
  },
  {
    id: 1,
    name: 'Diego',
    email: 'ddzadravec@gmail.com',
  },
  {
    id: 2,
    name: 'Eder',
    email: 'ederzadravec@gmail.com',
  },{
    id: 2,
    name: 'Eder',
    email: 'ederzadravec@gmail.com',
  },
  {
    id: 1,
    name: 'Diego',
    email: 'ddzadravec@gmail.com',
  },
  {
    id: 2,
    name: 'Eder',
    email: 'ederzadravec@gmail.com',
  },
  {
    id: 1,
    name: 'Diego',
    email: 'ddzadravec@gmail.com',
  },
  {
    id: 2,
    name: 'Eder',
    email: 'ederzadravec@gmail.com',
  },
];

export const Users = () => {
  const handleOnLogin = () => Actions.login();
  const handleOnCadastrar = () => Actions.newUser();

  return (
    <Body>
      <Content>
        <List data={data} renderItem={Card} />
      </Content>

      <Footer>
        <Button onPress={handleOnLogin}>DESLOGAR</Button>
        <Espaco></Espaco>
        <Button onPress={handleOnCadastrar}>CADASTRAR</Button>
      </Footer>
    </Body>
  );
};
