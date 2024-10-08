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
import styles from './ForgotPasswordStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';

const Stack = createNativeStackNavigator(); 

export default function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const backButton = require('../../assets/back-button.png');
    const handlePasswordReset = () => {
        Alert(`Código de redefinição enviado para ${email}`);
    };
    
    return (
    <LinearGradient
    colors={['#ffd39e','#ffdeb7', '#fffefc']}
    style={styles.gradient}
    >
    <SafeAreaView style={styles.container}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={backButton} style={styles.backButtonImage} />
        </Pressable>
            <Text style={styles.title}>Redefinir Senha</Text>
        <TextInput
            style={styles.input}
            placeholder='Digite seu e-mail'
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
        />
        <Pressable style={styles.button} onPress={() => Alert.alert("Código enviado!")}>
            <Text style={styles.buttonText}>ENVIAR CÓDIGO</Text>
        </Pressable>
    </SafeAreaView>
    </LinearGradient>
  );
}