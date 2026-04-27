import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Cloud() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>☁️ ¿Qué es el Cloud Computing?</Text>

            <Text style={styles.text}>
                El almacenamiento en la nube es un modelo de computación en el que los datos
                y los recursos informáticos no residen en tu hardware local (discos duros o
                servidores físicos propios), sino en una red global de servidores remotos.
                Estos servidores están interconectados y actúan como un ecosistema único
                gestionado por proveedores de servicios en la nube (CSP).
            </Text>

            {/* ⚙️ Cómo funciona */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona realmente?</Text>

            <Text style={styles.text}>
                La base es la virtualización: los proveedores dividen los servidores físicos
                en múltiples "servidores virtuales" mediante software. Esto permite que los
                datos viajen a través de internet mediante protocolos seguros (como HTTPS/TLS)
                hacia centros de datos masivos.
            </Text>

            <Text style={styles.text}>
                Estos centros utilizan sistemas de archivos distribuidos que fragmentan tus
                archivos en pequeñas partes, las replican en diferentes ubicaciones físicas
                para evitar pérdidas y las reconstruyen instantáneamente cuando solicitas
                acceder a ellos.
            </Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas Técnicas</Text>

            <Text style={styles.text}>• Acceso ubicuo: Disponibilidad total desde cualquier dispositivo y geografía.</Text>
            <Text style={styles.text}>• Elasticidad y Escalabilidad: Puedes ajustar la capacidad en tiempo real (pagas solo por lo que usas).</Text>
            <Text style={styles.text}>• Resiliencia: La redundancia geográfica asegura que tus datos sigan vivos aunque un centro de datos falle.</Text>
            <Text style={styles.text}>• Colaboración: Permite que múltiples usuarios editen un mismo recurso simultáneamente.</Text>

            {/* ⚠️ Desventajas */}
            <Text style={styles.subtitle}>⚠️ Retos y Desventajas</Text>

            <Text style={styles.text}>• Latencia: Dependes de la velocidad y estabilidad de tu conexión a internet.</Text>
            <Text style={styles.text}>• Seguridad compartida: Aunque el proveedor es seguro, la configuración de permisos recae en ti (modelo de responsabilidad compartida).</Text>
            <Text style={styles.text}>• Vendor Lock-in: Puede ser difícil migrar datos de un proveedor a otro si el formato es propietario.</Text>

            {/* 🧠 Tipos */}
            <Text style={styles.subtitle}>🧠 Tipos de Nube</Text>

            <Text style={styles.text}>• Pública: Infraestructura compartida entre múltiples clientes (ej: AWS, Google Drive, Azure).</Text>
            <Text style={styles.text}>• Privada: Infraestructura exclusiva para una sola organización, ofreciendo mayor control y seguridad.</Text>
            <Text style={styles.text}>• Híbrida: Conecta nubes públicas y privadas, permitiendo mover datos según la necesidad de seguridad o costo.</Text>

            {/* 🛠️ Modelos de servicio */}
            <Text style={styles.subtitle}>🛠️ Modelos de servicio</Text>

            <Text style={styles.text}>• SaaS (Software as a Service): Aplicaciones completas vía web (ej: Gmail, Slack).</Text>
            <Text style={styles.text}>• PaaS (Platform as a Service): Herramientas para desarrolladores (ej: Heroku, Vercel).</Text>
            <Text style={styles.text}>• IaaS (Infrastructure as a Service): Alquiler de servidores virtuales y redes (ej: EC2 de Amazon).</Text>

            {/* 🆚 Idea clave */}
            <Text style={styles.subtitle}>💡 Resumen ejecutivo</Text>

            <Text style={styles.text}>
                El Cloud Computing transforma el hardware en una utilidad (como el agua o la
                electricidad): no necesitas poseer el generador, solo pagas por la energía
                que consumes, eliminando costos de mantenimiento y obsolescencia tecnológica.
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
        textAlign: 'center'
    },
    subtitle: {
        color: "#00ffff",
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333"
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 8,
        lineHeight: 22,
        textAlign: 'justify'
    },
});