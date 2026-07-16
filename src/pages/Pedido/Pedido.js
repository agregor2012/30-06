import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, Button, TouchableOpacity } from 'react-native';
import { Picker, ScrollView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import ComponentPicker from '../../components/ComponentPicker';
import ComponentProductFlat from '../../components/ComponentProductFlat';


export default function Pedido() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* Header */}
                <View style={styles.testeView}>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Home')}>Home</Text></View>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Sobre')}>Sobre</Text></View>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Pedido')}>Pedido</Text></View>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Contato')}>Contato</Text></View>
                </View>
                {/* Header */}

                <View style={styles.textoImagem}>
                    <Text style={styles.text}>Temos a pizza mais gostosa do Rio de Janeiro!</Text>
                </View>

                <View style={styles.containerOpcoes}>
                        <ComponentProductFlat></ComponentProductFlat>                 
                </View>

                <View style={styles.textoImagem}>
                    <Text style={styles.text}>Se delicie com nossos incríveis sabores de Pizza!</Text>
                </View>

                <View>


                </View>

            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },


    scrollContainer: {
        width: '100%',
        alignItems: 'center',
    },

    testeView: {
        width: '100%',
        backgroundColor: '#1b1b19',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 5,
    },

    textoImagem: {
        width: '100%',
        backgroundColor: '#ff9900',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 15,
    },

    botao: {
        backgroundColor: '#ffa600',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        margin: 5,
        elevation: 3,
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },

});