import React from 'react';
import { View, Text } from 'react-native';
import * as S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TabMenu() {
    return (
        <S.Menu>
            <S.Container>
                <S.TextTab>Principal</S.TextTab>
                {/* <S.IconMenu name="home" size={30} /> */}
                <S.IconMenu name="home" size={30} />
                <S.IconMenu name="home" size={30} />
                <S.IconMenu name="home" size={30} />
                {/* <S.TextTab>Principal</S.TextTab>
                <S.TextTab>Busca</S.TextTab>
                <S.TextTab>Agenda</S.TextTab>
                <S.TextTab>Configurações</S.TextTab> */}
            </S.Container>
        </S.Menu>
        
    );
}