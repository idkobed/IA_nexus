import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function SSD() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>⚡ SSD</Text>

            {/* INTRO */}
            <Text style={styles.subtitle}>¿Qué es?</Text>
            <Text style={styles.text}>
                Un SSD (Solid State Drive) es un dispositivo de almacenamiento que utiliza
                memoria flash para guardar datos de forma rápida y eficiente. A diferencia
                del HDD, no tiene partes mecánicas, lo que lo hace más veloz y resistente.
            </Text>

            {/* FUNCIONAMIENTO */}
            <Text style={styles.subtitle}>¿Cómo funciona?</Text>
            <Text style={styles.text}>
                El SSD almacena la información en chips de memoria flash. Estos permiten
                acceder a los datos de forma casi instantánea, sin necesidad de movimiento
                físico, lo que mejora significativamente el rendimiento.
            </Text>

            {/* COMPONENTES */}
            <Text style={styles.subtitle}>Componentes</Text>
            <Text style={styles.text}>• Memoria flash (NAND)</Text>
            <Text style={styles.text}>• Controlador</Text>
            <Text style={styles.text}>• Interfaz (SATA o NVMe)</Text>

            {/* CARACTERISTICAS */}
            <Text style={styles.subtitle}>Características</Text>
            <Text style={styles.text}>• Alta velocidad de lectura y escritura</Text>
            <Text style={styles.text}>• Sin partes mecánicas</Text>
            <Text style={styles.text}>• Menor consumo de energía</Text>
            <Text style={styles.text}>• Mayor resistencia a golpes</Text>

            {/* RENDIMIENTO */}
            <Text style={styles.subtitle}>Rendimiento</Text>
            <Text style={styles.text}>
                Un SSD puede alcanzar velocidades de entre 500 MB/s (SATA) hasta más de
                3500 MB/s (NVMe), lo que permite iniciar sistemas operativos y aplicaciones
                en segundos.
            </Text>

            {/* USOS */}
            <Text style={styles.subtitle}>¿Cuándo usarlo?</Text>
            <Text style={styles.text}>• Sistemas operativos (Windows, Linux)</Text>
            <Text style={styles.text}>• Aplicaciones y videojuegos</Text>
            <Text style={styles.text}>• Equipos que requieren alto rendimiento</Text>

            {/* DESVENTAJAS */}
            <Text style={styles.subtitle}>Desventajas</Text>
            <Text style={styles.text}>• Mayor costo por gigabyte</Text>
            <Text style={styles.text}>• Vida útil limitada por ciclos de escritura</Text>

            {/* CONCLUSION */}
            <Text style={styles.subtitle}>Conclusión</Text>
            <Text style={styles.text}>
                El SSD es actualmente la mejor opción para velocidad y rendimiento,
                convirtiéndose en el estándar moderno para computadoras y dispositivos.
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
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        color: "#00ffff",
        fontSize: 18,
        marginTop: 15,
        marginBottom: 5,
        fontWeight: "600",
    },
    text: {
        color: "#fff",
        fontSize: 15,
        lineHeight: 22,
    },
});