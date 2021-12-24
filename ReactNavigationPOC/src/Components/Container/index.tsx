import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = ({children}: {children: ReactNode}) => (
  <View>{children}</View>
);
