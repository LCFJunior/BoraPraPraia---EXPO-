import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from './pages/Login/LoginForm';
import SignUpForm from './pages/SignUp/SignUpForm';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/Home/Home';
import Config from './pages/Config/Config';
import EditProfile from './pages/EditProfile/Edit';
import Favorites from './pages/Favorites/Favorites';
import { StatusBar, View } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar translucent backgroundColor="transparent" />
      </View>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="LoginForm" component={LoginForm} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpForm} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Config" component={Config} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
)}



