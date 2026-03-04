import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Botao = ({texto, onPress}) => (
    <TouchableOpacity style={styles.button}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  );

  


export default function RootLayout() {

  return (
    <SafeAreaView>

      
      <View>
          <Text>Valor na tela</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.line}>
        <Botao texto="C" onPress={() => tocarNumero('Apagar')} />
        <Botao texto="()" onPress={() => tocarNumero('parentes')} />
        <Botao texto="%" onPress={() => tocarNumero('%')} />
        <Botao texto="÷" onPress={() => tocarNumero('/')} />
        </View>

         <View style={styles.line}>
          <Botao texto="7" onPress={() => tocarNumero('7')} />
          <Botao texto="8" onPress={() => tocarNumero('8')} />
          <Botao texto="9" onPress={() => tocarNumero('9')} />
          <Botao texto="X" onPress={() => tocarNumero('X')} /> 
        </View>

         <View style={styles.line}>
          <Botao texto="4" onPress={() => tocarNumero('4')} />
          <Botao texto="5" onPress={() => tocarNumero('5')} />
          <Botao texto="6" onPress={() => tocarNumero('6')} />
          <Botao texto="-" onPress={() => tocarNumero('-')} /> 
        </View>

         <View style={styles.line}>
          <Botao texto="1" onPress={() => tocarNumero('1')} />
          <Botao texto="2" onPress={() => tocarNumero('2')} />
          <Botao texto="3" onPress={() => tocarNumero('3')} />
          <Botao texto="+" onPress={() => tocarNumero('+')} /> 
        </View>

        <View style={styles.line}>
          <Botao texto="0" onPress={() => tocarNumero('0')} />
          <Botao texto="," onPress={() => tocarNumero('.')} />
          <Botao texto="=" onPress={() => tocarNumero('=')} />
          <Botao texto="+/-" onPress={() => tocarNumero('pet')} />
        </View>

      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    
  },

  button: {
    backgroundColor: '#333',
    width: 90,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }



})