import React from 'react';
import {Button, Container, Title} from '../../Components';

export const Configurations = ({navigation}: any) => (
  <Container>
    <Title text="Configurations" />
    <Button text="Go to home" action={() => navigation.navigate('Home')} />
  </Container>
);
