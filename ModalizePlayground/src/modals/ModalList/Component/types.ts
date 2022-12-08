import { LayoutRectangle } from 'react-native';
import { EnumType } from '../../../enums';

export type OnLayoutProps = { layout: LayoutRectangle };

export type ModalItemProps = EnumType & { isSelected?: boolean };
