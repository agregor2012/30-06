import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, Dimensions, TouchableOpacity } from 'react-native';

export default function ComponentProductFlat() {
const numColumns = 3; // Define o número de colunas por linha

    const products = [
        { image: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png", textoPrincipal: "Pizza de Frango", textoSecundario: "R$40,00" },
        { image: "https://png.pngtree.com/png-clipart/20250104/original/pngtree-trendy-smartwatch-with-notifications-and-apps-png-image_18812139.png", textoPrincipal: "Pizza de 4 Queijos", textoSecundario: "R$40,00" },
        { image: "https://png.pngtree.com/png-clipart/20241210/original/pngtree-nike-shoes-transparent-png-image_17778783.png", textoPrincipal: "Pizza de Calabresa", textoSecundario: "R$40,00" },
        { image: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-traveling-suitcase-luggage-png-image_9687747.png", textoPrincipal: "Pizza de Camarão", textoSecundario: "R$40,00" },
        { image: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-blue-wireless-gaming-headset-png-image_17009772.png", textoPrincipal: "Pizza Portuguesa", textoSecundario: "R$40,00" },
        { image: "https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png", textoPrincipal: "Pizza de Lombo", textoSecundario: "R$40,00" }

    ]
    return (
        <View style={styles.container}>

            <FlatList
          
                data={products}
                renderItem={({ item }) => <ProdutosLista data={item} />}
            />

        </View>
    );
}

function ProdutosLista({ data }) {
    return (

        <View style={styles.container}>

            <View style={styles.containerProduct}>

                <View style={styles.imageProduct}>
                    <Image
                        source={{ uri: data.image }}
                        style={{ width: 80, height: 80 }}
                        resizeMode='contain'

                    />
                </View>

                <View style={styles.textContainer}>
                    <text style={styles.texto1}>{data.textoPrincipal}</text>

                    <View style={styles.carrinhoContainer}>
                        <text style={styles.texto2}>{data.textoSecundario}</text>

                        <TouchableOpacity>
                            <Text style={styles.texto3}>➕🛒 </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },


    containerProduct: {
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: "white",
        width: 220,
        height: 100,
        borderRadius: 12,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },



    textContainer: {
        marginLeft: 10,
        width: '50%',
        height: 80,
    },

    carrinhoContainer: {
        flexDirection: 'row',
    },

    texto1: {
        fontSize: 22
    },

    texto2: {
        fontSize: 20,
        color: "#017ff5"
    },

    texto3: {
        fontSize: 15,
    },

});
