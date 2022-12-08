import { ModalListContext } from './Context';
import React, { useMemo, useRef, useState } from 'react';
import {
  ModalListContextProps,
  ModalListProviderProps,
  ModalOptions,
  ModalRefType,
} from './types';
import { EnumType } from '../../enums/types';
import { cities } from '../../enums/cities';
import { gender } from '../../enums/gender';

const enums: Record<ModalOptions, EnumType[]> = {
  cities: cities,
  gender: gender,
};

export const ModalListProvider = ({ children }: ModalListProviderProps) => {
  const modalListRef = useRef<ModalRefType>(null);

  const [currentModal, setCurrentModal] = useState<ModalOptions | null>(null);

  const data = useMemo<EnumType[]>(
    () => (currentModal ? enums[currentModal] : []),
    [currentModal],
  );

  const openModal = (modal: ModalOptions) => {
    setCurrentModal(modal);
    modalListRef.current?.open();
  };

  const onClose = () => {
    setCurrentModal(null);
  };

  const value = useMemo<ModalListContextProps>(
    () => ({ currentModal, modalListRef, openModal, onClose, data }),
    [currentModal, data],
  );

  return (
    <ModalListContext.Provider value={value}>
      {children}
    </ModalListContext.Provider>
  );
};
