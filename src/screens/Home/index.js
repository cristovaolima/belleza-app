import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import * as S from '../../styles';
import TabMenu from './../../components/TabMenu';
import CardService from './../../components/CardService';

const MyCard = ({item}) => {
  return (
    <S.Card img={item}/>
  );
};

export default function Home() {
  const [search, setSearch] = useState('Avenida Miguel, 600')
  const [cardItems] = useState([
    'https://vancecontabil.com.br/wp-content/uploads/2021/02/cashback-1024x1024.jpg',
    'https://vancecontabil.com.br/wp-content/uploads/2021/02/cashback-1024x1024.jpg']);
  const [services, setServices] = useState([
    {name: "name 1", price: 12.99},
    {name: "name 1", price: 12.99},
    {name: "name 1", price: 12.99}
  ]);

  return (
    <S.ContainerHome color="#95b8c4">
      <S.TextHello>Olá, José</S.TextHello>
      <S.Text>Onde será seu atendimento hoje?</S.Text>
      <S.InputAdress
        placeholder="Pesquisar"
        onChangeText={text => setSearch(text)}
        defaultValue={search}
      />
      <S.ContainerList>
        <S.ContainerCard>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={cardItems}
            renderItem={({item}) => <MyCard item={item}/>}
          />
        </S.ContainerCard>
        <S.TextCategory>Unha</S.TextCategory>
        <S.ContainerCardList>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={services}
            renderItem={({item}) => <CardService item={item}/>}
          />
        </S.ContainerCardList>
        <S.TextCategory>Cabelo</S.TextCategory>
        <S.ContainerCardList>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={services}
            renderItem={({item}) => <CardService item={item}/>}
          />
        </S.ContainerCardList>
      </S.ContainerList>
      {/* <TabMenu/> */}
    </S.ContainerHome>
  );
}