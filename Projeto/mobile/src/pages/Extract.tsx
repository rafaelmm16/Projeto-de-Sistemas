import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Point {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function Profile() {
    const [points, setPoints] = useState<Point[]>([]);
    const navigation = useNavigation();

    useFocusEffect(() => {
        api.get('points').then(response => {
            setPoints(response.data);
        })
    });

      function handleNavigateToHours(){
        navigation.navigate('Hours');
      }
      function handleNavigateToSGMap(){
        navigation.navigate('SGMap');
      }
      function handleNavigateToProfile(){
        navigation.navigate('Profile');
      }

    return (
        <View style={styles.container} >

          <Text style={styles.ProfileText}> Dia: 01/01/0001  Horário: 16:20 </Text>
          <Text style={styles.ProfileText}> Linha: UFES x Centro </Text>
          <Text style={styles.ProfileText}> Passagem: RS2,25 </Text>


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
    footer: {
        top: 753,
        width: 450,
        height: 89,
        left: 0,
        paddingLeft: 24,
        paddingRight: 84,
        backgroundColor: '#FFF',
        borderRadius: 30,
        elevation: 3,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
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
    },
    createPointButton: {
        position: 'relative',
        left: 3.5,
        right: 3.9,
        //top:12.6,
        //bottom:13,
        height: 36,
        justifyContent: 'space-between',
        //width: 56,
    },
    ProfileText: {
        color: '#606060',
        fontFamily: 'Nunito_700Bold',
        position: 'relative',
        //width: 80,
        //height: 15,
        left: 20,
        //top: 0,
        alignItems: 'baseline',
        
        flexDirection: 'column',
        justifyContent: 'space-between',
        //padding: 24,
        paddingTop: 24,
    },
    createStyle:{ 
        position: 'relative',
        justifyContent: 'space-between',
        left: 30,
        //right: 3.9,
        height: 30,
        top: 67,
    },
});