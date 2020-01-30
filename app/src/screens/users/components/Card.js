import React from 'react';
import styled from 'styled-components';

const TextNome = styled.Text`
    font-size: 16;
    font-weight: bold;
`;

const Text = styled.Text`
    font-size: 14;
`;

const Container = styled.View`
    background: #fff;
    margin-bottom: 8;
    padding-vertical: 8;
    padding-horizontal: 8;
`;

export const Card = ({ item }) => {
    return (
        <Container>
            <TextNome>{item.name}</TextNome> 
            <Text>{item.email}</Text> 
        </Container>
    )
}
