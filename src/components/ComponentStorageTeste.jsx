import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, Touchable, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from 'react';
import { styles } from '../../styles';

export default function ComponentStorageTeste() {

    return (
        <View style={styles.container}>

            <View style={styles.viewContainer}>
                <Text style={styles.textoPrincipal}>Nome</Text>
                <TextInput style={styles.textoInput} placeholder='Nome do produto' placeholderTextColor="rgba(0, 0, 0, 0.3)"></TextInput>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.textoPrincipal}>Valor</Text>
                <TextInput style={styles.textoInput} placeholder='Nome do produto' placeholderTextColor="rgba(0, 0, 0, 0.3)"></TextInput>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.textoPrincipal}>Categoria</Text>
                <TextInput style={styles.textoInput} placeholder='Nome do produto' placeholderTextColor="rgba(0, 0, 0, 0.3)"></TextInput>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.textoPrincipal}>Quantidade</Text>
                <TextInput style={styles.textoInput} placeholder='Nome do produto' placeholderTextColor="rgba(0, 0, 0, 0.3)"></TextInput>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.textoPrincipal}>Valor</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textoCifrao}>R$</Text>
                    <TextInput style={styles.textoInput} placeholder='Nome do produto' placeholderTextColor="rgba(255, 255, 255, 0.6)"></TextInput>
                </View>
            </View>

            <TouchableOpacity>
                <View style={styles.btn_blue}>
                    <Text style={styles.btn_blueText}> SALVAR </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

