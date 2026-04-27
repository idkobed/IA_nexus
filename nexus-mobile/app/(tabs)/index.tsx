import { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
}

const SUGGESTION_CARDS = [
  {
    title: "Almacenamiento\nen la nube",
    subtitle: "Ventajas, tipos y usos",
    icon: "cloud-outline" as const,
    color: "#00cfff",
  },
  {
    title: "RAID",
    subtitle: "Tipos, diferencias\ny comparaciones",
    icon: "layers-outline" as const,
    color: "#a855f7",
  },
  {
    title: "SSD vs NVMe",
    subtitle: "Rendimiento y\ncaracterísticas",
    icon: "flash-outline" as const,
    color: "#00cfff",
  },
  {
    title: "Sistemas de\narchivos",
    subtitle: "FAT32, NTFS,\nexFAT, EXT4 y más",
    icon: "folder-outline" as const,
    color: "#00e5a0",
  },
];

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState<"home" | "library" | "profile">("home");
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("https://ia-nexus-bwaj.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "❌ Error conectando con el servidor",
        },
      ]);
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={[styles.row, item.role === "user" ? styles.userRow : styles.botRow]}>
      {item.role === "bot" && (
        <View style={styles.botAvatar}>
          <Ionicons name="hardware-chip-outline" size={14} color="#00cfff" />
        </View>
      )}
      <View style={[styles.bubble, item.role === "user" ? styles.userBubble : styles.botBubble]}>
        <Text style={[styles.bubbleText, item.role === "user" && { color: "#000" }]}>
          {item.text}
        </Text>
      </View>
    </View>
  );

  return (
    <LinearGradient colors={["#040410", "#071828", "#040410"]} style={styles.container}>



      <View style={styles.topNav}>

        {/* LOGO CENTRADO REAL */}
        <View style={styles.logoAbsolute}>
          <Text style={styles.logoText}>NEXUS</Text>
          <View style={styles.logoUnderline} />
          <Text style={styles.logoSub}>AI ASSISTANT</Text>
        </View>

      </View>


      {
        messages.length === 0 ? (
          <ScrollView
            contentContainerStyle={styles.homeContent}
            showsVerticalScrollIndicator={false}
          >
            {/* ─── ROBOT AVATAR ─── */}
            <View style={styles.robotWrap}>
              {/* Outer rings */}
              <View style={styles.ring3} />
              <View style={styles.ring2} />
              <View style={styles.ring1} />
              {/* Head */}
              <View style={styles.robotHead}>
                <View style={styles.eyeRow}>
                  <View style={styles.eye} />
                  <View style={styles.eye} />
                </View>
              </View>
            </View>

            {/* ─── GREETING ─── */}
            <Text style={styles.helloText}>Hola 👋</Text>
            <Text style={styles.helloSub}>
              Estoy aquí para ayudarte con tecnología, almacenamiento y mucho más.
            </Text>

            {/* ─── SUGGESTIONS LABEL ─── */}
            <View style={styles.suggestLabel}>
              <Ionicons name="sparkles" size={14} color="#00cfff" style={{ marginRight: 6 }} />
              <Text style={styles.suggestLabelText}>Sugerencias</Text>
            </View>

            {/* ─── CARDS GRID ─── */}
            <View style={styles.grid}>
              {SUGGESTION_CARDS.map((card, i) => (
                <TouchableOpacity key={i} style={styles.card}>
                  <View style={styles.cardLeft}>
                    <Ionicons name={card.icon} size={28} color={card.color} />
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardSub}>{card.subtitle}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#555" />
                </TouchableOpacity>
              ))}
            </View>

            {/* ─── TIP BOX ─── */}
            <View style={styles.tipBox}>
              <View style={styles.tipIcon}>
                <Ionicons name="hardware-chip-outline" size={16} color="#00cfff" />
              </View>
              <Ionicons name="bulb-outline" size={14} color="#f5c542" style={{ marginRight: 4 }} />
              <Text style={styles.tipText}>
                <Text style={{ color: "#f5c542", fontWeight: "600" }}>Tip: </Text>
                Pregunta lo que quieras, estoy listo para ayudarte.
              </Text>
            </View>

            {/* Spacer so content doesn't hide behind input bar */}
            <View style={{ height: 100 }} />
          </ScrollView>
        ) : (
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
          />
        )
      }

      {/* ─── INPUT BAR ─── */}
      <View style={styles.inputWrap}>
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={20} color="#aaa" />
          </TouchableOpacity>

          <TextInput
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#555"
            style={styles.input}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />

          <TouchableOpacity style={styles.micBtn}>
            <Ionicons name="mic-outline" size={20} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Ionicons name="send" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ─── BOTTOM NAV ─── */}
      <View style={styles.bottomNav}>
        {(
          [
            { key: "home", icon: "home", label: "Home" },
            { key: "library", icon: "folder-outline", label: "Biblioteca" },
            { key: "profile", icon: "person-outline", label: "Perfil" },
          ] as const
        ).map((tab) => {
          const active = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.key)}
            >
              <Ionicons
                name={active && tab.key === "home" ? "home" : (tab.icon as any)}
                size={22}
                color={active ? "#00cfff" : "#555"}
              />
              <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  /* ── TOP NAV ── */
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 12,
  },
  navBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#0d0d20",
    justifyContent: "center",
    alignItems: "center",
  },
  logoAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  logoText: {
    color: "#00cfff",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 6,
  },
  logoUnderline: {
    width: 40,
    height: 2,
    backgroundColor: "#00cfff",
    borderRadius: 2,
    marginTop: 2,
    marginBottom: 2,
  },
  logoSub: { color: "#557", fontSize: 10, letterSpacing: 4 },
  proBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00cfff55",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  proText: { color: "#00cfff", fontSize: 13, fontWeight: "600" },

  /* ── HOME CONTENT ── */
  homeContent: { alignItems: "center", paddingTop: 10 },

  /* ── ROBOT AVATAR ── */
  robotWrap: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  ring3: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 1,
    borderColor: "#00cfff18",
    backgroundColor: "transparent",
  },
  ring2: {
    position: "absolute",
    width: 155,
    height: 155,
    borderRadius: 78,
    borderWidth: 1.5,
    borderColor: "#00cfff35",
    backgroundColor: "transparent",
  },
  ring1: {
    position: "absolute",
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 2,
    borderColor: "#00cfff60",
    backgroundColor: "transparent",
  },
  robotHead: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0a0a1e",
    borderWidth: 2,
    borderColor: "#00cfff80",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00cfff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },
  eyeRow: { flexDirection: "row", gap: 14 },
  eye: {
    width: 12,
    height: 18,
    borderRadius: 6,
    backgroundColor: "#00cfff",
    shadowColor: "#00cfff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },

  /* ── GREETING ── */
  helloText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
  },
  helloSub: {
    color: "#778",
    fontSize: 14,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 24,
    paddingHorizontal: 30,
    lineHeight: 20,
  },

  /* ── SUGGESTIONS LABEL ── */
  suggestLabel: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 12,
  },
  suggestLabelText: { color: "#aaa", fontSize: 14, fontWeight: "500" },

  /* ── CARDS ── */
  grid: { width: "100%", paddingHorizontal: 16, gap: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0b1e",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#1a1a35",
  },
  cardLeft: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#0d1525",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  cardBody: { flex: 1 },
  cardTitle: { color: "#fff", fontSize: 14, fontWeight: "600" },
  cardSub: { color: "#556", fontSize: 12, marginTop: 2, lineHeight: 16 },

  /* ── TIP BOX ── */
  tipBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0b1e",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#00cfff30",
    marginHorizontal: 16,
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  tipIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#0d1525",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  tipText: { color: "#aaa", fontSize: 12, flex: 1, lineHeight: 18 },

  /* ── CHAT ── */
  row: { flexDirection: "row", marginVertical: 4, alignItems: "flex-end" },
  userRow: { justifyContent: "flex-end" },
  botRow: { justifyContent: "flex-start" },
  botAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#0d1525",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  bubble: { padding: 12, borderRadius: 18, maxWidth: "75%" },
  userBubble: { backgroundColor: "#00cfff" },
  botBubble: { backgroundColor: "#111128" },
  bubbleText: { color: "#fff", fontSize: 14 },

  /* ── INPUT BAR ── */
  inputWrap: {
    position: "absolute",
    bottom: 80,
    left: 16,
    right: 16,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0b1e",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#1a1a35",
    paddingHorizontal: 6,
    paddingVertical: 6,
    gap: 4,
  },
  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#111128",
    justifyContent: "center",
    alignItems: "center",
  },
  input: { flex: 1, color: "#fff", fontSize: 14, paddingHorizontal: 6 },
  micBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#00cfff",
    justifyContent: "center",
    alignItems: "center",
  },

  /* ── BOTTOM NAV ── */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#0a0a1a",
    paddingBottom: 24,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#1a1a30",
  },
  tabItem: { flex: 1, alignItems: "center", gap: 3 },
  tabLabel: { color: "#556", fontSize: 11 },
  tabLabelActive: { color: "#00cfff" },
});