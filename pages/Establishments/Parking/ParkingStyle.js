import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    backButton : {
        position: 'absolute',
        top: 47,
        left: 15,
        zIndex: 1,
        height : 45,
        width : 45,
    },
    backButtonImage : {
        width: 35,
        height: 35,
    },
});

export default styles;