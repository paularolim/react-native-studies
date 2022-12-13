import { ReactNode } from 'react';
import { ModalOptions } from '../Context';

export type ModalListProviderProps = { children: ReactNode };

export type OpenModalProps = { modal: ModalOptions; key: string };
