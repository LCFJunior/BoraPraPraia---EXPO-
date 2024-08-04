import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Platform, PermissionsAndroid, TouchableWithoutFeedback, Animated, Text, StyleSheet, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import mapStyle from '../../MapStyle.json';
import styles from "./HomeStyle";

const { width, height } = Dimensions.get('screen');

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
        <TouchableWithoutFeedback>
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

const MARKER_COORDINATES = {
  latitude: -27.573481,
  longitude: -48.424964
};

export default function Home() {
  const [region, setRegion] = useState(HOME_REGION);
  const [zoom, setZoom] = useState(10);
  const [highlighted, setHighlighted] = useState(false);
  const mapRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    getMyLocation();
  }, []);

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

  function handleMarkerPress() {
    setHighlighted(!highlighted);
  }

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
        <MarkerBL coordinate={MARKER_COORDINATES} onPress={handleMarkerPress} />
        {highlighted && (
          <Polygon
            coordinates={[
              { latitude: BOUNDARIES.north, longitude: BOUNDARIES.west },
              { latitude: BOUNDARIES.north, longitude: BOUNDARIES.east },
              { latitude: BOUNDARIES.south, longitude: BOUNDARIES.east },
              { latitude: BOUNDARIES.south, longitude: BOUNDARIES.west },
            ]}
            strokeColor="#FFA825"
            fillColor="rgba(100, 50, 30, 0.5)"
            strokeWidth={1}
          />
        )}
      </MapView>
      <FabButton navigateToConfig={navigateToConfig} />
    </View>
  );
}