import React from 'react';
import {Button, Container, Title} from '../../Components';

export const Profile = ({navigation}: any) => (
  <Container>
    <Title text="Profile" />
    <Button text="Go to home" action={() => navigation.navigate('Home')} />
  </Container>
);
