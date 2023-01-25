import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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

export default function ProfileData() {
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
            <View style={styles.container}>
                <Text style={styles.text}> Nome completo </Text>
                <Text style={styles.footerText}>
                    Joana Reis
                </Text>
                <Text style={styles.text}> Email </Text>
                <Text style={styles.footerText}>
                    jeovanareis@test.com
                </Text>
                <Text style={styles.text}> CPF </Text>
                <Text style={styles.footerText}>
                    123.456.789-00
                </Text>
                <Text style={styles.text}> Data de nascimento </Text>
                <Text style={styles.footerText}>
                    01/01/0001
                </Text>
                <Text style={styles.text}> Telefone </Text>
                <Text style={styles.footerText}>
                    27 92727-2727
                </Text>
                <Text style={styles.text}> Número do identificação do cartão </Text>
                <Text style={styles.footerText}>
                    1589623
                </Text>
                <Text style={styles.text}> Tipo do cartão </Text>
                <Text style={styles.footerText}>
                    Estudante
                </Text>
                
                

                <View style={styles.footer}>
                    <Text style={styles.Bottom}> Mapa </Text>
                    <RectButton style={styles.createPointButton} onPress={handleNavigateToSGMap}>
                        <Feather name="map" size={20} color="#F5AB35" />
                    </RectButton>

                    <Text style={styles.Bottom}> Horários </Text>
                    <RectButton style={styles.createPointButton} onPress={handleNavigateToHours}>
                        <Feather name="clock" size={20} color="#F5AB35" />
                    </RectButton>

                    <Text style={styles.Bottom}> Perfil </Text>
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
    footerText: {
        marginTop: 0,
        marginLeft: 25,
        marginRight: 25,
        paddingVertical: 10,
        backgroundColor: '#D9D9D9',
        color: '#606060',
        fontSize: 12,
        fontFamily: 'Nunito_700Bold',
        //bottom: 32,
        
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        paddingLeft: 24,
        borderRadius: 27.4,
        top: 80,
        elevation: 3,
        //alignItems: 'baseline',
        /* bottom: 32,
        flexDirection: 'row',
        height: 40, */
    },
    text: {
        fontSize: 12,
        fontFamily: 'Nunito_700Bold',
        color: '#606060',
        //marginTop: 16,
        marginLeft: 25,
        marginRight: 25,
        paddingVertical: 10,

        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        paddingLeft: 4,
        top: 80,
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
        //shadowOffset: { width:-4, height:4},
    },
    Bottom: {
        color: '#F5AB35',
        fontFamily: 'Nunito_700Bold',
        position: 'relative',
        //width: 80,
        //height: 15,
        left: 60,
        top: 22,
    },
});