import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/mainStyle';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected]= useState(false)
  const[errorEmail, setErrorEmail]= useState (null)
  const[errorNome, setErrorNome]= useState (null)
  const[errorCpf, setErrorCpf]= useState (null)
  const[errorTelefone, setErrorTelefone]= useState (null)

const Validar = () =>{
let error= false
if(email== null){
  setErrorEmail("Preecha o seu e-mail corretamente")
  error =true


}

}

  const Salvar = () =>{

if (Validar()){
    console.log("Salvou")
}
  }
  
  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        errorMessage={errorEmail}
        />

<Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
        errorMessage={errorNome}
        />

<Input
        placeholder="CPF"
        onChangeText={value => setCpf(value)}
        keyboardType="number-pad"
        returnKeyType="done"
        errorMessage={errorCpf}
        />
              <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
        errorMessage={errorTelefone}
        />
        <CheckBox
        title="Eu aceito os termos de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}


/>
     
      <Button

        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => Salvar()}
      />




    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  

  },
  button: {
    width:"100%",
    marginTop: 10
  }
}) 
