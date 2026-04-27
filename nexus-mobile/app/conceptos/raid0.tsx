import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RAID0() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>🧱 ¿Qué es RAID 0?</Text>

            <Text style={styles.text}>
                El RAID 0 (conocido como striping o distribución) es una configuración de almacenamiento que combina dos o más discos físicos en una sola unidad lógica. Su objetivo principal no es la seguridad, sino el rendimiento extremo.

                En lugar de duplicar o proteger tus datos, RAID 0 los divide en trozos y los reparte simultáneamente entre todos los discos del conjunto.
            </Text>

            {/* ⚙️ Funcionamiento */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona?</Text>

            <Text style={styles.text}>
                Imagina que tienes un archivo grande y dos discos. RAID 0 divide ese archivo en dos partes:
                La Parte A se escribe en el Disco 1.

                La Parte B se escribe al mismo tiempo en el Disco 2.

                Al leer o escribir, el sistema utiliza el ancho de banda de ambos discos a la vez, lo que multiplica la velocidad de transferencia.
            </Text>

            <Text style={styles.text}>
                Ejemplo:
                {"\n"}Disco 1 → Parte A
                {"\n"}Disco 2 → Parte B
            </Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas</Text>

            <Text style={styles.text}>• Muy alta velocidad</Text>
            <Text style={styles.text}>• Mejor rendimiento en lectura y escritura</Text>
            <Text style={styles.text}>• Aprovecha múltiples discos</Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Desventajas</Text>

            <Text style={styles.text}>
                • NO tiene redundancia
            </Text>
            <Text style={styles.text}>
                • Si un disco falla → se pierden TODOS los datos
            </Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usar RAID 0?</Text>

            <Text style={styles.text}>
                Solo para archivos temporales o de trabajo: Úsalo en entornos donde la velocidad sea crítica y la pérdida de datos sea aceptable o manejable (por ejemplo, como disco de "scratch" o caché para edición de video, donde los archivos originales están guardados en otro lugar seguro).
            </Text>

            <Text style={styles.text}>
                No para datos críticos: Nunca uses RAID 0 para almacenar información importante que no puedas permitirte perder (fotos familiares, documentos financieros, etc.).
            </Text> 
            

            {/* 🆚 Comparación */}
            <Text style={styles.subtitle}>🆚 Idea clave</Text>

            <Text style={styles.text}>
                RAID 0 = velocidad máxima pero sin seguridad
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