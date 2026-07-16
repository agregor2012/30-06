import { ScrollView, StyleSheet, Text, View } from "react-native-web";
import ComponentStorage from "../../components/ComponentStorage";
import ComponentStorageTeste from "../../components/ComponentStorageTeste";
import { styles } from "../../../styles";

export default function Usuario() {
    return (
        <View style={styles.viewPrincipal}>
            <ComponentStorageTeste />
        </View>
    )
}