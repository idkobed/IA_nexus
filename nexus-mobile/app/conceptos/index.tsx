import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeOut, SlideInLeft } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

export default function Biblioteca() {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Biblioteca</Text>

      {/* 🔹 HDD vs SSD vs NVMe */}
      <TouchableOpacity style={styles.folder} onPress={() => toggleSection("memoria")}>
        <Text style={styles.folderText}>
          {openSection === "memoria" ? "▼" : "▶"} HDD vs SSD vs NVMe
        </Text>
      </TouchableOpacity>

      {openSection === "memoria" && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.sub}>
          {[
            { name: "HDD", route: "/conceptos/hdd", icon: "save-outline" },
            { name: "SSD", route: "/conceptos/ssd", icon: "flash-outline" },
            { name: "NVMe", route: "/conceptos/nvme", icon: "rocket-outline" },
            { name: "Comparador", route: "/conceptos/comparador", icon: "git-compare-outline" },
          ].map((item, i) => (
            <Animated.View key={i} entering={SlideInLeft.delay(i * 80)}>
              <TouchableOpacity onPress={() => router.push(item.route as any)}>
                <View style={styles.row}>
                  <Ionicons name={item.icon as any} size={18} color="#00ffff" />
                  <Text style={styles.item}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </Animated.View>
      )}

      {/* 🔹 SISTEMAS DE ARCHIVOS */}
      <TouchableOpacity style={styles.folder} onPress={() => toggleSection("sistemas")}>
        <Text style={styles.folderText}>
          {openSection === "sistemas" ? "▼" : "▶"} Sistemas de archivos
        </Text>
      </TouchableOpacity>

      {openSection === "sistemas" && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.sub}>
          {[
            { name: "FAT32", route: "/conceptos/fat32", icon: "save-outline" },
            { name: "NTFS", route: "/conceptos/ntfs", icon: "hardware-chip-outline" },
            { name: "exFAT", route: "/conceptos/exfat", icon: "disc-outline" },
            { name: "APFS", route: "/conceptos/apfs", icon: "logo-apple" },
            { name: "EXT4", route: "/conceptos/ext4", icon: "terminal-outline" },
          ].map((fs, i) => (
            <Animated.View key={i} entering={SlideInLeft.delay(i * 60)}>
              <TouchableOpacity onPress={() => router.push(fs.route as any)}>
                <View style={styles.row}>
                  <Ionicons name={fs.icon as any} size={18} color="#00ffff" />
                  <Text style={styles.item}>{fs.name}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </Animated.View>
      )}

      {/* 🔹 RAID */}
      <TouchableOpacity style={styles.folder} onPress={() => toggleSection("raid")}>
        <Text style={styles.folderText}>
          {openSection === "raid" ? "▼" : "▶"} RAID
        </Text>
      </TouchableOpacity>

      {openSection === "raid" && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.sub}>
          {[
            { name: "RAID 0", route: "/conceptos/raid0" },
            { name: "RAID 1", route: "/conceptos/raid1" },
            { name: "RAID 5", route: "/conceptos/raid5" },
            { name: "RAID 10", route: "/conceptos/raid10" },
          ].map((raid, i) => (
            <Animated.View key={i} entering={SlideInLeft.delay(i * 60)}>
              <TouchableOpacity onPress={() => router.push(raid.route as any)}>
                <View style={styles.row}>
                  <Ionicons name="layers-outline" size={18} color="#00ffff" />
                  <Text style={styles.item}>{raid.name}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </Animated.View>
      )}

      {/* 🔹 TENDENCIAS */}
      <TouchableOpacity style={styles.folder} onPress={() => toggleSection("tendencias")}>
        <Text style={styles.folderText}>
          {openSection === "tendencias" ? "▼" : "▶"} Tendencias
        </Text>
      </TouchableOpacity>

      {openSection === "tendencias" && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.sub}>
          {[
            { name: "Almacenamiento en la nube", route: "/conceptos/cloud", icon: "cloud-outline" },
            { name: "Edge Storage", route: "/conceptos/edge", icon: "globe-outline" },
          ].map((trend, i) => (
            <Animated.View key={i} entering={SlideInLeft.delay(i * 60)}>
              <TouchableOpacity onPress={() => router.push(trend.route as any)}>
                <View style={styles.row}>
                  <Ionicons name={trend.icon as any} size={18} color="#00ffff" />
                  <Text style={styles.item}>{trend.name}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </Animated.View>
      )}
    </View>
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
    fontWeight: "bold",
    marginBottom: 20,
  },
  folder: {
    padding: 14,
    backgroundColor: "#0a0a1a",
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#00ffff22",
  },
  folderText: {
    color: "#00ffff",
    fontSize: 16,
    fontWeight: "600",
  },
  sub: {
    marginLeft: 15,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  item: {
    color: "#fff",
    paddingVertical: 10,
    fontSize: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: "#00ffff33",
  },
});