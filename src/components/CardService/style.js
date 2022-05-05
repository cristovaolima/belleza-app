import styled from "styled-components";

export const Container = styled.View`
    flex-direction: column;
    height: 270px;
    width: 200px;
    border-radius: 30px;
    margin: 10px 10px 0px 30px;
    padding-bottom: 10px;
    background-color: white;
    align-items: center;
    justify-content: flex-end;
`;

export const ContainerInfo = styled.View`
    flex-direction: column;
    height: 45%;
    width: 100%;
    padding: 10px 0px 0px 20px;
    align-items: center;
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
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

export const TextPrice = styled.Text`
    font-size: ${props => props.fontsize ? props.fontsize : '18px'};
    font-weight: ${props => props.font ? props.font : 'normal'};
    color: ${props => props.color ? props.color : '#000'};
    align-items: flex-start;
    margin-top: ${props => props.margin ? props.margin : '0px'};
`;

export const Img = styled.Image`
    width: 100%;
    height: 40%;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px; 
`;