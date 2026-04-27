import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RAID5() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>🧱 ¿Qué es RAID 5?</Text>

            <Text style={styles.text}>
                El RAID 5 es el equilibrio más popular en entornos empresariales y servidores. Combina el rendimiento del RAID 0 (distribución de datos) con la seguridad del RAID 1 (tolerancia a fallos), pero de una manera mucho más eficiente en cuanto a espacio.

                Para que funcione, necesitas un mínimo de tres discos físicos.
            </Text>

            {/* ⚙️ Funcionamiento */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona?</Text>

            <Text style={styles.text}>
                A diferencia del RAID 1, donde se duplican los datos, el RAID 5 utiliza paridad.

                Los datos se dividen y se reparten entre los discos (como en RAID 0).

                Además, se calcula un bit de paridad (una especie de suma de verificación matemática) para cada bloque de datos.

                Estos bits de paridad se distribuyen de forma rotativa entre todos los discos.

                Si un disco falla, el sistema utiliza los datos y los bits de paridad restantes en los otros discos para reconstruir matemáticamente la información del disco perdido en tiempo real.
            </Text>

            <Text style={styles.text}>
                Ejemplo:
                {"\n"}Disco 1 → Datos A
                {"\n"}Disco 2 → Datos B
                {"\n"}Disco 3 → Paridad
            </Text>

            <Text style={styles.text}>
                Si un disco falla, los datos pueden reconstruirse usando la paridad.
            </Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas</Text>

            <Text style={styles.text}>Buena velocidad de lectura: Al distribuir los datos en varios discos, las operaciones de lectura pueden ser muy rápidas, ya que el sistema puede leer de múltiples discos simultáneamente.</Text>
            <Text style={styles.text}>Tolerancia a fallos: Puede sobrevivir al fallo de un solo disco. Si un segundo disco falla durante el proceso de reconstrucción, perderías toda la información.</Text>
            <Text style={styles.text}>Uso eficiente del almacenamiento: Solo se pierde el equivalente a un disco para paridad, independientemente del número de discos en el array.</Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Desventajas</Text>

            <Text style={styles.text}>• Escritura más lenta (por la paridad)</Text>
            <Text style={styles.text}>• Requiere mínimo 3 discos</Text>
            <Text style={styles.text}>• Reconstrucción puede ser lenta</Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usar RAID 5?</Text>

            <Text style={styles.text}>
                Almacenamiento de archivos y servidores de bases de datos: Es excelente para aplicaciones donde la lectura es frecuente y necesitas un buen rendimiento, pero donde el costo por GB es importante.
                Servidores de archivos: Ideal para entornos donde múltiples usuarios necesitan acceder a archivos de forma rápida y segura.
            </Text>

            {/* 🆚 Idea clave */}
            <Text style={styles.subtitle}>🆚 Idea clave</Text>

            <Text style={styles.text}>
                RAID 5 = equilibrio entre velocidad y seguridad
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