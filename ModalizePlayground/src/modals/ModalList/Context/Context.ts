import { createContext } from 'react';
import { ModalListContextProps } from './types';

export const ModalListContext = createContext<ModalListContextProps | null>(
  null,
);
