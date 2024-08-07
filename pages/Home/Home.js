import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Dimensions,
  Platform,
  PermissionsAndroid,
  TouchableWithoutFeedback,
  Animated,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
  Modal
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import mapStyle from '../../MapStyle.json';
import styles from "./HomeStyle";

const { width, height } = Dimensions.get('screen');
const backButton = require('../../assets/back-button.png');
const restaurant = require('../../assets/marker-restaurant.png')

class FabButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animation: new Animated.Value(0)
    };
  }

  toggleMenu = () => {
    const toValue = this.state.open ? 0 : 1;

    Animated.spring(this.state.animation, {
      toValue,
      friction: 6,
      useNativeDriver: true
    }).start();

    this.setState({ open: !this.state.open });
  }

  render() {
    const cameraStyle = {
      transform: [
        { scale: this.state.animation },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70]
          })
        }
      ]
    };

    const likeStyle = {
      transform: [
        { scale: this.state.animation },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -130]
          })
        }
      ]
    };

    const rotation = {
      transform: [
        {
          rotate: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
          })
        }
      ]
    };

    return (
      <View style={[fabStyles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.props.navigateToFavorites}>
          <Animated.View style={[fabStyles.button, fabStyles.submenu, likeStyle]}>
            <Text style={fabStyles.iconText}>
              <Icon name='star' size={20} color='#FFF' />
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.navigateToConfig}>
          <Animated.View style={[fabStyles.button, fabStyles.submenu, cameraStyle]}>
            <Text style={fabStyles.iconText}>
              <Icon name='gear' size={20} color='#FFF' />
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[fabStyles.button, fabStyles.menu, rotation]}>
            <Text style={fabStyles.iconText}>
              <Icon name='plus' size={24} color='#FFF' />
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const fabStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 90,
    left: 60
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
    },
  },
  menu: {
    backgroundColor: "#FFA825"
  },
  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#FFA825'
  },
  iconText: {
    textAlign: 'center'
  }
});

const MarkerBL = ({ coordinate, onPress }) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={markerStyles.marker}>
        <Image
          source={require('../../assets/barra-da-lagoa.jpg')}
          style={markerStyles.markerImage}
        />
      </View>
    </Marker>
  );
};

const markerStyles = StyleSheet.create({
  marker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 30,
    backgroundColor: "#FFA825",
  },
  markerImage: {
    width: 31,
    height: 31,
    borderRadius: 30,
  },
});

const markerRestaurant = StyleSheet.create({
  marker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  markerImage: {
    width: 31,
    height: 31,
  }
});

const HOME_REGION = {
  latitude: -27.597156,
  longitude: -48.481265,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5
};

const BOUNDARIES = {
  north: -27.357136,
  south: -27.882788,
  east: -48.321964,
  west: -48.655673
};

const MARKER_COORDINATES_barra = {
  latitude: -27.573481,
  longitude: -48.424964
};


const MARKER_COORDINATES_restaurant = {
  latitude: -27.574481,
  longitude: -48.423789
};

const MARKER_COORDINATES_parking = {
  latitude: -27.574434,
  longitude:  -48.424383
};

