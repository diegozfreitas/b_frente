import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { View, Alert } from 'react-native';

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

export const Login2 = () => {
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

export class Login extends React.PureComponent {

  state = {
    cpf: '',
    password: '',
  };

  handleOnLogin = () => {
    const {cpf, password} = this.state;

    if (!cpf && !password) return Alert.alert('Erro', 'Todos os campos devem estar preenchidos!');

    //aqui entra a chamada da api...

    Actions.users();
  }

  render() {
    return (
      <Body as={View}>
        <Container>
          <Content>
            <ImagemLogo source={logo} />
            {/* <ImagemLogo source={require('./../../assets/img/logo.png')} /> */}

            <TextLogin>Login</TextLogin>

            <TextInput
              label="CPF"
              value={this.state.cpf}
              onChangeText={value => this.setState({ cpf: value })}
              keyboardType="numeric"
            />

            <TextInput
              label="Senha"
              value={this.state.password}
              onChangeText={value => this.setState({ password: value })}
            />

            <Button onPress={this.handleOnLogin}>LOGAR</Button>
          </Content>
        </Container>
      </Body>
    );
  }
}
