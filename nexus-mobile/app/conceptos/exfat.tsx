import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function exFAT() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>📀 ¿Qué es exFAT?</Text>

            <Text style={styles.text}>
                El exFAT (Extended File Allocation Table) fue creado por Microsoft en 2006 como el "punto medio" ideal entre la compatibilidad de FAT32 y la potencia y modernidad de NTFS.

                Básicamente, exFAT elimina las limitaciones críticas del FAT32 manteniendo casi toda su compatibilidad universal.
            </Text>

            {/* ⚙️ Características */}
            <Text style={styles.subtitle}>⚙️ Características</Text>

            <Text style={styles.text}>• No tiene límite de 4GB por archivo</Text>
            <Text style={styles.text}>• Compatible con Windows, Mac y Linux</Text>
            <Text style={styles.text}>• Ideal para memorias USB modernas</Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas</Text>

            <Text style={styles.text}>
                Sin límite real de archivos: A diferencia de FAT32, exFAT no tiene el límite de 4 GB por archivo. Puedes almacenar archivos gigantes (videos en 4K, imágenes de sistemas operativos, copias de seguridad de bases de datos) sin problemas.
            </Text>
            <Text style={styles.text}>
                Compatibilidad multiplataforma: Funciona de forma nativa en Windows, macOS y Linux. Esto lo convierte en el estándar de facto para unidades USB y tarjetas SD que se usan en diferentes dispositivos.
            </Text>
            <Text style={styles.text}>
                Ligero y eficiente: No tiene la sobrecarga de características de NTFS (como permisos complejos o journaling), lo que lo hace ideal para dispositivos con recursos limitados como memorias USB y tarjetas SD.
            </Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Desventajas</Text>

            <Text style={styles.text}>
                • No tiene seguridad avanzada como NTFS
            </Text>
            <Text style={styles.text}>
                • No incluye journaling
            </Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usarlo?</Text>

            <Text style={styles.text}>
                Ideal para discos externos, USB y transferencia de archivos grandes
                entre diferentes sistemas operativos.
            </Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#050510",
        padding: 20,
    },
    title: {
        color: "#00ffff",
        fontSize: 24,
        marginBottom: 15,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#00ffff",
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 8,
        lineHeight: 20,
    },
});