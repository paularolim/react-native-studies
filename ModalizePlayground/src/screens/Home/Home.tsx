import { Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { ModalList, useModalList } from '../../modals/ModalList';
import { styles } from './styles';
import { EnumType } from '../../enums';

export const Home = () => {
  const { currentModal, openModal, modalListRef, selectedItem } =
    useModalList();

  const favCity1 = useMemo<EnumType | null>(() => selectedItem, [selectedItem]);
  const favCity2 = useMemo<EnumType | null>(() => selectedItem, [selectedItem]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Home</Text>

        <View style={styles.info}>
          <Text>{`currentModal: ${currentModal}`}</Text>
          <Text>{`selectedItem: ${JSON.stringify(selectedItem)}`}</Text>
        </View>
      </View>

      <Text>{`Your first favorite city: ${favCity1?.value || null}`}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => openModal('cities')}>
        <Text style={styles.buttonLabel}>Cities</Text>
      </TouchableOpacity>

      <Text>{`Your second favorite city: ${favCity2?.value || null}`}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => openModal('cities')}>
        <Text style={styles.buttonLabel}>Cities</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => openModal('gender')}>
        <Text style={styles.buttonLabel}>Gender</Text>
      </TouchableOpacity>

      <ModalList ref={modalListRef} />
    </View>
  );
};
