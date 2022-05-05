import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './style';
import { useNavigation } from '@react-navigation/native';

export default function HeaderNav({title}) {
    const navigation = useNavigation();
    return (
       <S.Header>
           <S.ButtonBack onPress={navigation.goBack}>
               <Icon name="angle-left" size={40} />
           </S.ButtonBack>        
           <S.TextHeader>{title}</S.TextHeader>
           <S.ButtonBack ></S.ButtonBack>
       </S.Header>
    );
}