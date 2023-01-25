import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../services/api';
import {Picker} from '@react-native-picker/picker';

interface PointDataRouteParams {
    position: {
        latitude: number;
        longitude: number;
    },
}

export default function Recharge() {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [instructions, setInstructions] = useState('');
    const [opening_hours, setOpeningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<string[]>([]);

    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params as PointDataRouteParams;


    function handleNavigateToCreatePoint() {
        navigation.navigate('SelectMapPosition');
    }
    function handleNavigateToSGMap() {
        navigation.navigate('SGMap');
    }
    function handleNavigateToProfile() {
        navigation.navigate('Profile');
    }
    function handleNavigateToHours(){
        navigation.navigate('Hours');
      }

    async function handleCreatePoint() {
        const { latitude, longitude } = params.position;

        const data = new FormData();

        data.append('name', name);
        data.append('about', about);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('instructions', instructions);
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends', String(open_on_weekends));

        await api.post('points', data);

        navigation.navigate('SGMap');
    }

    const [selected, setSelected] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Qual o valor da recarga?</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Tipo de pagamento:</Text>
            <Picker
                selectedValue={selected}
                onValueChange={(itemValue, itemIndex) =>
                  setSelected(itemValue)
                }>
                <Picker.Item label="Cartão de crédito" value="crédito" />
                <Picker.Item label="Cartão de débito" value="débito" />
                <Picker.Item label="Pix" value="Pix" />
                <Picker.Item label="Boleto bancário" value="Boleto" />
            </Picker>

            <Text style={styles.label}>Número do cartão</Text>
            <TextInput
                style={[styles.input]}
                value={about}
                onChangeText={setAbout}
                multiline
            />

            <Text style={styles.label}>Nome do titular </Text>
            <TextInput
                style={[styles.input]}
                value={instructions}
                onChangeText={setInstructions}
                multiline
            />

            <Text style={styles.label}>CPF/CNPJ do titular</Text>
            <TextInput
                style={styles.input}
                value={opening_hours}
                onChangeText={setOpeningHours}
            />

            <Text style={styles.label}>Data de validade</Text>
            <TextInput
                style={styles.input}
                value={opening_hours}
                onChangeText={setOpeningHours}
            />

            <Text style={styles.label}>CVV</Text>
            <TextInput
                style={styles.input}
                value={opening_hours}
                onChangeText={setOpeningHours}
            />

            <RectButton style={styles.nextButton} onPress={handleCreatePoint}>
                <Text style={styles.nextButtonText}>Realizar recarga</Text>
            </RectButton>

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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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

    label: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_600SemiBold',
        marginBottom: 2,
    },

    comment: {
        fontSize: 11,
        color: '#8fa7b3',
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 27.4,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 10,
        textAlignVertical: 'top',
    },

    nextButton: {
        backgroundColor: '#F5AB35',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 39,
    },

    nextButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#FFF',
    },
});