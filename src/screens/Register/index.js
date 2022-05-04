import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as S from '../../styles';

export default function Register() {
  const [check, setCheck] = useState(false);

  function checkUncheck(){
    setCheck(!check);
  }

  return (
    <S.Container>
      <S.Header>
        <S.TextHeader>Fazer Cadastro</S.TextHeader>
      </S.Header>
      <S.Input placeholder="Nome Completo"/>
      <S.Input placeholder="E-mail"/>
      <S.Input placeholder="CPF"/>
      <S.Input placeholder="Telefone"/>
      <S.Input placeholder="Senha"/>
      <S.ButtonTerms onPress={checkUncheck}>
        <S.CheckBox check={check}/>
        <S.ButtonText color="black">Aceito os termos e condições</S.ButtonText>
      </S.ButtonTerms>
      <S.Button>
        <S.ButtonText>Cadastrar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}