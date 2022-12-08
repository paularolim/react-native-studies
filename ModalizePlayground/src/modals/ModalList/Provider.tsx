import { ModalListContext } from './Context';
import React, { useMemo, useRef, useState } from 'react';
import {
  ModalItemProps,
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

  const [currentModal, setCurrentModal] = useState<ModalOptions | null>(null);
  const [selectedItem, setSelectedItem] = useState<EnumType | null>(null);

  const data = useMemo<EnumType[]>(
    () => (currentModal ? formatEnum(enums[currentModal], selectedItem) : []),
    [currentModal, selectedItem],
  );

  const onPressModalItem = (item: ModalItemProps) => {
    setSelectedItem(item);
  };

  const openModal = (modal: ModalOptions) => {
    setCurrentModal(modal);
    modalListRef.current?.open();
  };

  const onClose = () => {
    setCurrentModal(null);
    setSelectedItem(null);
  };

  const value = useMemo<ModalListContextProps>(
    () => ({
      currentModal,
      modalListRef,
      openModal,
      onClose,
      data,
      selectedItem,
      onPressModalItem,
    }),
    [currentModal, data, selectedItem],
  );

  return (
    <ModalListContext.Provider value={value}>
      {children}
    </ModalListContext.Provider>
  );
};
