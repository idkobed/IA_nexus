import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RAID10() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>🧱 ¿Qué es RAID 10?</Text>

            <Text style={styles.text}>
                El RAID 10 (a veces llamado "RAID 1+0") es considerado el "Rey del rendimiento y la seguridad". Es una configuración híbrida que combina lo mejor de dos mundos: la velocidad del RAID 0 y la seguridad del RAID 1.

                Para implementarlo, necesitas un mínimo de cuatro discos físicos.
            </Text>

            {/* ⚙️ Funcionamiento */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona?</Text>

            <Text style={styles.text}>
                Nivel RAID 1 (Espejo): Primero, el sistema crea dos parejas de espejos. Cada pareja copia exactamente lo mismo en sus dos discos.

                Nivel RAID 0 (Striping): Luego, el sistema trata a esas dos parejas de espejos como dos bloques y reparte los datos entre ellos (striping) para aumentar la velocidad.
            </Text>

            <Text style={styles.text}>
                Ejemplo:
                {"\n"}Disco 1 y 2 → espejo
                {"\n"}Disco 3 y 4 → espejo
                {"\n"}Luego → se distribuyen datos entre ambos pares
            </Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas</Text>

            <Text style={styles.text}>Redundancia excelente: Puedes perder un disco de cada pareja sin perder datos. El sistema sigue funcionando perfectamente.</Text>
            <Text style={styles.text}>Rendimiento superior: Combina la velocidad de lectura y escritura de RAID 0 con la seguridad de RAID 1.</Text>
            <Text style={styles.text}>Tolerancia a fallos: Puede sobrevivir al fallo de un disco en cada par de espejos.</Text>
            <Text style={styles.text}>Reconstrucción rápida: En caso de fallo, solo se necesita reconstruir los datos del disco dañado, no de todo el array.</Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Desventajas</Text>

            <Text style={styles.text}>• Requiere mínimo 4 discos</Text>
            <Text style={styles.text}>• Alto costo</Text>
            <Text style={styles.text}>• Solo se usa el 50% del almacenamiento</Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usar RAID 10?</Text>

            <Text style={styles.text}>
                Entornos de Misión Crítica: Servidores de bases de datos de alto tráfico (como SQL Server, Oracle o aplicaciones de transacciones financieras) donde no puedes permitirte ni una caída de rendimiento ni una pérdida de datos.

                Virtualización: Es el estándar recomendado para hospedar máquinas virtuales, ya que las cargas de trabajo de lectura/escritura son constantes y exigentes.
            </Text>

            {/* 🆚 Idea clave */}
            <Text style={styles.subtitle}>🆚 Idea clave</Text>

            <Text style={styles.text}>
                RAID 10 = velocidad + seguridad (la mejor combinación)
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