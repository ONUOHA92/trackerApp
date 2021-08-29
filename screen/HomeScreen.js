import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';



import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 6.51193 ,
        longitude: 3.39368,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
  }



   requestLoationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool App location Permission",
          message:
            "Cool App needs access to your location ", 
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("loation permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  

  
  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      let lat = parseFloat(position.coords.latitude)

      let long = parseFloat(position.coords.longitude)

      let initialRegion = {
        latitude : lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        
      }
      this.setState({initialRegion: initialRegion})
     

    });
     
  }


  onRegionChange(region) {
    this.setState({ region });
  }


  render() {
    return (
      <View style={styles.container}>
        
        <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={this.state.region}  
        showsUserLocation={true}
        showsCompass={true}
        >

        </MapView>

        
      </View>
    );
  }
}
let { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  map: {
    flex: 1,
    width: width,
    height: height, 
     
  }
})

export default HomeScreen;

