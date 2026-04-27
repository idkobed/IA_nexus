import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";
import Groq from "groq-sdk";
import Cerebras from "@cerebras/cerebras_cloud_sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

// 🔥 INSTANCIAS
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY
});

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY
});

// 🔥 PROMPT
const SYSTEM_PROMPT = `
Eres NEXUS, experto en almacenamiento, hardware y arquitectura de computadores.

Responde de forma clara, profesional y educativa.

IMPORTANTE:
- NO uses tablas
- NO uses formato markdown (***, ###, |, -)
- NO uses listas con símbolos
- NO uses cuadros comparativos
- Escribe todo en párrafos normales, bien redactados

Cuando compares tecnologías, hazlo en texto corrido, como explicación académica.

Tu objetivo es enseñar como un profesor, no como un generador de markdown.
`;

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  console.log("📩 Mensaje recibido:", message);

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      model: "openai/gpt-oss-20b",
      max_tokens: 400
    });

    console.log("✅ GROQ RESPONSE:", completion);

    return res.json({
      reply: completion.choices?.[0]?.message?.content || "Sin respuesta"
    });

  } catch (error) {
    console.log("❌ GROQ ERROR:", error);

    return res.json({
      reply: "Error en GROQ: " + error.message
    });
  }
});

// 🔥 PUERTO (IMPORTANTE PARA RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 NEXUS corriendo en puerto ${PORT}`);
});