const GEOJSON_COORDINATES = [
  { latitude: -27.57290034064279, longitude: -48.422500357277954 },
  { latitude: -27.57287062413308, longitude: -48.42259181504613 },
  { latitude: -27.572890988227478, longitude: -48.42264762336478 },
  { latitude: -27.572936651413215, longitude: -48.42267340872553 },
  { latitude: -27.572972966311774, longitude: -48.422675688848585 },
  { latitude: -27.5730793168902, longitude: -48.422621514351164 },
  { latitude: -27.573236013222264, longitude: -48.42272539696438 },
  { latitude: -27.573319387315628, longitude: -48.42288153387818 },
  { latitude: -27.5733976599468, longitude: -48.42312669527141 },
  { latitude: -27.57345012826441, longitude: -48.42341212160983 },
  { latitude: -27.573455569425164, longitude: -48.42374201235373 },
  { latitude: -27.57342558854875, longitude: -48.4240657275968 },
  { latitude: -27.573336638222912, longitude: -48.42434938718608 },
  { latitude: -27.573225318029067, longitude: -48.424634213448684 },
  { latitude: -27.57305287219169, longitude: -48.424920533666295 },
  { latitude: -27.57283759417644, longitude: -48.42520890599897 },
  { latitude: -27.572614870726547, longitude: -48.42544939374241 },
  { latitude: -27.572276223843666, longitude: -48.42573837230921 },
  { latitude: -27.571922754469384, longitude: -48.425993638666114 },
  { latitude: -27.57160202695072, longitude: -48.426214939770944 },
  { latitude: -27.57151010588276, longitude: -48.42632891409309 },
  { latitude: -27.57147630477747, longitude: -48.42643680215298 },
  { latitude: -27.571488339849907, longitude: -48.42654270040197 },
  { latitude: -27.571538803416153, longitude: -48.42663932893805 },
  { latitude: -27.571611780367, longitude: -48.426716926622305 },
  { latitude: -27.571726962130306, longitude: -48.42677867690557 },
  { latitude: -27.57184243418311, longitude: -48.42679955663172 },
  { latitude: -27.57197788795125, longitude: -48.42678274925041 },
  { latitude: -27.572144175354353, longitude: -48.42670070338991 },
  { latitude: -27.57237437106958, longitude: -48.42654770738457 },
  { latitude: -27.57255810811965, longitude: -48.426409318161916 },
  { latitude: -27.572855033135163, longitude: -48.426163157709226 },
  { latitude: -27.573141873112796, longitude: -48.425911496378035 },
  { latitude: -27.5733529563702, longitude: -48.425673575807195 },
  { latitude: -27.57375020939989, longitude: -48.42534427506632 },
  { latitude: -27.573976353159146, longitude: -48.42515929337466 },
  { latitude: -27.57427917441961, longitude: -48.4248366565472 },
  { latitude: -27.574502545647732, longitude: -48.42450903122807 },
  { latitude: -27.574656520013534, longitude: -48.42414661820669 },
  { latitude: -27.574641749664522, longitude: -48.42377499316336 },
  { latitude: -27.574522943752918, longitude: -48.423449397491396 },
  { latitude: -27.57436027107584, longitude: -48.423118281105445 },
  { latitude: -27.574101315242785, longitude: -48.42270089367838 },
  { latitude: -27.573826528022806, longitude: -48.422380719477815 },
  { latitude: -27.573522112699045, longitude: -48.42228829625611 },
  { latitude: -27.57327099752657, longitude: -48.42225869728804 },
  { latitude: -27.57302598447678, longitude: -48.42232907190271 },
  { latitude: -27.572899866647717, longitude: -48.42249958609082 }
];

