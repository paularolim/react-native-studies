import { RefObject } from 'react';
import { Modalize } from 'react-native-modalize';
import { IHandles } from 'react-native-modalize/lib/options';
import { EnumType } from '../../../enums';
import { ModalItemProps } from '../Component';
import { OpenModalProps } from '../Provider';

export type ModalOptions = 'gender' | 'cities';

export type ModalRefType = Modalize;

export type ModalListContextProps = {
  /**
   * Returns the current key, for example, a field from a form.
   */
  key: string | null;
  /**
   * Returns the opened modal.
   */
  currentModal: ModalOptions | null;
  /**
   * Execute this function to open modal in the screen.
   */
  openModal: (props: OpenModalProps) => void;
  /**
   * Execute this function to close modal in the screen.
   */
  closeModal: () => void;
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
  data: ModalItemProps[];
  /**
   * Returns the selected item for current modal.
   */
  selectedItem: EnumType | null;
  /**
   * Execute this function on press item from list. This data is exclusive for ModalList component, don't use in the screen.
   */
  onPressModalItem: (item: ModalItemProps) => void;
};
