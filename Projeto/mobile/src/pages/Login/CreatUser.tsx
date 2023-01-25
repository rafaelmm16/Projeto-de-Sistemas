import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import api from '../../services/api';

interface Point {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function Login() {
    const [points, setPoints] = useState<Point[]>([]);
    const navigation = useNavigation();

    useFocusEffect(() => {
        api.get('points').then(response => {
            setPoints(response.data);
        })
    });
    function handleNavigateToSGMap() {
        navigation.navigate('SGMap');
    }

    const [selected, setSelected] = useState();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/cadastro.png')} style={styles.image}>
                <Text style={styles.Text}>Cadastro</Text>
            </ImageBackground>
            <View style={styles.Form}>
                <Text style={styles.title}>Nome completo</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.title}>Email</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.title}>CPF</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.title}>Data de nascimento</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.title}>Telefone</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.title}>Número do identificação do cartão</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.title}>Tipo do cartão</Text>
                <Picker
                    style={styles.select}
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelected(itemValue)
                    }>
                    <Picker.Item label="Estudante" value="Estudante" />
                    <Picker.Item label="Normal" value="Normal" />
                    <Picker.Item label="Deficiente" value="Deficiente" />
                </Picker>
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonBlank} onPress={handleNavigateToSGMap}>
                    <Text style={styles.registerText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    Text: {
        width: 300,
        height: 270,
        left: 36,
        top: 250,
        fontSize: 36,
        color: '#F5AB35',
        marginTop: '14%',
        //marginBottom: '8%',
        //paddingStart: '5%',
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    Form: {
        fontSize: 28,
        backgroundColor: '#000000',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        color: '#D9D9D9',
        fontSize: 12,
        marginTop: 4,
       // width: 35,
        //height: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    input: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        borderRadius: 27.4,
        paddingVertical: 2,
        marginTop: 4,
    },
    registerText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
    buttonBlank: {
        backgroundColor: '#F5AB35',
        
        borderRadius: 27.4,
        paddingVertical: 15,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        color: "#000000",
        backgroundColor: '#D9D9D9',
        borderRadius: 27.4,
    }
})