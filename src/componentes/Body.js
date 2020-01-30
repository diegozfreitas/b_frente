import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  padding-vertical: 24;
  flex: 1;
  background: #eee;
  padding-horizontal: 24;
`;

export const Body = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
