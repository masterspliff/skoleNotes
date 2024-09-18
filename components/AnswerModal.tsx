import React from 'react';
import { Modal, View, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

// Definerer typer for modalens props
type AnswerModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  answer: string;
};

const AnswerModal = ({ modalVisible, setModalVisible, answer }: AnswerModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ThemedText style={styles.modalText}>{answer}</ThemedText>
          <Pressable style={[styles.buttonClose]} onPress={() => setModalVisible(false)}>
            <ThemedText style={styles.buttonText}>Luk</ThemedText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AnswerModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: '#003300',
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#000099',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});