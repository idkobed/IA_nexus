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
Eres NEXUS, experto en almacenamiento, hardware y arquitectura.
Responde de forma clara, profesional y educativa.
No uses tablas.
No respondas temas fuera de arquitectura de computadores.
`;

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      reply: "⚠️ No se recibió ninguna consulta."
    });
  }

  // 🟢 GROQ
  try {
    console.log("🟢 GROQ");

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      model: "openai/gpt-oss-20b",
      max_tokens: 400
    });

    return res.json({
      reply: completion.choices[0].message.content
    });

  } catch (error1) {
    console.log("⚠️ GROQ ERROR:", error1.message);

    // 🟡 CEREBRAS
    try {
      console.log("🟡 CEREBRAS");

      const completion = await cerebras.chat.completions.create({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        model: "llama3.1-8b",
        max_completion_tokens: 400
      });

      return res.json({
        reply: completion.choices[0].message.content
      });

    } catch (error2) {
      console.log("⚠️ CEREBRAS ERROR:", error2.message);

      // 🔵 COHERE
      try {
        console.log("🔵 COHERE");

        const response = await cohere.generate({
          model: "command",
          prompt: `${SYSTEM_PROMPT}\nUsuario: ${message}\nNEXUS:`,
          max_tokens: 300
        });

        return res.json({
          reply: response.generations[0].text
        });

      } catch (error3) {
        console.log("⚠️ COHERE ERROR:", error3.message);

        return res.json({
          reply: "Sistema en modo offline."
        });
      }
    }
  }
});

// 🔥 PUERTO (IMPORTANTE PARA RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 NEXUS corriendo en puerto ${PORT}`);
});