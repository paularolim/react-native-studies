import React, { useMemo, useRef, useState } from 'react';
import { cities, EnumType, gender } from '../../../enums';
import { ModalItemProps } from '../Component';
import {
  ModalListContext,
  ModalListContextProps,
  ModalOptions,
  ModalRefType,
} from '../Context';
import { ModalListProviderProps, OpenModalProps } from './types';

const enums: Record<ModalOptions, EnumType[]> = {
  cities: cities,
  gender: gender,
};

const formatEnum = (
  selectedEnum: EnumType[],
  selectedItem: EnumType | null,
): ModalItemProps[] => {
  return selectedEnum.map(item => ({
    ...item,
    isSelected: item.code === selectedItem?.code,
  }));
};

export const ModalListProvider = ({ children }: ModalListProviderProps) => {
  const modalListRef = useRef<ModalRefType>(null);

  const [currentKey, setCurrentKey] = useState<string | null>(null);
  const [currentModal, setCurrentModal] = useState<ModalOptions | null>(null);
  const [selectedItem, setSelectedItem] = useState<EnumType | null>(null);

  const data = useMemo<EnumType[]>(
    () => (currentModal ? formatEnum(enums[currentModal], selectedItem) : []),
    [currentModal, selectedItem],
  );

  const onPressModalItem = (item: ModalItemProps) => {
    setSelectedItem(item);
    // modalListRef.current?.close();
  };

  const openModal = ({ modal, key }: OpenModalProps) => {
    setCurrentModal(modal);
    setCurrentKey(key);
    modalListRef.current?.open();
  };

  const closeModal = () => {
    modalListRef.current?.close();
  };

  const onClose = () => {
    setCurrentModal(null);
    setCurrentKey(null);
    setSelectedItem(null);
  };

  const value = useMemo<ModalListContextProps>(
    () => ({
      key: currentKey,
      currentModal,
      modalListRef,
      openModal,
      closeModal,
      onClose,
      data,
      selectedItem,
      onPressModalItem,
    }),
    [currentKey, currentModal, data, selectedItem],
  );

  return (
    <ModalListContext.Provider value={value}>
      {children}
    </ModalListContext.Provider>
  );
};
