import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [tela, setTela] = useState('login'); 
 

  return (
    <View style={styles.container}>

     
      <View style={styles.avatar}>
        <Ionicons
          name={
            tela === 'login'
              ? 'person'
              : tela === 'cadastro'
              ? 'person-add'
              : 'mail'
          }
          size={60}
          color="#999"
        />
      </View>

    
      {tela === 'login' && (
        <>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Logar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setTela('cadastro')}
          >
            <Text style={styles.textoBotao}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTela('esqueceu')}>
            <Text style={styles.link}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </>
      )}

  
      {tela === 'cadastro' && (
        <>
          <Text style={styles.titulo}>Cadastro</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#999' }]}
            onPress={() => setTela('login')}
          >
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}

  
      {tela === 'esqueceu' && (
        <>
          <Text style={styles.titulo}>Esqueceu a senha</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#999' }]}
            onPress={() => setTela('login')}
          >
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc'
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: 10
  },

  input: {
    width: '100%',
    backgroundColor: '#e6e6e6',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10
  },

  botao: {
    width: '100%',
    backgroundColor: '#3CB371',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  link: {
    marginTop: 15,
    fontWeight: 'bold '
  }
});

