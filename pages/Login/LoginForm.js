import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from './LoginFormStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require("../../assets/NewLogo.gif");
const facebook = require("../../assets/facebook.png");
const google = require("../../assets/google.png");
const x = require("../../assets/x.png");
const loadingGif = require("../../assets/Loading.gif");

export default function LoginForm() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [buttonText, setButtonText] = useState("LOGIN");
  const [loadingText, setLoadingText] = useState('Carregando');
  const [loginSuccess, setLoginSuccess] = useState(false); // Novo estado para sucesso no login

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, preencha todos os campos!');
      return;
    }

    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };

    const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 2000));

    Promise.all([
      axios.post('https://bppbackend.onrender.com/LoginForm', userData),
      minimumLoadingTime
    ])
      .then(([res]) => {
        if (res.data.status === 'ok') {
          AsyncStorage.setItem('token', res.data.data);
          AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
          if (res.data.userType) {
            AsyncStorage.setItem('userType', res.data.userType);
          } else {
            AsyncStorage.removeItem('userType');
          }
          setLoginSuccess(true); // Define que o login foi bem-sucedido
        } else {
          Alert.alert('Login Failed', 'Email ou senha inválidos!');
          setPassword('');
          setLoginError(true);
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Ocorreu um erro,', 'por favor, tente novamente mais tarde!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let interval;
    if (isFocused && !loading) {
      setButtonText('LOGIN');
    }
    if (loading) {
      interval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev === 'Carregando...') {
            return 'Carregando';
          } else {
            return prev + '.';
          }
        });
      }, 500);
    } else {
      setLoadingText('Carregando');
    }

    // Timer para redirecionar após login bem-sucedido
    if (loginSuccess) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [loading, loginSuccess, isFocused]);

  const handleRememberMeToggle = () => {
    setRememberMe(previousState => !previousState);
  };

  // Retorno condicional para a tela de loading
  if (loading || loginSuccess) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={loadingGif} style={styles.loadingImage} />
        {loginSuccess && <Text style={styles.successText}>Login efetuado!</Text>}
      </View>
    );
  }


  return (
    <LinearGradient
    colors={['#ffd39e','#ffdeb7', '#fffefc']}
    style={styles.gradient}
    >
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>BEM VINDO(a)!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='EMAIL'
          value={email}
          onChange={e => setEmail(e.nativeEvent.text)}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
            style={[styles.input, loginError && styles.inputError]}
            placeholder='SENHA'
            secureTextEntry={isPasswordVisible}
            value={password}
            onChangeText={(text) => { setPassword(text); setLoginError(false); }}
            autoCorrect={false}
            autoCapitalize='none'
          />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
                  <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#FFA825" paddingRight/>
            </TouchableOpacity>
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
          value={rememberMe}
          onValueChange={handleRememberMeToggle}
          thumbColor={handleRememberMeToggle ? '#FFA825' : '#dcdcdc'}
          trackColor={{ false: '#dcdcdc', true: '#FFA825' }}
          style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}/>
          <Text style={styles.rememberText}>Lembrar de Mim</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgetText}>Esqueceu a senha?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonView}>
  <Pressable style={styles.button} onPress={handleSubmit} disabled={loading}>
    <Text style={styles.buttonText}>
      {loading ? loadingText : buttonText} 
    </Text>
  </Pressable>
  <Text style={styles.optionsText}>--------------------   OU   --------------------</Text>
</View>
      <View style={styles.mediaIcons}>
        <Pressable onPress={() => Alert.alert("Login com Facebook")}>
          <Image source={facebook} style={styles.icons} />
        </Pressable>
        <Pressable onPress={() => Alert.alert("Login com X")}>
          <Image source={x} style={styles.icons} />
        </Pressable>
        <Pressable onPress={() => Alert.alert("Login com Google")}>
          <Image source={google} style={styles.icons} />
        </Pressable>
      </View>
      <Text style={styles.footerText}>
        Não Possui conta?
        <Text style={styles.signup} onPress={() => navigation.navigate('SignUp')}> Cadastrar</Text>
      </Text>
    </SafeAreaView>
    </LinearGradient>
  );
}
