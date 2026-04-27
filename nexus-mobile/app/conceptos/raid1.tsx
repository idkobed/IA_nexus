import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RAID1() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>🧱 ¿Qué es RAID 1?</Text>

            <Text style={styles.text}>
                El RAID 1 (conocido como mirroring o duplicación) es la configuración opuesta al RAID 0. Mientras que el RAID 0 prioriza la velocidad sacrificando la seguridad, el RAID 1 prioriza la seguridad y la disponibilidad de los datos mediante la creación de una copia exacta (espejo) de la información.
            </Text>

            {/* ⚙️ Funcionamiento */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona?</Text>

            <Text style={styles.text}>
                En un RAID 1, todos los datos que escribes en un disco se escriben simultáneamente en el otro.

                Si tienes dos discos de 1 TB, el sistema los trata como una sola unidad de 1 TB.

                Cada archivo que guardas se copia en ambos discos al mismo tiempo.
            </Text>

            <Text style={styles.text}>
                Ejemplo:
                {"\n"}Disco 1 → Datos A
                {"\n"}Disco 2 → Datos A (copia exacta)
            </Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas</Text>

            <Text style={styles.text}>Tolerancia a fallos: Si un disco físico muere por completo, no pierdes nada. Puedes seguir trabajando con el segundo disco sin interrupciones. Una vez que reemplaces el disco dañado, el sistema automáticamente copia los datos del disco sano al nuevo para restaurar la redundancia.</Text>
            <Text style={styles.text}>Velocidad de lectura: Puede mejorar ligeramente la velocidad de lectura, ya que el sistema puede extraer datos de ambos discos al mismo tiempo, pero la velocidad de escritura es limitada, ya que debe escribir la misma información dos veces.</Text>
            <Text style={styles.text}>Fácil recuperación: Si un disco falla, puedes simplemente reemplazarlo y el sistema reconstruirá los datos automáticamente.</Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Desventajas</Text>

            <Text style={styles.text}>Usa el doble de espacio: Si tienes dos discos de 1 TB, solo tendrás 1 TB de capacidad utilizable. El otro 50% se usa para la réplica.</Text>
            <Text style={styles.text}>Menor capacidad útil</Text>
            <Text style={styles.text}>No mejora mucho la velocidad de escritura</Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usar RAID 1?</Text>

            <Text style={styles.text}>
                Servidores de archivos y bases de datos: Donde la disponibilidad es crítica y no puedes permitirte un minuto de inactividad.
            </Text>

            <Text style={styles.text}>
                Estaciones de trabajo críticas: Para usuarios que manejan información sensible y no pueden permitirse perder datos.
            </Text>

            <Text style={styles.text}>
                Sistemas operativos: Para garantizar que el sistema arranque siempre, incluso si un disco falla.
            </Text>

            {/* 🆚 Comparación */}
            <Text style={styles.subtitle}>🆚 Idea clave</Text>

            <Text style={styles.text}>
                RAID 1 = máxima seguridad pero menor capacidad
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