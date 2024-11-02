import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    
    gradient: {
        flex: 1,
      },
    container : {
      alignItems : "center",
      justifyContent : 'center',
      flex: 1,
      paddingHorizontal: 25
    },
    image : {
      height : '20%',
      width : '60%',
      marginBottom : 50
    },
    title : {
      fontSize : 40,
      fontWeight : "bold",
      textTransform : "uppercase",
      textAlign: "center",
      paddingVertical : 40,
      color : "#FFA825",
      marginBottom : 30
    },
    inputError: {
      borderColor: 'red',
    },    
    inputView : {
      gap : 15,
      width : "100%",
      paddingHorizontal : 40,
      marginBottom  : 0,
      alignItems : "center",
    },
    input : {
      height : 50,
      width: '93%',
      paddingHorizontal : 20,
      borderColor : "#FFA825",
      borderWidth : 1,
      borderRadius: 7,
      backgroundColor : 'white'
    },
    rememberView : {
      width : "100%",
      paddingHorizontal : 50,
      justifyContent: "space-between",
      alignItems : "center",
      flexDirection : "row",
      marginBottom : 8
    },
    switch :{
      flexDirection : "row",
      gap : 1,
      justifyContent : "center",
      alignItems : "center",
      marginTop: 10
      
    },
    rememberText : {
      fontSize: 13,
      marginTop: -1,
      color: "grey"
    },
    forgetText : {
      fontSize : 11,
      color : "#FFA825",
      marginTop: 10
    },
    button : {
      backgroundColor : "#FFA825",
      height : 45,
      width : '97%',
      borderColor : "white",
      borderWidth  : 1,
      borderRadius : 5,
      alignItems : "center",
      justifyContent : "center",
      marginTop: 20,
      marginBottom: 30
    },
    buttonText : {
      color : "white"  ,
      fontSize: 18,
      fontWeight : "bold"
    }, 
    buttonView :{
      width :"100%",
      paddingHorizontal : 50,
      alignItems : "center",
    },
    optionsText : {
      textAlign : "center",
      paddingVertical : 10,
      color : "gray",
      fontSize : 13,
      marginBottom : 30,
      marginTop: 7
    },
    mediaIcons : {
      flexDirection : "row",
      gap : 15,
      alignItems: "center",
      justifyContent : "center",
      marginBottom : 23
    },
    icons : {
      width : 50,
      height: 50,
    },
    footerText : {
      textAlign: "center",
      color : "gray",
      marginTop: -10
    },
    signup : {
      color : "#FFA825",
      fontSize : 13
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      },
      iconContainer: {
        padding: '21%',
        position: 'absolute',
        right: -10
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF1E0',
      },
      loadingImage: {
        width: '80%',
        height: '50%',
      },
      successText: {
        fontSize: 18,
        color: '#32CD32', // Verde para indicar sucesso
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
      },
  })

export default styles;