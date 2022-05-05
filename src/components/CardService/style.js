import styled from "styled-components";

export const Container = styled.View`
    flex-direction: column;
    height: 250px;
    width: 200px;
    border-radius: 30px;
    margin: 10px 10px 0px 30px;
    padding-bottom: 10px;
    background-color: white;
    /* align-items: center; */
    /* justify-content: flex-end; */
`;

export const ContainerInfo = styled.View`
    flex-direction: column;
    height: 50%;
    width: 100%;
    padding-left: 20px;
    background-color: red;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    background-color: ${props => props.color ? props.color : '#95b8c4'};
    border-radius: 50px;
    padding: 15px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.font ? props.font : 'normal'};
`;

export const TextName = styled.Text`
    font-size: 18px
    font-weight: bold;
    align-items: space-between;
`;

export const TextPrice = styled.Text`
    font-size: 18px
    font-weight: ${props => props.font ? props.font : 'normal'};
    color: ${props => props.color ? props.color : 'black'};
    align-items: flex-start;
`;