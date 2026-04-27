import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function APFS() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>🍏 ¿Qué es APFS?</Text>

      <Text style={styles.text}>
        El APFS (Apple File System) es el sistema de archivos exclusivo y optimizado que utiliza Apple para todos sus dispositivos modernos (Mac, iPhone, iPad, Apple Watch y Apple TV). Fue introducido en 2017 para reemplazar al antiguo sistema HFS+ (o Mac OS Extended).

        Si usas hardware de Apple, APFS es el estándar bajo el cual se gestiona toda tu información.
      </Text>

      {/* ⚙️ Características */}
      <Text style={styles.subtitle}>⚙️ Características</Text>

      <Text style={styles.text}>• Optimizado para SSD</Text>
      <Text style={styles.text}>• Sistema de cifrado integrado</Text>
      <Text style={styles.text}>• Alta velocidad de lectura y escritura</Text>
      <Text style={styles.text}>• Gestión eficiente del espacio</Text>

      {/* 🚀 Ventajas */}
      <Text style={styles.subtitle}>🚀 Ventajas</Text>

      <Text style={styles.text}>
        Instantáneas (Snapshots): Es una de sus funciones más potentes. APFS puede crear una "foto" instantánea de tu sistema en un momento dado. Esto permite que, si realizas una actualización de macOS o instalas un software que falla, puedas revertir el sistema a ese estado exacto en segundos.
      </Text>
      <Text style={styles.text}>
        Cifrado nativo: APFS está diseñado desde cero con el cifrado como prioridad. Permite cifrar unidades completas o archivos individuales de forma muy eficiente, protegiendo tus datos si el dispositivo se pierde o es robado.
      </Text>
      <Text style={styles.text}>
        Clonación de archivos: Permite copiar archivos o carpetas de forma casi instantánea sin ocupar espacio adicional. Es como si crearas un acceso directo inteligente que solo ocupa espacio cuando modificas una de las copias.
      </Text>

      {/* ⚠️ Desventajas */}
      <Text style={styles.subtitle}>⚠️ Desventajas</Text>

      <Text style={styles.text}>
        • No es compatible con Windows de forma nativa
      </Text>
      <Text style={styles.text}>
        • Uso limitado fuera del ecosistema Apple
      </Text>

      {/* 🧠 Uso */}
      <Text style={styles.subtitle}>🧠 ¿Cuándo usar APFS?</Text>

      <Text style={styles.text}>
        Se utiliza en todos los dispositivos Apple modernos como iPhone, MacBook y iPad,
        especialmente en unidades SSD.
      </Text>

      {/* 🆚 Comparación */}
      <Text style={styles.subtitle}>🆚 Comparación rápida</Text>

      <Text style={styles.text}>
        • APFS: optimizado para Apple y SSD
      </Text>
      <Text style={styles.text}>
        • NTFS: optimizado para Windows
      </Text>
      <Text style={styles.text}>
        • EXT4: optimizado para Linux
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