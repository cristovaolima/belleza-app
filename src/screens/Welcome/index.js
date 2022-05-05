import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from '../../styles';

export default function Welcome() {
    const navigation = useNavigation();

    function goLogin() {
        navigation.navigate('Login');
    }

    function goRegister() {
        navigation.navigate('Register');
    }

    return (
        <S.Background>
            <S.Logo source={require('../../../src/assets/logo.png')}/>
            <S.ImgWelcome source={require('../../../src/assets/img-welcome.png')}/>
            <S.TextTitle>Inspiração que aproxima</S.TextTitle>
            <S.TextDescription>
                lorem ipsum dolor sit amet, con lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum dolor
            </S.TextDescription>
            <S.Button onPress={goLogin}>
                <S.ButtonText>Entrar</S.ButtonText>
            </S.Button>
            <S.ButtonOutline onPress={goRegister}>
                <S.ButtonText color="#c96a4b">Fazer Cadastro</S.ButtonText>
            </S.ButtonOutline>
        </S.Background>
    );
}