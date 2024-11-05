import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Humor e Sintomas" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Humor</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.chip}>
                <Text>Calma</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text>Feliz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text>Energética</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.chip}>
                <Text>Alegre</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text>Irritada</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text>Triste</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Sintomas</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.chip}>
                <Text>Cólicas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text>Dor de cabeça</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text>Acne</Text>
              </TouchableOpacity>
            </View>

            <Button title="Fechar" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  chip: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});