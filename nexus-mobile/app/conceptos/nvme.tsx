import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function NVMe() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>⚡ ¿Qué es un NVMe?</Text>

            <Text style={styles.text}>
                NVMe (Non-Volatile Memory Express) es un protocolo de almacenamiento de alta velocidad
                diseñado específicamente para aprovechar al máximo la tecnología SSD mediante el uso
                de la interfaz PCIe.
            </Text>

            <Text style={styles.text}>
                A diferencia de los SSD tradicionales que usan SATA, NVMe elimina cuellos de botella
                y permite velocidades extremadamente altas.
            </Text>

            {/* ⚙️ Cómo funciona */}
            <Text style={styles.subtitle}>¿Cómo funciona?</Text>

            <Text style={styles.text}>
                NVMe se conecta directamente a la placa base a través de PCI Express (PCIe),
                lo que permite múltiples carriles de datos en paralelo.
            </Text>

            <Text style={styles.text}>
                Esto reduce la latencia y aumenta significativamente la velocidad de lectura y escritura.
            </Text>

            {/* 🚀 Características */}
            <Text style={styles.subtitle}>Características principales</Text>

            <Text style={styles.text}>• Velocidad extrema: hasta 7000 MB/s o más</Text>
            <Text style={styles.text}>• Baja latencia</Text>
            <Text style={styles.text}>• Uso de PCIe en lugar de SATA</Text>
            <Text style={styles.text}>• Ideal para tareas exigentes</Text>

            {/* ⚡ Ventajas */}
            <Text style={styles.subtitle}>Ventajas</Text>

            <Text style={styles.text}>
                • Cargas instantáneas en juegos y aplicaciones
            </Text>
            <Text style={styles.text}>
                • Transferencias de archivos ultra rápidas
            </Text>
            <Text style={styles.text}>
                • Mejor rendimiento en multitarea
            </Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>Desventajas</Text>

            <Text style={styles.text}>
                • Precio más alto que SSD SATA
            </Text>
            <Text style={styles.text}>
                • Puede generar más calor
            </Text>
            <Text style={styles.text}>
                • No todos los equipos lo soportan
            </Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>¿Cuándo usar NVMe?</Text>

            <Text style={styles.text}>
                Es ideal para:
            </Text>
            <Text style={styles.text}>• Gaming</Text>
            <Text style={styles.text}>• Edición de video</Text>
            <Text style={styles.text}>• Desarrollo de software</Text>
            <Text style={styles.text}>• Sistemas de alto rendimiento</Text>

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