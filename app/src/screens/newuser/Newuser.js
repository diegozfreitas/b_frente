import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

import { Button, Body, TextInput, TextLogin } from './../../componentes';

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

export class NewUser extends React.PureComponent {
  state = {
    nome: '',
    cpf: '',
    telefone: '',
    cidade: '',
    bairro: '',
  };

  handleOnsave = () => {
    const { nome, cpf, telefone, cidade, bairro } = this.state;

    Alert.alert('Nome', nome);
    Alert.alert('Seu CPF', cpf);
    Alert.alert('Fone', telefone);
    Alert.alert('Cidade', cidade);
    Alert.alert('Bairro', bairro);

    Actions.users();
  };

  render() {
    return (
      <Body>
        <Container>
          <Content>
            <TextLogin>Cadastro</TextLogin>

            <TextInput
              label="Nome"
              value={this.state.nome}
              onChangeText={value => this.setState({ nome: value })}
            />

            <TextInput
              label="CPF"
              value={this.state.cpf}
              onChangeText={value => this.setState({ cpf: value })}
              keyboardType="numeric"
            />

            <TextInput
              label="Telefone"
              value={this.state.telefone}
              onChangeText={value => this.setState({ telefone: value })}
              keyboardType="numeric"
            />

            <TextInput
              label="Cidade"
              value={this.state.cidade}
              onChangeText={value => this.setState({ cidade: value })}
            />

            <TextInput
              label="Bairro"
              value={this.state.bairro}
              onChangeText={value => this.setState({ bairro: value })}
            />

            <Button onPress={this.handleOnsave}>Guardar</Button>
          </Content>
        </Container>
      </Body>
    );
  }
}
