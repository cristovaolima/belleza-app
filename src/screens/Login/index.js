import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from '../../styles';

export default function Login() {
  const navigation = useNavigation();

  function goRegister() {
    navigation.navigate('Register');
  }

  return (
    <S.Container>
      <S.Header>
        <S.TextHeader>Entrar</S.TextHeader>
      </S.Header>
      <S.ContainerInput>
        <S.Input placeholder="E-mail"/>
        <S.Input placeholder="Senha"/>
        <S.Button>
          <S.ButtonText>Cadastrar</S.ButtonText>
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