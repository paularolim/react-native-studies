import React from 'react';
import { ModalListProvider } from './src/modals/ModalList/Provider';
import { Home } from './src/screens/Home';

export const App = () => (
  <ModalListProvider>
    <Home />
  </ModalListProvider>
);
