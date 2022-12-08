import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ModalList } from '../../modals/ModalList';
import { useModalList } from '../../modals/ModalList/useModalList';
import { styles } from './styles';

export const Home = () => {
  const { currentModal, openModal, modalListRef } = useModalList();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Home</Text>

        <View style={styles.info}>
          <Text>{`currentModal: ${currentModal}`}</Text>
        </View>
      </View>

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
