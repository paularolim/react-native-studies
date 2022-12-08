import { useContext } from 'react';
import { ModalListContext } from './Context';

export const useModalList = () => {
  const context = useContext(ModalListContext);

  if (!context) {
    throw new Error('useModalList must be used within an ModalListProvider');
  }

  return context;
};
