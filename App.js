import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './Screen/Principal';
import Login from './Screen/Login';
import Cadastro from './Screen/Cadastro';

  const Stack = createNativeStackNavigator();

  function MyStack() {
    return (
      
        <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />

      </Stack.Navigator>


    
  );
}

export default function App(){

  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>


);
 }

    
  


    
  
  


