import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function FAT32() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>💾 ¿Qué es FAT32?</Text>

            <Text style={styles.text}>
                El FAT32 (File Allocation Table de 32 bits) es uno de los sistemas de archivos más antiguos y universales que todavía se utilizan hoy en día. Fue introducido por Microsoft con Windows 95 OSR2 como una mejora del antiguo FAT16 para soportar discos duros más grandes.

                Actualmente, su mayor valor no es el rendimiento o la seguridad, sino la compatibilidad.
            </Text>

            {/* ⚙️ Funcionamiento */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona?</Text>

            <Text style={styles.text}>
                Organiza los archivos mediante una tabla que indica dónde se encuentran los datos
                en el disco.
            </Text>

            {/* 🚀 Características */}
            <Text style={styles.subtitle}>🚀 Características</Text>

            <Text style={styles.text}>Compatibilidad universal: Casi cualquier dispositivo que tenga un puerto USB puede leer y escribir archivos en una unidad formateada en FAT32: consolas de videojuegos (PS4, Xbox, Switch), Smart TVs, sistemas de audio para autos, impresoras, cámaras fotográficas, dispositivos Android, Mac y Linux.</Text>
            <Text style={styles.text}>Simplicidad: Es un sistema de archivos muy básico y fácil de usar. No requiere software adicional ni configuraciones complejas.</Text>
            <Text style={styles.text}>Ligero: Consume muy pocos recursos del sistema, lo que lo hace ideal para dispositivos con memoria limitada.</Text>

            {/* ⚠️ Limitaciones */}
            <Text style={styles.subtitle}>⚠️ Limitaciones</Text>

            <Text style={styles.text}>Límite de tamaño de archivo (4 GB): No puedes copiar un archivo individual que pese más de 4 GB. Aunque tengas un pendrive de 64 GB, si intentas copiar una película de 5 GB, el sistema te dará un error de "archivo demasiado grande", aunque haya espacio libre.</Text>
            <Text style={styles.text}>Sin permisos ni seguridad: No permite establecer permisos de usuario ni cifrar archivos. Cualquiera que tenga acceso físico a la unidad puede leer o borrar todo el contenido.</Text>
            <Text style={styles.text}>Fragmentación: Los archivos tienden a fragmentarse con el tiempo, lo que puede ralentizar el acceso a los datos.</Text>

            {/* 🧠 Uso */}
            <Text style={styles.subtitle}>🧠 ¿Cuándo usar FAT32?</Text>

            <Text style={styles.text}>
                Dispositivos de almacenamiento extraíbles pequeños: Memorias USB de 8 GB, 16 GB o 32 GB.
            </Text>
            <Text style={styles.text}>
                Tarjetas de memoria: Para cámaras fotográficas, drones o consolas portátiles.
            </Text>
            <Text style={styles.text}>
                Compatibilidad máxima: Cuando necesitas que el dispositivo funcione en cualquier sistema operativo o dispositivo.
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