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
  scrollContainer: {
    alignItems: 'center',
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
    },
    commentBox: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        height: '10%',
        width: '90%'
    },
    commentText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#333',
        marginVertical: 10,
        textAlign: 'center',
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    commentTime: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    textComments: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        marginTop: 30
    },
    starsContainerComments: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        marginTop: 20
    },
    textStar: {
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        marginTop: 10,
        color: '#666666'
    },
    textStarExperience: {
        alignSelf: 'flex-start',
        paddingLeft: '10%',
        fontSize: 20,
        marginTop: 30,
        color: '#666666'
    },
    submitReviewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#41A6B4',
        padding: 10,
        width: '40%',
        height: '3.2%',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: '5%'
    },
    submitReviewText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    submitReviewIcon: {
        marginLeft: 5,
    },
});

export default styles;
