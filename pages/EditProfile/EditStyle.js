import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    padding: 10,
    top: 5,
    position: 'absolute',
    right: 5
  },
  scrollView : {
    flex : 1
  },
  inputView: {
    marginBottom: 16,
  },
  input : {
    height : 50,
    width: 350,
    paddingHorizontal : 20,
    borderColor : "#FFA825",
    borderWidth : 1,
    borderRadius: 7,
    backgroundColor : 'white',
    justifyContent: 'center',
    marginTop : 3,
  },
  inputLabel: {
    fontSize: 16,
    color: "#FFA825",
    marginBottom: 0,
    marginTop: 0,
  },
  image : {
    height : 280,
    width : 280
  },
  defaultImage: {
    height: 280,
    width: 280
  },
  profileImage: {
    width: 280,
    height: 280,
    borderRadius: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginTop : 100,
    borderColor : "#FFA825",
    borderWidth : 3,
  },
  profilePlaceholder: {
    width: 280,
    height: 280,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginTop : 100,
    borderColor : "#FFA825",
    borderWidth : 3,
  },
  buttomSave : {
    backgroundColor : "#FFA825",
    height : 45,
    width : 350,
    borderColor : "white",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center",
    marginTop: 15
  },
  buttonText : {
    color : "white",
    fontSize: 18,
    fontWeight : "bold"
  },
  backButton : {
    position: 'absolute',
    top: 15,
    left: 0,
    zIndex: 1,
    height : 45,
    width : 45,
  },
  backButtonImage : {
    width: 35,
    height: 35,
    marginTop: 20
  },
});

export default styles;