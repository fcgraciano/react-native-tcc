import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Navegar para a tela de login
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    // Navegar para a tela de cadastro
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
       <Image style={styles.grupo} source={require('./assets/grupo.png')} />
        <Text style={styles.title}>Bem-vindo!</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#590939',
  },
  button: {
    backgroundColor: '#590939', // Cor dos botões
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Botões arredondados
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  grupo:{
        justifyContent:'center',
    alignItems:'center',
    marginBottom:80,
     width:200,
     height:200,

    
  },
})