import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import MapMarker from '../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';
import api from '../services/api';

interface Point {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function SGMap() {
  const [points, setPoints] = useState<Point[]>([]);
  const navigation = useNavigation();
  
  useFocusEffect(()=> {
    api.get('points').then(response => {
      setPoints(response.data);
    })
  });
  
  function handleNavigateToPointDetails(id: number){
    navigation.navigate('PointDetails', { id });
  }
  function handleNavigateToCreatePoint(){
    navigation.navigate('SelectMapPosition');
  }
  function handleNavigateToProfile(){
    navigation.navigate('Profile');
  }
  function handleNavigateToSGMap(){
    navigation.navigate('SGMap');
  }
  function handleNavigateToHours(){
    navigation.navigate('Hours');
  }
  

  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={
        styles.map}
      initialRegion={
        { 
          latitude: -18.7207707,
          longitude: -39.85614,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
          }}
      >
        {points.map(points => {
          return (
            <Marker
              key={points.id}
              icon={MapMarker}
              calloutAnchor={{
                x: 2.5,
                y: 0.7,
              }}
              coordinate={{
                latitude: points.latitude,
                longitude: points.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToPointDetails(points.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{points.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}> Mapa </Text>
        <RectButton style={styles.createPointButton} onPress={handleNavigateToSGMap}>
          <Feather name="map" size={20} color="#F5AB35" />
        </RectButton>

        <Text style={styles.footerText}> Horários </Text>
        <RectButton style={styles.createPointButton} onPress={handleNavigateToHours}>
          <Feather name="clock" size={20} color="#F5AB35" />
        </RectButton>

        <Text style={styles.footerText}> Perfil </Text>
        <RectButton style={styles.createPointButton} onPress={handleNavigateToProfile}>
          <Feather name="user" size={20} color="#F5AB35" />
        </RectButton>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  calloutContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160,
  },
  calloutText: {
    color: '#0089A5',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  footer: {
    paddingLeft: 24,
    paddingRight: 84,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    width: 450,
    height: 72,
    top: 873,
    left: 0,
    backgroundColor: '#FFF',
    borderRadius: 30,
    elevation: 2,
    justifyContent: 'space-between',

    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomStartRadius: 0,
  },
  footerText: {
    color: '#F5AB35',
    fontFamily: 'Nunito_700Bold',
    position: 'relative',
    //width: 80,
    //height: 15,
    left: 60,
    top: 22,
    //justifyContent: 'space-between',
    //alignItems: 'center',
  },
  createPointButton: {
    //alignItems: 'center',
    position: 'relative',
    left:3.5,
    right:3.9,
    //top:12.6,
    //bottom:13,
    height: 36,
    justifyContent: 'space-between',
    //width: 56,

    //alignItems: 'center',
    //backgroundColor: '#15C3D6',
    //borderRadius: 20,
    //height: 56,
    //justifyContent: 'center',
    //width: 56,
  }
});