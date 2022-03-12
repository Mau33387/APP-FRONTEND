import React, { useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Button, Input, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)


  
 const Salvar= () =>{

  console.log("Salvou")
 }

  return (


  <View style={[styles.container, specificStyle.specificContainer]}>


<Text h3> Cadastre-se</Text>


       
<Input
            placeholder="E-mail"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            />

<Input
            placeholder="Nome"
            onChangeText={value => setNome(value)}
          
            />

<Input
            placeholder="CPF"
            onChangeText={value => setCpf(value)}
            keyboardType="number-pad"
            returnKeyType='done'

            />

<Input
            placeholder="Telefone"
            onChangeText={value => setTelefone(value)}
            keyboardType="phone-pad"
            returnKeyType='done'
            />

<Button
        icon={
          <Icon
            name="user"
            size={15}
            color="white"
          />
        }
        title=" Salvar"
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
    marginTop: 10,
      

  }
}) 
  