app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      reply: "⚠️ No se recibió ninguna consulta.",
      source: "SYSTEM"
    });
  }

  // 🟢 GROQ
  try {
    console.log("🟢 Usando GROQ");

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      model: "openai/gpt-oss-20b",
      max_tokens: 400
    });

    return res.json({
      reply: completion.choices[0].message.content,
      source: "GROQ"
    });

  } catch (error1) {
    console.log("⚠️ Groq falló:", error1.message);

    // 🟡 CEREBRAS
    try {
      console.log("🟡 Usando CEREBRAS");

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
        reply: completion.choices[0].message.content,
        source: "CEREBRAS"
      });

    } catch (error2) {
      console.log("⚠️ Cerebras falló:", error2.message);

      // 🔵 COHERE
      try {
        console.log("🔵 Usando COHERE");

        const response = await cohere.generate({
          model: "command",
          prompt: `${SYSTEM_PROMPT}\nUsuario: ${message}\nNEXUS:`,
          max_tokens: 300
        });

        return res.json({
          reply: response.generations[0].text, // 🔥 FIX AQUÍ
          source: "COHERE"
        });

      } catch (error3) {
        console.log("⚠️ Cohere falló:", error3.message);

        // 🔴 FALLBACK FINAL
        return res.json({
          reply: "Sistema en modo offline. Intenta nuevamente.",
          source: "OFFLINE"
        });
      }
    }
  }
});