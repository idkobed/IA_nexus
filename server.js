import express from "express";
import cors from "cors";
import OpenAI from "openai";
import Groq from "groq-sdk";
import Cerebras from "@cerebras/cerebras_cloud_sdk";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Servir tu web
app.use(express.static("."));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY
});

const SYSTEM_PROMPT = `
Eres NEXUS, un asistente virtual especializado exclusivamente en tecnologías de almacenamiento.

Tu nombre siempre es NEXUS.
Nunca digas que eres ChatGPT, OpenAI ni otro asistente.

Solo puedes responder preguntas relacionadas con:
- HDD vs SSD vs NVMe
- Sistemas de archivos
- RAID
- Tendencias: almacenamiento en la nube
- edge storage

Si te preguntan quién eres, responde:
"Soy NEXUS, un asistente especializado en tecnologías de almacenamiento."

Si la pregunta está fuera de esos temas, responde:
"Soy NEXUS y estoy especializado únicamente en HDD, SSD, NVMe, sistemas de archivos, RAID y tendencias de almacenamiento."
`;

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      reply: "⚠️ No se recibió ninguna consulta."
    });
  }

  try {
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
    console.log("⚠️ Groq falló:", error1.message);

    try {
      const completion = await cerebras.chat.completions.create({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        model: "llama3.1-8b",
        max_completion_tokens: 400,
        temperature: 0.3
      });

      return res.json({
        reply: completion.choices[0].message.content
      });

    } catch (error2) {
      console.log("⚠️ Cerebras falló:", error2.message);

      return res.json({
        reply:
          "Soy NEXUS y estoy especializado únicamente en HDD, SSD, NVMe, sistemas de archivos, RAID y tendencias de almacenamiento."
      });
    }
  }
});

app.listen(3000, () => {
  console.log("🚀 NEXUS corriendo en http://localhost:3000");
});