import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

// Importando as telas
import LoginForm from './pages/Login/LoginForm';
import SignUpForm from './pages/SignUp/SignUpForm';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/Home/Home';
import Config from './pages/Config/Config';
import EditProfile from './pages/EditProfile/Edit';
import Favorites from './pages/Favorites/Favorites';
import Restaurant from './pages/Establishments/Restaurants/Restaurant';
import Parking from './pages/Establishments/Parking/Parking';

const Stack = createNativeStackNavigator();

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginForm');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image
        style={styles.image}
        source={require('./assets/Loading.gif')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar translucent backgroundColor="transparent" />
      </View>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen name="LoginForm" component={LoginForm} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpForm} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Config" component={Config} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
        <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
        <Stack.Screen name="Parking" component={Parking} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF1E0',
  },
  image: {
    width: '90%',
    height: '90%',
  },
});