import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { LinearGradient } from "expo-linear-gradient";

export default function Quiz() {
    const kahootURL = "https://kahoot.it";

    const openKahoot = () => {
        Linking.openURL(kahootURL);
    };

    return (
        <LinearGradient colors={["#040410", "#071828", "#040410"]} style={styles.container}>

            <Text style={styles.title}>🎯 Quiz Interactivo</Text>

            <Text style={styles.subtitle}>
                Escanea el código o presiona el botón para entrar al Kahoot
            </Text>

            <View style={styles.qrContainer}>
                <QRCode
                    value={kahootURL}
                    size={220}
                    color="#00cfff"
                    backgroundColor="transparent"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={openKahoot}>
                <Text style={styles.buttonText}>Entrar al Quiz</Text>
            </TouchableOpacity>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    title: {
        color: "#00cfff",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10,
    },

    subtitle: {
        color: "#aaa",
        textAlign: "center",
        marginBottom: 30,
    },

    qrContainer: {
        padding: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#00cfff40",
        backgroundColor: "#0a0a1a",
        marginBottom: 30,
    },

    button: {
        backgroundColor: "#00cfff",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
    },

    buttonText: {
        color: "#000",
        fontWeight: "600",
    },
});