export default function Home() {
  const [region, setRegion] = useState(HOME_REGION);
  const [zoom, setZoom] = useState(10);
  const [highlighted, setHighlighted] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [restaurantMarkerVisible, setRestaurantMarkerVisible] = useState(null);
  const [parkingMarkerVisible, setParkingMarkerVisible] = useState(null);
  const handlePress = () => {
    setIsFavorite(!isFavorite);
  };
  const mapRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    getMyLocation();
  }, []);

  useEffect(() => {
    if (highlighted && mapRef.current) {
      mapRef.current.fitToCoordinates(geoJsonCoordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true
      });
    }
  }, [highlighted]);  

  async function getMyLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão negada para acessar localização');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    if (isWithinBoundaries(latitude, longitude)) {
      setRegion({
        ...HOME_REGION,
        latitude,
        longitude
      });
    } else {
      setRegion(HOME_REGION);
    }
  }

  function isWithinBoundaries(latitude, longitude) {
    return (
      latitude >= BOUNDARIES.south &&
      latitude <= BOUNDARIES.north &&
      longitude >= BOUNDARIES.west &&
      longitude <= BOUNDARIES.east
    );
  }

  function handleRegionChangeComplete(newRegion) {
    if (isWithinBoundaries(newRegion.latitude, newRegion.longitude)) {
      setRegion(newRegion);
    } else {
      let adjustedRegion = { ...newRegion };
      if (newRegion.latitude > BOUNDARIES.north) {
        adjustedRegion.latitude = BOUNDARIES.north;
      }
      if (newRegion.latitude < BOUNDARIES.south) {
        adjustedRegion.latitude = BOUNDARIES.south;
      }
      if (newRegion.longitude > BOUNDARIES.east) {
        adjustedRegion.longitude = BOUNDARIES.east;
      }
      if (newRegion.longitude < BOUNDARIES.west) {
        adjustedRegion.longitude = BOUNDARIES.west;
      }
      setRegion(adjustedRegion);
      mapRef.current.animateToRegion(adjustedRegion, 1000);
    }

    mapRef.current.getCamera().then(camera => {
      setZoom(camera.zoom);
    });
  }

  function navigateToConfig() {
    navigation.navigate('Config');
  }

  function navigateToFavorites() {
    navigation.navigate('Favorites');
  }

  function handleMarkerPress() {
    setHighlighted(!highlighted);
    setMarkerVisible(false);
    setRestaurantMarkerVisible(true);
    setParkingMarkerVisible(true);
  }  

  const geoJsonCoordinates = GEOJSON_COORDINATES.map(({ longitude, latitude }) => ({ latitude, longitude }));


  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{ width: width, height: height }}
        region={region}
        onRegionChangeComplete={handleRegionChangeComplete}
        zoomEnabled={true}
        loadingEnabled={true}
        minZoomLevel={11.4}
        showsUserLocation={true}
        customMapStyle={mapStyle}
        toolbarEnabled={false}
        showsMyLocationButton={false}
        onMapReady={() => {
          if (Platform.OS === 'android') {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then(() => {
              console.log('Usuário aceitou!');
            });
          }
        }}
      >
        {markerVisible && (
          <MarkerBL coordinate={MARKER_COORDINATES_barra} onPress={handleMarkerPress} />
        )}
        {restaurantMarkerVisible && (
          <Marker coordinate={MARKER_COORDINATES_restaurant}>
            <View style={markerRestaurant.marker}>
              <Image
                source={require('../../assets/marker-restaurant.png')}
                style={markerRestaurant.markerImage}
              />
            </View>
          </Marker>
        )}
        {parkingMarkerVisible && (
          <Marker coordinate={MARKER_COORDINATES_parking}>
            <View style={markerRestaurant.marker}>
              <Image
                source={require('../../assets/car-park.png')}
                style={markerRestaurant.markerImage}
              />
            </View>
          </Marker>
        )}
        {highlighted && (
          <Polygon
            coordinates={geoJsonCoordinates}
            strokeColor="#FFA825"
            fillColor="rgba(100, 50, 30, 0.08)"
            strokeWidth={1}
          />
        )}
      </MapView>
      {highlighted && (
        <Pressable
          style={styles.backButton}
          onPress={() => {
            setHighlighted(false);
            setMarkerVisible(true);
            setRestaurantMarkerVisible(false);
            setParkingMarkerVisible(false);
          }}
        >
          <Image source={backButton} style={styles.backButtonImage} />
        </Pressable>
      )}
      {highlighted && (
        <TouchableOpacity style={styles.favorite} onPress={() => {
          Alert.alert("Praia Favoritada! ❤️");
          handlePress();
        }}>
          <IconMA name={isFavorite ? 'favorite' : 'favorite-outline'} size={35} color="#FFA825"/>
        </TouchableOpacity>
      )}
      <FabButton
        navigateToConfig={navigateToConfig}
        navigateToFavorites={navigateToFavorites}
      />
    </View>
  );
}