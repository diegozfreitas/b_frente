import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

import { Button, Body, Espaco } from './../../componentes';
import service from '../../service';

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

export class Users extends React.PureComponent {
  state = {
    users: [],
  };

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const data = await service.get('/user/list')
    this.setState({ users: data.data });

    // service.get('/user/list').then(data => {
    //   this.setState({ users: data.data });
    // })
  };

  handleOnLogin = () => Actions.login();

  handleOnCadastrar = () => Actions.newUser();

  render() {
    return (
      <Body>
        <Content>
          <List data={this.state.users} renderItem={Card} />
        </Content>

        <Footer>
          <Button onPress={this.handleOnLogin}>DESLOGAR</Button>

          <Espaco></Espaco>

          <Button onPress={this.handleOnCadastrar}>CADASTRAR</Button>
        </Footer>
      </Body>
    );
  }
}
