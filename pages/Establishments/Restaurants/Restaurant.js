import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Pressable,
    Image
} from 'react-native';
import styles from './RestaurantStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';

const Stack = createNativeStackNavigator(); 

export default function Restaurant() {
    const navigation = useNavigation();
    const backButton = require('../../../assets/back-button.png');

    return (
        <LinearGradient
        colors={['#fdff8b','#feffcb', '#fffff2']}
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