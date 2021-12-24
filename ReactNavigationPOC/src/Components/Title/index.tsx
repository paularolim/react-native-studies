import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Title = ({text}: {text: string}) => <Text>{text}</Text>;
