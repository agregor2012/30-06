import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, Button, TouchableOpacity } from 'react-native';
import { ImageBackground, Picker, ScrollView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import ComponentPicker from '../../components/ComponentPicker';
import ComponentStorage from '../../components/ComponentStorage';


export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.testeView}>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Home')}>Home</Text></View>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Sobre')}>Sobre</Text></View>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Pedido')}>Pedido</Text></View>
                    <View style={styles.botao}><Text onPress={() => navigation.navigate('Contato')}>Contato</Text></View>
                </View>

                <View style={styles.textoImagem}>
                    <Text style={styles.text}>Temos a pizza mais gostosa do Rio de Janeiro!</Text>
                </View>

                <View style={styles.containerImagePizza}>
                    <Image
                        source={{ uri: "https://cms-blog.saipos.com/propaganda-delivery-de-pizza-SAIPOS-sistema-para-restaurante.png" }}
                        style={styles.imagePizza}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.textoImagem}>
                    <Text style={styles.text}>Se delicie com nossos incríveis sabores de Pizza!</Text>
                </View>

                <View style={styles.promocoes}>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedido')}>
                        <View style={styles.viewPromocoes}> <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwapaULs9zZ6c36uw1pkhxfYyOIgqtS9MPi26e1SvNXlPaMZRYDERKVYU&s=10" }}
                            style={styles.imagePromocoes}
                            resizeMode="cover"
                        /></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedido')}>
                        <View style={styles.viewPromocoes}>
                            <Image
                                source={{ uri: "https://i.pinimg.com/1200x/18/75/80/1875805ab9b653ed182f6c804458b9a2.jpg" }}
                                style={styles.imagePromocoes}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedido')}>
                        <View style={styles.viewPromocoes}>
                            <Image
                                source={{ uri: "https://www.pizzastorvelli.site/assets/img/produto-destaque.jpg" }}
                                style={styles.imagePromocoes}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedido')}>
                        <View style={styles.viewPromocoes}> <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SLVxQu5ejVhqmgdN20hXqqb1wZiTpLNE3FpmxGORfxQi9dJX0o6fz6A&s=10" }}
                            style={styles.imagePromocoes}
                            resizeMode="cover"
                        /></View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('Pedido')}>
                        <View style={styles.viewPromocoes}> <Image
                            source={{ uri: "https://i.pinimg.com/736x/04/14/65/0414652b5a1c6ad22ede686db9113e4a.jpg" }}
                            style={styles.imagePromocoes}
                            resizeMode="cover"
                        /></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedido')}>
                        <View style={styles.viewPromocoes}> <Image
                            source={{ uri: "https://img.magnific.com/psd-premium/midia-social-para-pizzaria-midia-social-para-pizzeria_601378-142.jpg?semt=ais_hybrid&w=740&q=80" }}
                            style={styles.imagePromocoes}
                            resizeMode="cover"
                        /></View>
                    </TouchableOpacity>

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

    containerImagePizza: {
        width: '100%',
        backgroundColor: '#fff',
    },

    imagePizza: {
        width: '100%',
        aspectRatio: 16 / 9,
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

    promocoes: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'black'
    },

    viewPromocoes: {
        width: 200,
        height: 200,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 60,
        backgroundColor: 'yellow'
    },

    imagePromocoes: {
        width: '100%',
        height: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 12
    },
});