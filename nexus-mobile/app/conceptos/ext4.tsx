import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function EXT4() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>🐧 ¿Qué es EXT4?</Text>

            <Text style={styles.text}>
                El EXT4 (Fourth Extended Filesystem) es el sistema de archivos predeterminado para la gran mayoría de las distribuciones de Linux (como Ubuntu, Debian, Fedora, etc.). Es considerado el estándar de oro en el mundo del código abierto por su robustez, velocidad y eficiencia.

                Al igual que NTFS es para Windows y APFS es para Apple, EXT4 es el sistema que permite a Linux gestionar el almacenamiento de manera confiable.
            </Text>

            {/* ⚙️ Características */}
            <Text style={styles.subtitle}>⚙️ Características</Text>

            <Text style={styles.text}>Journaling (Diario): Al igual que NTFS, EXT4 utiliza un diario para registrar los cambios en el disco antes de escribirlos físicamente. Si hay un fallo de energía, el sistema puede verificar el diario al arrancar y recuperar la integridad de los datos casi instantáneamente.</Text>
            <Text style={styles.text}>Extents (Extensiones): En lugar de gestionar cada bloque de datos individualmente (como hacían los sistemas antiguos), EXT4 agrupa los bloques en "extensiones". Esto reduce drásticamente la fragmentación y acelera enormemente la lectura y escritura de archivos grandes.</Text>
            <Text style={styles.text}>Soporte para archivos y volúmenes enormes: EXT4 puede manejar archivos individuales de hasta 16 Terabytes (TB) y volúmenes completos de hasta 1 Exabyte (EB). Esto lo hace perfecto para servidores y almacenamiento masivo.</Text>
            <Text style={styles.text}>Asignación de espacio "atrás": Para evitar la fragmentación desde el principio, EXT4 intenta asignar espacio de manera contigua (junto) al escribir un archivo. Esto mantiene el disco organizado desde el primer día.</Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas</Text>

            <Text style={styles.text}>
                • Muy rápido en sistemas Linux
            </Text>
            <Text style={styles.text}>
                • Recuperación de errores gracias al journaling
            </Text>
            <Text style={styles.text}>
                • Ideal para servidores
            </Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Desventajas</Text>

            <Text style={styles.text}>
                • No es compatible con Windows de forma nativa
            </Text>
            <Text style={styles.text}>
                • Poco usado fuera de Linux
            </Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usar EXT4?</Text>

            <Text style={styles.text}>
                Se utiliza principalmente en sistemas Linux, servidores, centros de datos
                y entornos donde se requiere alto rendimiento y estabilidad.
            </Text>

            {/* 🆚 Comparación */}
            <Text style={styles.subtitle}>🆚 Comparación rápida</Text>

            <Text style={styles.text}>
                • EXT4: rápido y estable en Linux
            </Text>
            <Text style={styles.text}>
                • NTFS: estándar en Windows
            </Text>
            <Text style={styles.text}>
                • APFS: optimizado para Apple
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