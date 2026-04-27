import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Cloud() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>☁️ ¿Qué es el Cloud Computing?</Text>

            <Text style={styles.text}>
                El almacenamiento en la nube es un modelo de computación donde los datos
                y recursos no residen en tu hardware local, sino en una red global de
                servidores remotos gestionados por proveedores (CSP).
            </Text>

            {/* ⚙️ Cómo funciona */}
            <Text style={styles.subtitle}>⚙️ ¿Cómo funciona realmente?</Text>

            {/*  */}
            <Text style={styles.text}>
                La base es la virtualización: una capa de software que divide servidores
                físicos en múltiples "servidores virtuales". Tus archivos se fragmentan,
                se cifran mediante protocolos (HTTPS/TLS) y se replican en múltiples
                nodos geográficos para garantizar redundancia.
            </Text>

            {/* 🚀 Ventajas */}
            <Text style={styles.subtitle}>🚀 Ventajas Técnicas</Text>
            <Text style={styles.text}>• Acceso ubicuo: Disponibilidad total desde cualquier red.</Text>
            <Text style={styles.text}>• Elasticidad: Ajuste automático de recursos según la demanda.</Text>
            <Text style={styles.text}>• Resiliencia: Redundancia geográfica ante fallos físicos.</Text>
            <Text style={styles.text}>• Colaboración: Sincronización en tiempo real multi-usuario.</Text>

            {/* 🧠 Tipos de Nube */}
            <Text style={styles.subtitle}>🧠 Tipos de Nube</Text>
            {/*  */}
            <Text style={styles.text}>• Pública: Infraestructura compartida (AWS, Azure, GCP).</Text>
            <Text style={styles.text}>• Privada: Infraestructura exclusiva para una sola entidad.</Text>
            <Text style={styles.text}>• Híbrida: Combinación de entornos públicos y privados.</Text>

            {/* 🛠️ Modelos de servicio */}
            <Text style={styles.subtitle}>🛠️ Modelos de Servicio (La Pirámide)</Text>
            {/*  */}
            <Text style={styles.text}>• IaaS: Infraestructura pura (Servidores, Redes, Almacenamiento).</Text>
            <Text style={styles.text}>• PaaS: Plataforma de desarrollo (Entorno de ejecución, Bases de datos).</Text>
            <Text style={styles.text}>• SaaS: Software final para el usuario (Gmail, Salesforce, Slack).</Text>

            {/* ⚠️ Retos */}
            <Text style={styles.subtitle}>⚠️ Retos y Desventajas</Text>
            <Text style={styles.text}>• Latencia: Dependencia estricta de la calidad de la conexión.</Text>
            <Text style={styles.text}>• Responsabilidad compartida: El proveedor protege la nube, tú proteges tus datos y accesos.</Text>
            <Text style={styles.text}>• Vendor Lock-in: Complejidad técnica al intentar migrar entre proveedores distintos.</Text>

            <Text style={styles.subtitle}>💡 Resumen ejecutivo</Text>
            <Text style={styles.text}>
                El Cloud Computing convierte la capacidad de cómputo en un "servicio público"
                (utility computing), permitiendo escalar proyectos sin preocuparse por la
                obsolescencia del hardware físico.
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