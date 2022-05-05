import styled from "styled-components";

import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    width: 80%;
    justify-content: space-around;
    align-items: center;
`;

export const Menu = styled.View`
    flex: 1;
    /* flex-direction: row; */
    width: 100%;
    height: 100px;
    position: absolute;
    background-color: white;
    align-items: center;
    justify-content: flex-end;
    z-index: 99;
    /* padding: 30px; */
    /* margin: 50px 10px; */
`;

export const TextTab = styled.Text`
    font-size: 18px;
    color: #95b8c4;
    font-weight: bold;
    margin: 0px 50px;
`;

export const IconMenu = styled(Icon)`
    margin: 0px 50px;
`