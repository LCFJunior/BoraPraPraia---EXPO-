import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Text,
    TextInput,
    Pressable,
    Alert,
    Image
} from 'react-native';
import styles from './FavoritesStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';

const Stack = createNativeStackNavigator(); 

export default function Favorites() {
    const navigation = useNavigation();
    const backButton = require('../../assets/back-button.png');

    return (
        <LinearGradient
        colors={['#ffd39e','#ffdeb7', '#fffefc']}
        style={styles.gradient}
        >
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    </LinearGradient>
  );
}