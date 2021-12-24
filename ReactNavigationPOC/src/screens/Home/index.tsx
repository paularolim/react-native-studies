import React from 'react';
import {Button} from '../../Components/Button';
import {Container} from '../../Components/Container';
import {Title} from '../../Components/Title';

export const Home = ({navigation}: any) => {
  return (
    <Container>
      <Title text="Home" />
      <Button
        action={() => navigation.navigate('Products')}
        text="Go to products"
      />
    </Container>
  );
};
