import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HDD() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>💾 HDD</Text>

            {/* INTRO */}
            <Text style={styles.subtitle}>¿Qué es?</Text>
            <Text style={styles.text}>
                Un HDD (siglas de Hard Disk Drive), o Unidad de Disco Duro, es un dispositivo de almacenamiento de datos que utiliza un sistema de grabación magnética para guardar archivos digitales de forma permanente.
                A diferencia de las memorias RAM, que borran su contenido al apagar el equipo, el HDD mantiene la información intacta gracias a sus componentes físicos.
            </Text>

            {/* FUNCIONAMIENTO */}
            <Text style={styles.subtitle}>¿Cómo funciona?</Text>
            <Text style={styles.text}>
                Un disco duro es, esencialmente, una pieza de ingeniería mecánica. Se compone de varios elementos críticos:

                Platos (Discos): Son discos circulares que giran a altas velocidades (comúnmente a 5,400 o 7,200 RPM). Están recubiertos de un material magnético donde se guardan los bits.

                Cabezal de Lectura/Escritura: Es una pieza pequeña que "vuela" sobre la superficie de los platos sin llegar a tocarlos. Su función es leer o modificar el campo magnético para registrar los datos.

                Brazo Actuador: Mueve los cabezales a través de los platos para acceder a diferentes sectores del disco, de forma similar a como funciona un tocadiscos de vinilo.
            </Text>

            {/* COMPONENTES */}
            <Text style={styles.subtitle}>Componentes</Text>
            <Text style={styles.text}>• Platos magnéticos</Text>
            <Text style={styles.text}>• Cabezal de lectura/escritura</Text>
            <Text style={styles.text}>• Brazo actuador</Text>

            {/* CARACTERISTICAS */}
            <Text style={styles.subtitle}>Características</Text>

            <Text style={styles.text}>
                •    Capacidad de Almacenamiento: Los HDDs suelen ofrecer mucha más capacidad por un precio menor en comparación con los SSD. Es común encontrarlos en tamaños de 1 TB hasta 20 TB o más.
            </Text>
            <Text style={styles.text}>
                •    Vida Útil: Son ideales para el almacenamiento de archivos que no se consultan constantemente (como copias de seguridad, fotos o videos), ya que no tienen el límite de ciclos de escritura que afecta a las memorias flash.
            </Text>

            <Text style={styles.text}>
                •    Fragilidad: Al tener partes mecánicas móviles, son muy sensibles a los golpes o movimientos bruscos mientras están funcionando, lo que puede causar que el cabezal raye el plato y se pierdan datos.
            </Text>

            <Text style={styles.text}>
                Velocidad: Son considerablemente más lentos que los SSD. Un HDD promedio tiene velocidades de transferencia de entre 80 y 160 MB/s, lo que puede generar "cuellos de botella" al cargar sistemas operativos modernos o juegos pesados.
            </Text>

            {/* RENDIMIENTO */}
            <Text style={styles.subtitle}>Rendimiento</Text>
            <Text style={styles.text}>
                Un HDD tiene velocidades entre 80 MB/s y 160 MB/s, lo que lo hace más lento
                en comparación con tecnologías modernas como SSD o NVMe.
            </Text>

            {/* USOS */}
            <Text style={styles.subtitle}>¿Cuándo usarlo?</Text>
            <Text style={styles.text}>
                • Almacenamiento masivo
            </Text>
            <Text style={styles.text}>
                • Copias de seguridad (backups)
            </Text>
            <Text style={styles.text}>
                • Servidores NAS
            </Text>

            {/* CONCLUSION */}
            <Text style={styles.subtitle}>Conclusión</Text>
            <Text style={styles.text}>
                El HDD sigue siendo una opción económica y confiable para almacenar grandes
                cantidades de datos, aunque ha sido superado en velocidad por los SSD.
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