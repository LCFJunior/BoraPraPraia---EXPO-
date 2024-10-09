import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Pressable,
    Image,
    StatusBar,
    ImageBackground,
    Text,
    View
} from 'react-native';
import styles from './ParkingStyle';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFOUNDATION from "react-native-vector-icons/Foundation"

export default function Parking() {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0); // Estado para a nota
    const backButton = require('../../../assets/back-button.png');
    const headerBackground = require('../../../assets/estacionamento.webp');

    return (
        <LinearGradient
            colors={['#6476ff', '#cbd1ff', '#f2f4ff']}
            style={styles.gradient}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <ImageBackground 
                        source={headerBackground} 
                        style={styles.header}
                        resizeMode="cover" 
                        imageStyle={styles.headerImage}
                    >
                        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
                        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Image source={backButton} style={styles.backButtonImage} />
                        </Pressable>
                    </ImageBackground>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>LAGOA PARK ESTACIONAMENTO</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingNumber}>{rating}</Text>
                        <View style={styles.starsContainer}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Pressable 
                                    key={index}
                                    onPress={() => setRating(index + 1)}
                                >
                                    <Icon
                                        name={index < rating ? 'star' : 'star-o'}
                                        size={35}
                                        marginRight={5}
                                        color="#FFD700"
                                    />
                                </Pressable>
                            ))}
                        </View>
                        {/* Adicione os ícones adicionais */}
                        <View style={styles.additionalIconsContainer}>
                            <View style={styles.iconWithLabel}>
                                <Icon name="comment" size={35} color="white" />
                                <Text style={styles.iconLabel}>Comentário</Text>
                            </View>
                            <View style={styles.iconWithLabel}>
                                <IconFOUNDATION name="telephone" size={35} color="white" />
                                <Text style={styles.iconLabel}>Telefone</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.estacionamentoTEXT}>Estacionamento de Praia</Text>
                    <Text style={styles.estacionamentoENDERECO}>R. Sen. Ivo D Aquino, 75 </Text>
                    <Text style={styles.estacionamentoHORARIO}>08:00 – 21:00</Text>
                    <Text style={styles.estacionamentoTELEFONE}>(48) 99613-6060</Text>
                </View>
                <Pressable>
                        <Text style={styles.Comments}>Ver comentários e avaliações</Text>
                    </Pressable>
            </SafeAreaView>
        </LinearGradient>
    );
}