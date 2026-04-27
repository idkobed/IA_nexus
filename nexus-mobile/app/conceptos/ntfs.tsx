import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function NTFS() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>🧠 ¿Qué es NTFS?</Text>

            <Text style={styles.text}>
                El NTFS (New Technology File System) es el sistema de archivos estándar que utiliza el sistema operativo Windows (de Microsoft). Es la estructura que permite que el sistema operativo organice, almacene y recupere archivos en un dispositivo de almacenamiento (como un disco duro o una unidad SSD).
            </Text>

            <Text style={styles.subtitle}>⚙️ Características</Text>
            <Text style={styles.text}>Seguridad y Permisos: Permite establecer permisos de acceso a nivel de archivo y carpeta (puedes decidir qué usuarios pueden leer, escribir o ejecutar ciertos archivos).</Text>
            <Text style={styles.text}>Registro de diario (Journaling): Esta es una de sus funciones más valiosas. NTFS lleva un registro de los cambios que se van a realizar en el disco. Si el equipo se apaga repentinamente (por un corte de luz o error), el sistema puede consultar este "diario" al reiniciarse para reparar errores automáticamente y evitar la pérdida de datos.</Text>
            <Text style={styles.text}>Compresión y Cifrado: Permite comprimir archivos individuales o carpetas para ahorrar espacio y cifrarlos (EFS - Encrypting File System) para proteger la privacidad de los datos.</Text>
            <Text style={styles.text}>Tamaño de archivos y volúmenes: Soporta archivos y particiones de tamaños mucho mayores que los sistemas más antiguos como FAT32.</Text>

            <Text style={styles.subtitle}>⚠️ Desventajas</Text>
            <Text style={styles.text}>Compatibilidad Limitada: Es el sistema nativo de Windows. Si bien macOS puede leer unidades NTFS, no puede escribir en ellas de forma nativa (requiere software adicional). Linux tiene soporte de lectura/escritura, pero a veces puede ser menos estable que en Windows.</Text>
            <Text style={styles.text}>Fragmentación: Con el tiempo, los archivos pueden fragmentarse (quedar divididos en trozos por el disco), lo que puede ralentizar el rendimiento. Requiere desfragmentación periódica (aunque en las unidades SSD modernas esto es menos problemático).</Text>

            <Text style={styles.subtitle}>🧠 Uso</Text>
            <Text style={styles.text}>
                Es el sistema de archivos por defecto para la mayoría de los discos duros y unidades SSD en Windows. Es ideal para el disco principal del sistema operativo y para unidades de almacenamiento internas que se usarán principalmente con computadoras Windows.
            </Text>
        </ScrollView>
    );
}

const styles = {
    container: { flex: 1, backgroundColor: "#050510", padding: 20 },
    title: { color: "#00ffff", fontSize: 24, marginBottom: 15 },
    subtitle: { color: "#00ffff", fontSize: 18, marginTop: 20 },
    text: { color: "#fff", marginBottom: 8 },
};