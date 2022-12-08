import { ReactNode, RefObject } from 'react';
import { LayoutRectangle } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { IHandles } from 'react-native-modalize/lib/options';

export type ModalOptions = 'gender' | 'cities';

export type ModalRefType = Modalize;

export type OnLayoutProps = { layout: LayoutRectangle };

export type ModalListProviderProps = { children: ReactNode };

export type ModalListContextProps = {
  currentModal: ModalOptions | null;
  /**
   * Execute this function to open modal in the screen.
   */
  openModal: (modal: ModalOptions) => void;
  /**
   * This function is exclusive for ModalList component, don't use in the screen.
   */
  onCloseModal: () => void;
  modalListRef: RefObject<IHandles>;
};
