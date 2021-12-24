import React from 'react';
import {Button, Container, Title} from '../../Components';

export const Products = ({navigation}: any) => {
  return (
    <Container>
      <Title text="Products" />
      <Button
        text="Go to profile"
        action={() => navigation.navigate('ProfileStack')}
      />
    </Container>
  );
};
