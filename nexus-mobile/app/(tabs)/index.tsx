import { useState } from "react";
import { Text, View, TextInput, Button, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("https://ia-nexus-bwaj.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage.text })
      });

      const data = await res.json();

      const botMessage = { role: "bot", text: data.reply };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: "bot", text: "Error conectando con NEXUS" }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEXUS AI</Text>

      <ScrollView style={styles.chat}>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={msg.role === "user" ? styles.user : styles.bot}
          >
            {msg.text}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Escribe..."
        value={input}
        onChangeText={setInput}
      />

      <Button title="Enviar" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#050510"
  },
  title: {
    fontSize: 24,
    color: "#00ffff",
    textAlign: "center",
    marginBottom: 10
  },
  chat: {
    flex: 1,
    marginBottom: 10
  },
  user: {
    alignSelf: "flex-end",
    color: "#00ffff",
    margin: 5
  },
  bot: {
    alignSelf: "flex-start",
    color: "#ffffff",
    margin: 5
  },
  input: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    marginBottom: 10
  }
});