import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
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

export default function Hours() {
    const [points, setPoints] = useState<Point[]>([]);
    const navigation = useNavigation();

    useFocusEffect(() => {
        api.get('points').then(response => {
            setPoints(response.data);
        })
    });

    function handleNavigateToHours() {
        navigation.navigate('Hours');
    }
    function handleNavigateToSGMap() {
        navigation.navigate('SGMap');
    }
    function handleNavigateToProfile() {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.Search]}
                //value={about}
                //onChangeText={setAbout}
                multiline
            />
            <RectButton style={styles.createSearchButton} onPress={() => { }}>
                <Feather name="search" size={20} color="#F5AB35" />
            </RectButton>
            
            <View style={styles.Text}>
                <Text style={styles.footerText}> Ponto1 </Text>
                <RectButton style={styles.createBlankButton}>
                    <Feather name="map" size={20} color="#606060" />
                </RectButton>
            </View>
            <View style={styles.Text}>
                <Text style={styles.footerText}> Ponto2 </Text>
                <RectButton style={styles.createBlankButton}>
                    <Feather name="map" size={20} color="#606060" />
                </RectButton>
            </View>
            <View style={styles.Text}>
                <Text style={styles.footerText}> Ponto3 </Text>
                <RectButton style={styles.createBlankButton}>
                    <Feather name="map" size={20} color="#606060" />
                </RectButton>
            </View>
            <View style={styles.Text}>
                <Text style={styles.footerText}> Ponto4 </Text>
                <RectButton style={styles.createBlankButton}>
                    <Feather name="map" size={20} color="#606060" />
                </RectButton>
            </View>
            <View style={styles.Text}>
                <Text style={styles.footerText}> Ponto25 </Text>
                <RectButton style={styles.createBlankButton}>
                    <Feather name="map" size={20} color="#606060" />
                </RectButton>
            </View>
            

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
    Search: {
        backgroundColor: '#F5AB35',
        alignItems: 'center',
        borderRadius: 20,
        //bottom: 32,
        elevation: 3,
        flexDirection: 'row',
        height: 56,
        left: 24,
        justifyContent: 'space-between',
        paddingLeft: 24,
        position: 'absolute',
        right: 32,
    },
    createSearchButton: {
        alignItems: 'center',
        backgroundColor: '#862B00',
        borderRadius: 20,
        height: 56,
        justifyContent: 'center',
        width: 80,
        left: 340,
    },
    footerText: {
        color: '#8FA7B3',
        fontFamily: 'Nunito_700Bold',
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
    createBlankButton: {
            alignItems: 'center',
            //backgroundColor: '#15C3D6',
            borderRadius: 20,
            height: 56,
            justifyContent: 'center',
            width: 56,
    },
    Text:{
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        bottom: 0,
        elevation: 3,
        flexDirection: 'row',
        height: 76,
        top:70,
        marginTop: 0,
        marginLeft: 25,
        marginRight: 25,
        paddingVertical: 10,
        //left: 24,
        justifyContent: 'space-between',
        paddingLeft: 24,
        //position: 'absolute',
        //right: 32,
    }
});