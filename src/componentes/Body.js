import React from 'react';
import styled from 'styled-components';

const Container = styled.ScrollView`
  padding-vertical: 24;
  padding-horizontal: 24;
  flex: 1;
  background: #eee;
`;

export const Body = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
