import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from '../../styles';
import HeaderNav from './../../components/HeaderNav';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goRegister() {
    navigation.navigate('Register');
  }

  function submit(){
    if(email !== '' && password !== ''){
      navigation.navigate('Home');
    } else {
      Alert.alert(
        "Corrigir",
        "Por favor, informe um e-mail e senha"
      );
    }
  }

  return (
    <S.Container>
      <HeaderNav title="Entrar"/>
      <S.ContainerInput>
        <S.Input 
          placeholder="E-mail"
          onChangeText={text => setEmail(text)}
          defaultValue={email}
        />
        <S.Input 
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          defaultValue={password}
        />
        <S.Button onPress={submit}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
        <S.ButtonOutline>
          <S.ButtonText color="#c96a4b">Esqueceu a Senha?</S.ButtonText>
        </S.ButtonOutline>
        <S.ButtonRegister onPress={goRegister}>
          <S.ButtonText color="#fffffff">Não possui uma conta?</S.ButtonText>
          <S.ButtonText color="#8fb3ff" font="bold"> Cadastre-se</S.ButtonText>
        </S.ButtonRegister>
      </S.ContainerInput>
    </S.Container>
  );
}