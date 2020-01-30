import React from 'react';
import styled from 'styled-components';

const Text = styled.Text``;

export const Card = ({ item }) => {
return <Text>{item.name} {item.email}</Text>
}
