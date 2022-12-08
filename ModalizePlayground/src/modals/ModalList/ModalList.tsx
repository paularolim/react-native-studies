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
import { ModalItemProps, OnLayoutProps } from './types';
import { styles } from './styles';
import { useModalList } from './useModalList';

export const ModalList = forwardRef<Modalize, any>((_, ref) => {
  const [modalHeight, setModalHeight] = useState(0);

  const { onClose, data, onPressModalItem } = useModalList();

  const Item = useCallback(
    ({ item }: ListRenderItemInfo<ModalItemProps>) => (
      <TouchableOpacity
        onPress={() => onPressModalItem(item)}
        style={[
          styles.itemContainer,
          item.isSelected ? styles.itemContainerActive : {},
        ]}>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    ),
    [onPressModalItem],
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
