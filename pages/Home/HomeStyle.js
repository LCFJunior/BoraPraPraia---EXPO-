import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    height: 75,
    width: width * 0.2,
    left: width * 0.4,
    borderRadius: 30,
    backgroundColor: "#FFA825",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  shapesContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    bottom: 18,
    left: 18,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#fff1e0'
  },
  square: {
    position: 'absolute',
    bottom: 18,
    right:18,
    width: 15,
    height: 15,
    backgroundColor: '#fff1e0'
  },
  triangle: {
    position: 'absolute',
    top: 15,
    left: '50%',
    marginLeft: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white'
  },
  centerButton: {
    position: 'absolute',
    top: 20,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#FFA825',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    opacity: 1
  },
  centerIcon: {
    width: 30,
    height: 30,
  },
  config: {
    backgroundColor : "#FFA825",
      position: 'absolute',
      bottom: 300,
      height : 45,
      width : 50,
      borderColor : "white",
      borderWidth  : 1,
      borderRadius : 5,
      alignItems : "center",
      justifyContent : "center",
      left: 5
    },
    containerMenu: {
      alignItems: 'center',
      position: 'absolute'
    },
    button: {
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      justifyContent: 'center',
      shadowRadius: 10,
      shadowColor: '#00213B',
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 10,
      }
    },
    menu: {
      backgroundColor: "#00213B"
    },
    submenu: {
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
      backgroundColor: '#00213B'
    },
    containerFAB: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 90,
      left: 60
  },
  buttonFAB: {
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      justifyContent: 'center',
      shadowRadius: 10,
      shadowColor: '#00213B',
      shadowOpacity: 0.3,
      shadowOffset: {
          height: 10,
      },
  },
  menuFAB: {
      backgroundColor: "#FFA825"
  },
  submenuFAB: {
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
      backgroundColor: '#FFA825'
  },
  iconTextFAB: {
      textAlign: 'center'
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
  favorite : {
    position: 'absolute',
    top: 47,
    right: 15,
    zIndex: 1,
    height : 45,
    width : 45,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top: 35
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
