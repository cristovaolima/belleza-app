import React, { useState } from 'react';
import { FlatList } from 'react-native';
import * as S from '../../styles';
import CardService from './../../components/CardService';

const MyCard = ({item}) => {
  return (
    <S.Card>
      <S.ImgCard source={item}/>
    </S.Card>
  );
};

export default function Home() {
  const [search, setSearch] = useState('Avenida Miguel, 600')
  const [cardItems] = useState([
    require('../../assets/cashback-01.jpg'),
    require('../../assets/cashback-02.jpg'),
    require('../../assets/cashback-01.jpg')
  ]);
  const [services] = useState([
    {
      unhas: [
        {name: "Unha 1", price: 12.99, img: require('../../assets/servico-01.jpg')},
        {name: "Unha 2", price: 15.99, img: require('../../assets/servico-02.jpg')},
        {name: "Unha 3", price: 10.00, img: require('../../assets/servico-01.jpg')},
        {name: "Unha 4", price: 19.99, img: require('../../assets/servico-02.jpg')}
      ]},
    {
      cabelo: [
      {name: "Cabelo 1", price: 12.99, img: require('../../assets/servico-03.jpg')},
      {name: "Cabelo 2", price: 15.99, img: require('../../assets/servico-04.jpg')},
      {name: "Cabelo 3", price: 10.00, img: require('../../assets/servico-03.jpg')},
      {name: "Cabelo 4", price: 19.99, img: require('../../assets/servico-04.jpg')}
      ]}
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
        <S.TextCategory>Unhas</S.TextCategory>
        <S.ContainerCardList>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={services[0].unhas}
            renderItem={({item}) => <CardService item={item}/>}
          />
        </S.ContainerCardList>
        <S.TextCategory>Cabelos</S.TextCategory>
        <S.ContainerCardList>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={services[1].cabelo}
            renderItem={({item}) => <CardService item={item}/>}
          />
        </S.ContainerCardList>
      </S.ContainerList>
    </S.ContainerHome>
  );
}