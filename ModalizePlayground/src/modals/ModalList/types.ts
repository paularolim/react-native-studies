import { ReactNode, RefObject } from 'react';
import { LayoutRectangle } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { IHandles } from 'react-native-modalize/lib/options';
import { EnumType } from '../../enums/types';

export type ModalOptions = 'gender' | 'cities';

export type ModalRefType = Modalize;

export type OnLayoutProps = { layout: LayoutRectangle };

export type ModalListProviderProps = { children: ReactNode };

export type ModalListContextProps = {
  /**
   * Returns the opened modal.
   */
  currentModal: ModalOptions | null;
  /**
   * Execute this function to open modal in the screen.
   */
  openModal: (modal: ModalOptions) => void;
  /**
   * Execute this function on close event. This function is exclusive for ModalList component, don't use in the screen.
   */
  onClose: () => void;
  /**
   * Returns the modal ref.
   */
  modalListRef: RefObject<IHandles>;
  /**
   * Returns the modal data. This data is exclusive for ModalList component, don't use in the screen.
   */
  data: EnumType[];
};
