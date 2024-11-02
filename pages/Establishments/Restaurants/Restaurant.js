import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Pressable,
    Image,
    StatusBar,
    ImageBackground,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './RestaurantStyle';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFOUNDATION from "react-native-vector-icons/Foundation";

export default function Restaurant() {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0); // Estado para a nota
    const [paddingBottom, setPaddingBottom] = useState('0%'); // Estado para controlar o paddingBottom
    const [showComments, setShowComments] = useState(false); // Estado para controlar a visibilidade dos comentários
    const backButton = require('../../../assets/back-button.png');
    const headerBackground = require('../../../assets/estacionamento.webp');

    const handleShowComments = () => {
        setPaddingBottom(paddingBottom === '0%' ? '60%' : '0%');
        setShowComments(!showComments); // Alterna entre mostrar e esconder os comentários
    };

    return (
        <LinearGradient
            colors={['#6476ff', '#cbd1ff', '#f2f4ff']}
            style={styles.gradient}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom }]}>
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
                    <Pressable onPress={handleShowComments}>
                        <Text style={styles.Comments}>Ver comentários e avaliações</Text>
                    </Pressable>

                    {/* Renderiza a seção de comentários se showComments for true */}
                    {showComments && (
    <>
        <View style={styles.commentBox}>
            <View style={styles.starsContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                        key={index}
                        name={index < 4 ? 'star' : 'star-o'} // Exemplo de 4 estrelas
                        size={25}
                        marginRight={5}
                        color="#FFD700"
                    />
                ))}
            </View>
            <Text style={styles.commentText}>
                "Ótimo estacionamento, muito próximo à praia e com excelente atendimento!"
            </Text>
            <Text style={styles.userName}>Usuário: João Silva</Text>
            <Text style={styles.commentTime}>Comentado há 2 horas</Text>
        </View>

        <View style={styles.commentBox}>
            <View style={styles.starsContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                        key={index}
                        name={index < 5 ? 'star' : 'star-o'} // Exemplo de 5 estrelas
                        size={25}
                        marginRight={5}
                        color="#FFD700"
                    />
                ))}
            </View>
            <Text style={styles.commentText}>
                "Excelente localização e preços acessíveis. Recomendo!"
            </Text>
            <Text style={styles.userName}>Usuário: Maria Costa</Text>
            <Text style={styles.commentTime}>Comentado há 4 horas</Text>
        </View>

        <View style={styles.commentBox}>
            <View style={styles.starsContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                        key={index}
                        name={index < 3 ? 'star' : 'star-o'} // Exemplo de 3 estrelas
                        size={25}
                        marginRight={5}
                        color="#FFD700"
                    />
                ))}
            </View>
            <Text style={styles.commentText}>
                "Bom, mas poderia ter mais vagas disponíveis em horários de pico."
            </Text>
            <Text style={styles.userName}>Usuário: Pedro Martins</Text>
            <Text style={styles.commentTime}>Comentado há 6 horas</Text>
        </View>

        <View style={styles.commentBox}>
            <View style={styles.starsContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                        key={index}
                        name={index < 2 ? 'star' : 'star-o'} // Exemplo de 2 estrelas
                        size={25}
                        marginRight={5}
                        color="#FFD700"
                    />
                ))}
            </View>
                <Text style={styles.commentText}>
                    "Achei caro para o que oferece, mas é o mais próximo da praia."
                </Text>
                <Text style={styles.userName}>Usuário: Ana Paula</Text>
                <Text style={styles.commentTime}>Comentado há 8 horas</Text>
                </View>
                <Text style={styles.textComments}>Adicione seu comentário!</Text>
                <View style={styles.starsContainerComments}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => setRating(index + 1)}
                                    >
                                        <Icon
                                            name={index < rating ? 'star' : 'star-o'}
                                            size={80}
                                            marginRight={5}
                                            color="#41A6B4"
                                        />
                                    </Pressable>
                                ))}
                            </View>
                            <Text style={styles.textStar}>Adicione uma avaliação</Text>
                            <Text style={styles.textStarExperience}>compartilhe sua experiência...</Text>
                            <TouchableOpacity style={styles.submitReviewButton} onPress={() => console.log('Review enviado')}>
                                <Text style={styles.submitReviewText}>Enviar review</Text>
                                <Icon name="arrow-right" size={20} color="#fff" style={styles.submitReviewIcon} />
                            </TouchableOpacity>
                </>
                    )}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
