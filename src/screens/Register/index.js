import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from '../../styles';

import HeaderNav from './../../components/HeaderNav';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState('');

  function checkUncheck(){
    setCheck(!check);
  }

  function validate(){
    var validateEmail = false;
    var validateName = false;
    var validateCPF = false;
    var validatePhone = false;
    var validatePassword = false;

    if(name !== '')
      validateName = true;
    if(email !== '')
      validateEmail = true;
    if(cpf !== '')
      validateCPF = true;
    if(phone !== '')
      validatePhone = true;
    if(password !== '')
      validatePassword = true;

    return validateEmail && validateName && validatePhone && validatePassword && validateCPF;
  }

  function submit(){
    if(validate() && check){
      Alert.alert(
        "Sucesso",
        "Cadastro realizado com sucesso",
        [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]);
    } else {
      Alert.alert(
        "Corrigir",
        "Por favor, preencha todos os campos e aceite os termos e condições"
      );
    }
  }

  return (
    <S.Container>
      <HeaderNav title="Fazer Cadastro"/>
      <S.Input 
        placeholder="Nome Completo"
        onChangeText={text => setName(text)}
        defaultValue={name}
      />
      <S.Input 
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        defaultValue={email}
      />
      <S.Input 
        placeholder="CPF"
        onChangeText={text => setCpf(text)}
        defaultValue={cpf}
        keyboardType="numeric"
      />
      <S.Input 
        placeholder="Telefone"
        onChangeText={text => setPhone(text)}
        defaultValue={phone}
        keyboardType="numeric"
      />
      <S.Input 
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
      />
      <S.ButtonTerms onPress={checkUncheck}>
        <S.CheckBox check={check}/>
        <S.ButtonText color="#fffffff">Aceito os termos e condições</S.ButtonText>
      </S.ButtonTerms>
      <S.Button onPress={submit}>
        <S.ButtonText>Cadastrar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}