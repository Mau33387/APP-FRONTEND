
import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button, Input, Text, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const Cadastrar = () => {


    navigation.navigate("Cadastro")
  }
  
 

  return (


  <View style={[styles.container, specificStyle.specificContainer]}>


<Text h3>JAMPA TEC</Text>

<Input
            placeholder="E-mail"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            />
          <Input
            placeholder="Sua senha"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
            />
                        <Button
              icon={
                <Icon
                
                  name="check"
                  size={15}
                  color="white"
                />
              }
              title="Entrar"
              buttonStyle={specificStyle.button}
              onPress={() => entrar()}
            />
          

          <Button
            icon={
              <Icon
                name="user"
                size={15}
                color="white"
              />
            }
            title=" Cadastrar"
            buttonStyle={specificStyle.button}
            onPress={() => Cadastrar()}
          />
              
              
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    padding: 19,
    alignItems: 'center',
      justifyContent: 'center'
      

  },
  title
  : {
    width:"90%",
    paddingTop: 10,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
},

button: {

  backgroundColor:"#00FFFF",
  width:350,
  height:40,
  padding:19,
  paddingTop: 5,
  paddingVertical: 12,
  borderRadius: 4,
  elevation: 3,
  justifyContent:'center',
  flexDirection:"row"
  

},

}) 
  