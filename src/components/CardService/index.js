import React from 'react';
import { View } from 'react-native';

import * as S from './style';

export default function CardService({item}) {
    const urlImg = '../../../src/assets/servico-01';
    return (
        <S.Container>
            <S.Img source={item.img}/>
            <S.ContainerInfo>
                <S.TextName>{item.name}</S.TextName>
                <S.TextPrice fontsize={'15px'} margin={'10px'}>A partir de</S.TextPrice>
                <S.TextPrice font="bold" margin={'-5px'} color="#c96a4b">R$ {item.price}</S.TextPrice> 
            </S.ContainerInfo>
            <S.Button>                
                    <S.ButtonText>Conhecer</S.ButtonText>
                </S.Button>
        </S.Container>
    );
}