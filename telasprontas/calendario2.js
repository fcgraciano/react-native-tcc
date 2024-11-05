import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [month] = useState(9); // Outubro
  const [year] = useState(2024);

  const handleDayPress = (day) => {
    Alert.alert("Data Selecionada", `Você selecionou: ${day}/${month + 1}/${year}`);
  };

  return (
    <View style={css.container}>
      <View style={css.box}>
        <Text style={css.titulos}>Que dia começou a sua última menstruação?</Text>
      </View>
      <View style={css.linha}>
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
          <View key={index} style={css.semana}>
            <Text>{day}</Text>
          </View>
        ))}
      </View>
      {[...Array(5)].map((_, weekIndex) => (
        <View key={weekIndex} style={css.linha}>
          {[...Array(7)].map((_, dayIndex) => {
            const day = weekIndex * 7 + dayIndex + 1;
            return day <= 30 ? ( // Ajuste para o número de dias
              <TouchableOpacity
                key={dayIndex}
                style={css.dia}
                onPress={() => handleDayPress(day)}
              >
                <Text>{day}</Text>
              </TouchableOpacity>
            ) : (
              <View key={dayIndex} style={css.dia} />
            );
          })}
        </View>
      ))}
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F3F1F2',
  },
  box: {
    marginBottom: 5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulos: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linha: {
    flexDirection: 'row',
  },
  dia: {
    height: 50,
    width: '14.2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc', // Borda opcional para visualização
  },
  semana: {
    color: '#BA117D',
    height: 50,
    width: '14.2%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
