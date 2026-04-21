async function askNexusIA() {
    const input = document.getElementById('ai-input');
    const output = document.getElementById('chat-output');

    if (!input || !output) return;

    const userText = input.value.trim();
    if (!userText) return;

    output.innerHTML = "<span style='color:var(--cyan)'>[SISTEMA]: PROCESANDO CONSULTA...</span>";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userText })
        });

        const data = await response.json();

        if (data && data.reply) {

            // 🔥 IDENTIFICAR IA
            const source = data.source || "IA";
            const respuestaFinal = `[${source}] → ${data.reply}`;

            // 🎨 COLOR SEGÚN IA
            let color = "var(--cyan)";
            if (source === "GROQ") color = "#00ffff";
            else if (source === "CEREBRAS") color = "#ffff00";
            else if (source === "COHERE") color = "#00ff88";
            else if (source === "OFFLINE") color = "white";

            mostrarRespuesta(respuestaFinal, color);

        } else {
            ejecutarPlanB(userText.toLowerCase());
        }

    } catch (error) {
        console.warn("Error real, usando Plan B");
        ejecutarPlanB(userText.toLowerCase());
    }

    input.value = "";
}

// 3. PLAN B
function ejecutarPlanB(text) {
    const db = {
        "vs": "ANÁLISIS COMPARATIVO (HDD vs SSD vs NVMe):\n\n• HDD: Bajo costo pero lento.\n• SSD: Rápido y silencioso.\n• NVMe: Ultra rápido.\n",
        "archivos": "NTFS, EXT4, APFS, ZFS: sistemas para organizar datos.",
        "raid": "RAID: redundancia y seguridad en discos.",
        "tendencias": "Cloud, Edge, ADN y CXL dominan el futuro.",
        "latencia": "Latencia: tiempo de respuesta del sistema.",
        "default": "Sistema offline activo. Consulta sobre almacenamiento."
    };

    let msg = db.default;

    if (text.includes("vs") || text.includes("comparar")) msg = db.vs;
    else if (text.includes("archivo")) msg = db.archivos;
    else if (text.includes("raid")) msg = db.raid;
    else if (text.includes("tendencia")) msg = db.tendencias;
    else if (text.includes("latencia")) msg = db.latencia;

    mostrarRespuesta("[OFFLINE] → " + msg, "white");
}

// 4. EFECTO TYPEWRITER
function mostrarRespuesta(msg, color) {
    const output = document.getElementById('chat-output');
    output.innerText = "";
    output.style.color = color;

    let i = 0;
    const interval = setInterval(() => {
        output.innerText += msg[i];
        i++;
        if (i >= msg.length) clearInterval(interval);
    }, 12);
}

// 5. COMPARADOR
function compare() {
    const a = document.getElementById('devA').value;
    const b = document.getElementById('devB').value;
    const res = document.getElementById('comp-result');

    res.innerHTML = `[SISTEMA]: Comparando ${a.toUpperCase()} vs ${b.toUpperCase()}...`;
}