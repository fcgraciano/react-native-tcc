import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Função para obter o número de dias em um mês
const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

// Função para obter o primeiro dia do mês
const getFirstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

export default function App() {
  const [month] = useState(1); // Fevereiro (1 = Fevereiro)
  const [year] = useState(2022);

  // Calcular dias do mês e primeiro dia
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  // Gerar um array com os dias do mês
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Criar um array para o calendário, preenchendo os dias em branco antes do primeiro dia
  const calendarDays = Array(firstDay).fill(null).concat(days);

  // Agrupando dias em semanas
  const weeks = [];
  while (calendarDays.length) {
    weeks.push(calendarDays.splice(0, 7));
  }

  const handleDayPress = (day) => {
    Alert.alert("Data Selecionada", `Você selecionou: ${day}`);
  };

  return (
    <View style={css.container}>
      <View style={css.box}>
      <Text style={css.titulos}>Fevereiro</Text>
      </View>
      <View style={css.linha}>
        <View style={css.semana}>D</View>
        <View style={css.semana}>S</View>
        <View style={css.semana}>T</View>
        <View style={css.semana}>Q</View>
        <View style={css.semana}>Q</View>
        <View style={css.semana}>S</View>
        <View style={css.semana}>S</View>
      </View>

      {weeks.map((week, weekIndex) => (
        <View key={weekIndex} style={css.linha}>
          {week.map((day, dayIndex) => (
            <TouchableOpacity 
              key={dayIndex} 
              style={css.dia} 
              onPress={() => day !== null && handleDayPress(day)}
            >
              {day !== null ? <Text>{day}</Text> : <View style={css.emptyDay} />}
            </TouchableOpacity>
          ))}
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
    fontFamily: 'Open Sans',
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
  },
  emptyDay: {
    height: 50,
    width: '14.2%',
  },
  semana: {
    color: '#BA117D',
    height: 50,
    width: '14.2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
