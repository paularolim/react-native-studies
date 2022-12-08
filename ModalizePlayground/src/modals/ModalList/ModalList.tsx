import {
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { forwardRef, useCallback, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { OnLayoutProps } from './types';
import { styles } from './styles';
import { EnumType } from '../../enums/types';
import { useModalList } from './useModalList';

export const ModalList = forwardRef<Modalize, any>((_, ref) => {
  const [modalHeight, setModalHeight] = useState(0);

  const { onClose, data } = useModalList();

  const Item = useCallback(
    ({ item }: ListRenderItemInfo<EnumType>) => (
      <TouchableOpacity style={styles.itemContainer}>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const Separator = useCallback(() => <View style={styles.separator} />, []);

  const onLayout = ({ layout }: OnLayoutProps) => {
    setModalHeight(layout.height);
  };

  return (
    <Modalize
      ref={ref}
      modalTopOffset={200}
      onLayout={onLayout}
      onClose={onClose}
      handlePosition="inside">
      <ScrollView
        horizontal
        style={{ height: modalHeight }}
        scrollEnabled={false}>
        <FlatList
          data={data}
          renderItem={Item}
          style={styles.listContainer}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={Separator}
        />
      </ScrollView>
    </Modalize>
  );
});
