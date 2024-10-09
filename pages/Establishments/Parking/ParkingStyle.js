import { StyleSheet } from "react-native";

const HEADER_HEIGHT = 380; // Altura do cabeçalho em pixels, ajuste conforme necessário

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    headerContainer: {
        width: '100%',
        height: HEADER_HEIGHT,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 25,
        height: 45,
        width: 45,
        zIndex: 1,
    },
    backButtonImage: {
        width: 35,
        height: 35,
    },
    header: {
        height: HEADER_HEIGHT,
        width: '101.95%',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
    },
    headerImage: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
    textContainer: {
        marginTop: 25,
        paddingHorizontal: 25,
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
    ratingNumber: {
        fontSize: 35,
        color: "black",
        marginRight: 10,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    additionalIconsContainer: {
        marginLeft: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWithLabel: {
        alignItems: 'center',
        marginHorizontal: 25,
    },
    iconLabel: {
        fontSize: 12,
        color: 'black',
        marginTop: 5, // Espaço entre o ícone e a palavra
    },
    estacionamentoTEXT: {
        marginTop: 25,
        fontSize: 25,
        color: 'black',
    },
    estacionamentoENDERECO: {
        marginTop: 60,
        fontSize: 25,
        color: 'black',
    },
    estacionamentoHORARIO: {
        marginTop: 10,
        fontSize: 25,
        color: 'black',
    },
    estacionamentoTELEFONE: {
        marginTop: 10,
        fontSize: 25,
        color: 'black',
    },
    Comments: {
        alignSelf: 'center',
        marginTop: 150,
        fontSize: 35,
        color: 'blue',
    }
});

export default styles;
