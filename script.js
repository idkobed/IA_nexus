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

        // 🔥 SIEMPRE muestra algo si hay reply
        if (data && data.reply) {
            mostrarRespuesta(data.reply, "var(--cyan)");
        } else {
            ejecutarPlanB(userText.toLowerCase());
        }

    } catch (error) {
        console.warn("Error real, usando Plan B");
        ejecutarPlanB(userText.toLowerCase());
    }

    input.value = "";
}

// 3. MEGA BASE DE DATOS LOCAL (PLAN B - MODO ENCICLOPEDIA)
function ejecutarPlanB(text) {
    const db = {
        // --- EL GRAN VERSUS ---
        "vs": "ANÁLISIS COMPARATIVO (HDD vs SSD vs NVMe):\n\n" +
              "• HDD: Tecnología electromecánica (platos giratorios). Ventaja: Costo mínimo por TB. Desventaja: Latencia alta (~10ms) y fragilidad física.\n" +
              "• SSD SATA: Memoria Flash limitada por interfaz de 600MB/s. Ventaja: Silencioso y 5x más rápido que HDD.\n" +
              "• NVMe PCIe: El estándar de 2026. Conexión directa al bus PCIe. Ventaja: Velocidades de hasta 14GB/s (Gen5) y latencia ultra-baja (<0.01ms).\n" +
              "EJEMPLO: Un HDD es un almacén masivo de carga, un SSD SATA es un mensajero en bicicleta y un NVMe es una autopista de fibra óptica de 10 carriles.",

        // --- SISTEMAS DE ARCHIVOS (CATÁLOGO COMPLETO) ---
        "archivos": "ENCICLOPEDIA DE SISTEMAS DE ARCHIVOS (FS):\n\n" +
                    "• NTFS: Estándar de Windows; robusto con soporte de permisos y journaling.\n" +
                    "• FAT32/exFAT: FAT32 (límite 4GB) es para legado; exFAT es el estándar para memorias flash y alta capacidad.\n" +
                    "• APFS: El sistema de Apple optimizado para SSDs y encriptación fuerte.\n" +
                    "• EXT4: El pilar de Linux; eficiencia máxima en servidores.\n" +
                    "• ZFS: El sistema más avanzado; incluye auto-reparación de datos y gestión de petabytes.\n" +
                    "• Btrfs: Enfocado en snapshots y tolerancia a fallos en Linux.\n" +
                    "EJEMPLO: Usamos NTFS para el disco C: de Windows, pero ZFS para un servidor de datos bancarios para evitar corrupción.",

        // --- ARQUITECTURAS RAID (TODOS LOS NIVELES) ---
        "raid": "SISTEMAS RAID (Redundant Array of Independent Disks):\n\n" +
                "• RAID 0 (Striping): Divide datos en 2+ discos. Doble velocidad, CERO seguridad.\n" +
                "• RAID 1 (Mirroring): Duplicación idéntica. Velocidad normal, MÁXIMA seguridad.\n" +
                "• RAID 5: Velocidad y seguridad mediante paridad distribuida (mínimo 3 discos).\n" +
                "• RAID 6: Como RAID 5 pero tolera el fallo de 2 discos simultáneos.\n" +
                "• RAID 10 (1+0): El estándar profesional; combina velocidad de RAID 0 y espejo de RAID 1.\n" +
                "EJEMPLO: RAID 10 es lo que usan los servidores de Amazon para que tu pedido no se borre aunque falle un disco duro físico.",

        // --- TENDENCIAS 2026 ---
        "tendencias": "TENDENCIAS TECNOLÓGICAS 2026:\n\n" +
                      "• Cloud Storage: Almacenamiento elástico e infinito gestionado por IA. Evoluciona a la 'Nube Soberana'.\n" +
                      "• Edge Storage: Procesamiento en la periferia. Vital para la latencia cero en 6G y Smart Cities.\n" +
                      "• Almacenamiento de ADN: Prototipos capaces de guardar petabytes en estructuras biológicas por siglos.\n" +
                      "• CXL (Compute Express Link): Protocolo que unifica la memoria RAM y el almacenamiento para que la CPU los vea como uno solo.\n" +
                      "EJEMPLO: En 2026, un quirófano inteligente usa Edge Storage para procesar la cámara del cirujano en tiempo real sin subir el video a internet.",

        "latencia": "LATENCIA TÉCNICA: El tiempo muerto en el acceso a datos. Es la suma del tiempo de búsqueda, retardo rotacional y latencia de interfaz. En 2026, se mide en nanosegundos (ns) para memorias de estado sólido.",

        "default": "SISTEMA NEXUS CORE (OFFLINE): ¿Qué deseas consultar de la enciclopedia? \nTemas: Versus (HDD/SSD/NVMe), Sistemas de Archivos, RAID, Tendencias 2026 o Latencia."
    };

    let msg = db.default;
    
    // Motor de detección por palabras clave
    if (text.includes("vs") || text.includes("diferencia") || text.includes("comparar")) msg = db.vs;
    else if (text.includes("archivo") || text.includes("ntfs") || text.includes("zfs") || text.includes("ext4") || text.includes("fat")) msg = db.archivos;
    else if (text.includes("raid")) msg = db.raid;
    else if (text.includes("tendencia") || text.includes("futuro") || text.includes("nube") || text.includes("edge")) msg = db.tendencias;
    else if (text.includes("latencia")) msg = db.latencia;
    else if (text.includes("hdd") || text.includes("ssd") || text.includes("nvme")) msg = db.vs;

    mostrarRespuesta(msg, "white");
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

// 5. COMPARADOR TÉCNICO
function compare() {
    const a = document.getElementById('devA').value;
    const b = document.getElementById('devB').value;
    const res = document.getElementById('comp-result');
    res.innerHTML = `<div style='margin-top:20px; color:var(--cyan); font-family:"Share Tech Mono"'>[SISTEMA]: Iniciando análisis comparativo de hardware... ${a.toUpperCase()} vs ${b.toUpperCase()} finalizado.</div>`;
}

