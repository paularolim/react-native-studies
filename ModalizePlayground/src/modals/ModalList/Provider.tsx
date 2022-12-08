import { ModalListContext } from './Context';
import React, { useMemo, useRef, useState } from 'react';
import {
  ModalListContextProps,
  ModalListProviderProps,
  ModalOptions,
  ModalRefType,
} from './types';

export const ModalListProvider = ({ children }: ModalListProviderProps) => {
  const modalListRef = useRef<ModalRefType>(null);

  const [currentModal, setCurrentModal] = useState<ModalOptions | null>(null);

  const openModal = (modal: ModalOptions) => {
    setCurrentModal(modal);
    modalListRef.current?.open();
  };

  const onCloseModal = () => {
    setCurrentModal(null);
  };

  const value = useMemo<ModalListContextProps>(
    () => ({ currentModal, modalListRef, openModal, onCloseModal }),
    [currentModal],
  );

  return (
    <ModalListContext.Provider value={value}>
      {children}
    </ModalListContext.Provider>
  );
};
