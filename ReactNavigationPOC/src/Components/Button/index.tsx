import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #00ccff;
  padding: 10px 25px;
  border-radius: 8px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Button = ({text, action}: {text: string; action: () => void}) => (
  <Container onPress={action}>
    <Text>{text}</Text>
  </Container>
);
