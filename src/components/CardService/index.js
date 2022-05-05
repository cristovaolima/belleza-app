import React from 'react';
import { View } from 'react-native';

import * as S from './style';

export default function CardService({item}) {
    return (
        <S.Container>
            <S.ContainerInfo>
                <S.TextName>{item.name}</S.TextName>
                <S.TextPrice>A partir de</S.TextPrice>
                <S.TextPrice font="bold" color="#c96a4b">R$ {item.price}</S.TextPrice>
                <S.Button>                
                    <S.ButtonText>Conhecer</S.ButtonText>
                </S.Button> 
            </S.ContainerInfo>
        </S.Container>
    );
}