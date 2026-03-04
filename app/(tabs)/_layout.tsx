import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Botao = ({ texto, onPress }) => {

  let estiloBotao = styles.button;

  if (texto === '+' || texto === '-' || texto === 'X' || texto === '÷') {
    estiloBotao = [styles.button, styles.operador];
  }

  if (texto === 'C' || texto === '()' || texto === '%') {
    estiloBotao = [styles.button, styles.cinzaclaro];
  }

  if (texto === '=') {
    estiloBotao = [styles.button, styles.igual];
  }

  return (
    <TouchableOpacity style={estiloBotao} onPress={onPress}>
      <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
};



export default function RootLayout() {
  const [visor, setVisor] = React.useState('0');
  const [operacao, setOperacao] = React.useState(null);
  const [valorAnterior, setValorAnterior] = React.useState(null);
  const [limparVisor, setLimparVisor] = React.useState(false);

  const tocarNumero = (valor) => {
    if (valor ==="÷") {
      valor = "/";
    }

    if (valor ==="X") {
      valor = "*";
    }

    if ((valor === "+" || valor === "-" || valor === "*" || valor === "/") && 
    (visor.charAt(visor.length - 1) === "+" || visor.charAt(visor.length - 1) === "-" || visor.charAt(visor.length - 1) === "*" || visor.charAt(visor.length - 1) === "/")) {
      return;
    } else {
      if (limparVisor) {
        setVisor(valor);
       setLimparVisor(false);
      } else {
        setVisor(visor === '0' ? valor : visor + valor);
      }
    }
  }

  const limparTudo = () => {
    setVisor('0');
    setOperacao(null);
    setValorAnterior(null);
    setLimparVisor(false);
  }

  const calcular = () => {
    try {
      const resultado = new Function('return ' + visor)();
      setVisor(resultado.toString());
    } catch (error) {
      setVisor('Erro');
    }
  }

  const porcentagem = () => {
    try {
      const resultado = parseFloat(visor) / 100;
      setVisor(resultado.toString());
    } catch (error) {
      setVisor('Erro');
    }  
  }

  const inverterSinal = () => {
    try {
      const resultado = parseFloat(visor) * -1;
      setVisor(resultado.toString());
    } catch (error) {
      setVisor('Erro');
    }
  }

  const parenteses = () => {
  if (visor.split('(').length > visor.split(')').length) {
    tocarNumero(')');
  } else {
    tocarNumero('(');
  }
}
  

  return (
    <SafeAreaView>

      
      <View style={styles.view}>
          <Text style={styles.visorText}>{visor}</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.line}>
        <Botao texto="C" onPress={limparTudo} />
        <Botao texto="()" onPress={parenteses} />
        <Botao texto="%" onPress={porcentagem} />
        <Botao texto="÷" onPress={() => tocarNumero('÷')} />
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
          <Botao texto="+/-" onPress={inverterSinal} />
          <Botao texto="0" onPress={() => tocarNumero('0')} />
          <Botao texto="," onPress={() => tocarNumero('.')} />
          <Botao texto="=" onPress={calcular} />
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

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold' 
  },

  visorText: {
    color: '#fff',
    fontSize: 48,
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
  },

  view: {
    height: 150,
    justifyContent: 'center',
   alignItems: 'flex-end',
    padding: 20,
  },

  operador: {
    backgroundColor: '#a5a5a5'
  },

  cinzaclaro: {
    backgroundColor: '#505050'
  },

  igual: {
    backgroundColor: '#34c759'
  }



})