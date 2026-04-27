import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { BlurView } from "expo-blur";

const tech = [
    {
        name: "HDD",
        icon: "💾",
        speed: 20,
        latency: 80,
        durability: 40,
        price: 90,
    },
    {
        name: "SSD",
        icon: "⚡",
        speed: 60,
        latency: 60,
        durability: 80,
        price: 60,
    },
    {
        name: "NVMe",
        icon: "🚀",
        speed: 100,
        latency: 100,
        durability: 90,
        price: 40,
    },
];

export default function Comparador() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (name: string) => {
        if (selected.includes(name)) {
            setSelected(selected.filter(s => s !== name));
        } else if (selected.length < 2) {
            setSelected([...selected, name]);
        }
    };

    const getSelectedData = () =>
        tech.filter(t => selected.includes(t.name));

    const getRecommendation = () => {
        if (selected.length !== 2) return "Selecciona 2 tecnologías";

        if (selected.includes("NVMe")) {
            return "🔥 NVMe es ideal para gaming y alto rendimiento";
        }

        if (selected.includes("SSD")) {
            return "⚡ SSD es balance perfecto entre precio y velocidad";
        }

        return "💾 HDD es mejor para almacenamiento masivo";
    };

    const Bar = ({ label, value }: any) => (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.barBg}>
                <View style={[styles.barFill, { width: `${value}%` }]} />
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📊 Dashboard Comparador</Text>

            {/* 🔘 SELECTOR */}
            <View style={styles.selector}>
                {tech.map((t) => (
                    <TouchableOpacity
                        key={t.name}
                        style={[
                            styles.btn,
                            selected.includes(t.name) && styles.btnActive,
                        ]}
                        onPress={() => toggle(t.name)}
                    >
                        <Text style={styles.btnText}>{t.icon} {t.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 💎 CARDS GLASS */}
            {getSelectedData().map((item, i) => (
                <Animated.View entering={FadeInUp.delay(i * 200)} key={item.name}>
                    <BlurView intensity={40} tint="dark" style={styles.card}>
                        <Text style={styles.cardTitle}>
                            {item.icon} {item.name}
                        </Text>

                        <Bar label="Velocidad" value={item.speed} />
                        <Bar label="Latencia" value={item.latency} />
                        <Bar label="Durabilidad" value={item.durability} />
                        <Bar label="Precio" value={item.price} />
                    </BlurView>
                </Animated.View>
            ))}

            {/* 🧠 RECOMENDACIÓN */}
            <BlurView intensity={50} tint="dark" style={styles.reco}>
                <Text style={styles.recoText}>{getRecommendation()}</Text>
            </BlurView>
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
        fontSize: 22,
        marginBottom: 20,
        fontWeight: "bold",
    },

    selector: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    btn: {
        backgroundColor: "#0a0a1a",
        padding: 10,
        borderRadius: 10,
    },
    btnActive: {
        backgroundColor: "#00ffff",
    },
    btnText: {
        color: "#fff",
    },

    card: {
        borderRadius: 20,
        padding: 15,
        marginBottom: 15,
        overflow: "hidden",
    },
    cardTitle: {
        color: "#00ffff",
        fontSize: 18,
        marginBottom: 10,
    },

    label: {
        color: "#aaa",
        fontSize: 12,
    },
    barBg: {
        height: 8,
        backgroundColor: "#111",
        borderRadius: 10,
    },
    barFill: {
        height: 8,
        backgroundColor: "#00ffff",
        borderRadius: 10,
    },

    reco: {
        marginTop: 20,
        padding: 15,
        borderRadius: 15,
        overflow: "hidden",
    },
    recoText: {
        color: "#fff",
        fontSize: 14,
    },
});