import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Pressable,
    Image
} from 'react-native';
import styles from './ParkingStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';

const Stack = createNativeStackNavigator(); 

export default function Parking() {
    const navigation = useNavigation();
    const backButton = require('../../../assets/back-button.png');

    return (
        <LinearGradient
        colors={['#6476ff','#cbd1ff', '#f2f4ff']}
        style={styles.gradient}
        >
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={backButton} style={styles.backButtonImage} />
            </Pressable>
        </SafeAreaView>
    </LinearGradient>
  );
}