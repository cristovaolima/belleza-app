import styled from "styled-components";

export const Background = styled.View`
    flex: 1;
    background-color: ${props => props.color ? props.color : 'white'};
    justify-content: center;
    align-items: center;
`;

export const Container = styled.View`
    height: 100%;
    weight: 100%;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.color ? props.color : 'white'};
`;

export const ContainerHome = styled.ScrollView`
    flex: 1;
    /* flex-direction: column; */
    /* align-items: center; */
    background-color: ${props => props.color ? props.color : 'white'};
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
    font-weight: ${props => props.font ? props.font : 'normal'};
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

export const Input = styled.TextInput`
    width: 80%;    
    border-radius: 20px;
    border: 1px solid #c1c5cd;
    font-size: 17px;
    margin-bottom: 20px;
    padding: 20px 20px;

`;

export const InputAdress = styled.TextInput`
    width: 85%;    
    border-radius: 10px;
    border: 1px solid #c1c5cd;
    font-size: 17px;
    margin: 25px 0px 0px 30px;
    padding: 15px 20px;
    color: white;
`;

export const TextHello = styled.Text`
    font-size: 30px;
    color: white;
    margin-top: 40px;
    margin-left: 30px;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size: 15px;
    color: white;
    margin-top: 5px;
    margin-left: 30px;
`;

export const ContainerList = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 150px;
    padding-bottom: 30px;
    background-color: #f0f1f3;
`;

export const TextCategory = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0px 20px 30px;
`;

export const ContainerCard = styled.View`
    width: 100%;
    height: 200px;
    margin-top: -100px;
`;

export const ContainerCardList = styled.View`
    width: 100%;
    height: 300px;
    /* margin-top: -100px; */
`;

export const Card = styled.View`
    width: 280px;
    height: 180px;
    background-color: white;
    margin-right: 15px;
    margin-left: 25px;
    border-radius: 30px;
    /* background-color: #c1c5cd; */
    /* background-size: contain; */
    background-image: url(${props => props.img});
`;


