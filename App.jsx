import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import CadastroPet from './src/screen/CadastroPet';
import Confirm from './src/components/Confirm';
import Vacina from './src/screen/Vacina';
import HomePage from  './src/screen/Home'
import ConfirmVacina from './src/components/VacinaConfirm';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={SignUpScreen} />
        <Stack.Screen name="CADASTROPET" component={CadastroPet} />
        <Stack.Screen name="VACINA" component={Vacina} />
        <Stack.Screen name="CONFIRM" component={Confirm} />
        <Stack.Screen name="HOMEPAGE" component={HomePage} />
        <Stack.Screen name="CONFIRMVACINA" component={ConfirmVacina} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})