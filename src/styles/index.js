import styled from "styled-components";

export const Background = styled.View`
    flex: 1;
    background-color: ${props => props.color ? props.color : 'white'};
    justify-content: center;
    align-items: center;
`;

export const Container = styled.View`
    /* flex: 1; */
    flex-direction: column;
    align-items: center;
`;

export const ContainerInput = styled.View`
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 40%;
    height: 12%;
    margin-bottom: 20px;
`;

export const ImgWelcome = styled.Image`
    width: 65%;
    height: 35%;
    margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    background-color: ${props => props.color ? props.color : '#95b8c4'};
    border-radius: 50px;
    margin-top: 10px;
    padding: 25px;
    align-items: center;
    justify-content: center;
`;

export const ButtonOutline = styled.TouchableOpacity`
    width: 80%;
    margin-top: 10px;
    padding: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonRegister = styled.TouchableOpacity`
    flex-direction: row;
    width: 80%;
    margin-top: 70px;
    padding: 25px;
    align-items: center;
    justify-content: center;
    background-color: #dddfe4;
    border-radius: 50px;
`;

export const ButtonTerms = styled.TouchableOpacity`
    flex-direction: row;
    width: 80%;
    margin-bottom: 30px;
    align-items: center;
    justify-content: flex-start;
`;

export const CheckBox = styled.View`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 20px;
    border: 2px solid #c1c5cd;
    background-color: ${props => props.check ? '#5e6675' : 'white'};
    padding: 0;
`;

export const ButtonText = styled.Text`
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.font ? props.font : 'center'};
`;

export const TextLabel = styled.Text`
    color: #8fb3ff;
`;

export const TextTitle = styled.Text`
    font-size: 25px;
    width: 80%;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
`;

export const TextDescription = styled.Text`
    color: #c1c5cd;
    width: 70%;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;
`;

export const Header = styled.View`
    flex-direction: row;
    height: 130px;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
`;

export const TextHeader = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    width: 80%;    
    border-radius: 20px;
    border: 1px solid #c1c5cd;
    font-size: 17px;
    margin-bottom: 20px;
    padding: 20px 20px;

`;