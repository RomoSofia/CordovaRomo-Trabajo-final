const formatoNumero = new Intl.NumberFormat("es-CL");
const formatoPesos = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
});

const colorVerdePetroleo = "rgba(0, 121, 107, 0.82)";
const colorVerdePetroleoBorde = "rgba(0, 121, 107, 1)";
const colorMorado = "rgba(123, 31, 162, 0.72)";
const colorMoradoFuerte = "rgba(123, 31, 162, 0.88)";
const colorAmbar = "rgba(245, 124, 0, 0.78)";
const colorGris = "rgba(120, 120, 120, 0.55)";

new Chart(document.getElementById("vacantesTipoInstitucion"), {
    type: "doughnut",
    data: {
        labels: [
            "Institutos Profesionales",
            "Universidades",
            "Centros de Formación Técnica",
        ],
        datasets: [
            {
                data: [4699, 2717, 170],
                backgroundColor: [colorMoradoFuerte, colorVerdePetroleo, colorAmbar],
                borderColor: "#fff",
                borderWidth: 2,
                hoverOffset: 8,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "58%",
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                    boxWidth: 12,
                },
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const valor = context.raw;
                        const porcentaje = ((valor / total) * 100).toFixed(1).replace(".", ",");
                        return `${context.label}: ${formatoNumero.format(valor)} vacantes (${porcentaje}%)`;
                    },
                },
            },
        },
    },
});

new Chart(document.getElementById("arancelTipoInstitucion"), {
    type: "bar",
    data: {
        labels: ["Universidades", "Institutos Profesionales", "Centros de Formación Técnica"],
        datasets: [
            {
                label: "< $2M",
                data: [0, 2.7, 0],
                backgroundColor: "rgba(123, 31, 162, 0.30)",
                borderWidth: 0,
            },
            {
                label: "$2M–$3M",
                data: [0, 66.7, 100],
                backgroundColor: "rgba(123, 31, 162, 0.55)",
                borderWidth: 0,
            },
            {
                label: "$3M–$4M",
                data: [0, 30.7, 0],
                backgroundColor: "rgba(123, 31, 162, 0.85)",
                borderWidth: 0,
            },
            {
                label: "$4M–$5M",
                data: [43.9, 0, 0],
                backgroundColor: "rgba(0, 121, 107, 0.40)",
                borderWidth: 0,
            },
            {
                label: "$5M–$6M",
                data: [22.0, 0, 0],
                backgroundColor: "rgba(0, 121, 107, 0.58)",
                borderWidth: 0,
            },
            {
                label: "$6M–$7M",
                data: [12.2, 0, 0],
                backgroundColor: "rgba(0, 121, 107, 0.72)",
                borderWidth: 0,
            },
            {
                label: "$7M–$8M",
                data: [19.5, 0, 0],
                backgroundColor: "rgba(0, 121, 107, 0.88)",
                borderWidth: 0,
            },
            {
                label: "≥ $8M",
                data: [2.4, 0, 0],
                backgroundColor: "rgba(0, 121, 107, 1)",
                borderWidth: 0,
            },
        ],
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                min: 0,
                max: 100,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: v => v + "%",
                },
            },
            y: {
                stacked: true,
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                },
            },
        },
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                    boxWidth: 12,

                },
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont:  { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: item => item.raw > 0,
                callbacks: {
                    label: ctx => `${ctx.dataset.label}: ${ctx.raw.toString().replace(".", ",")}% de los programas`,
                },
            },
        },
    },
});

new Chart(document.getElementById("origenPorArancel"), {
    type: "bar",
    data: {
        labels: ["< $2M", "$2M–$3M", "$3M–$4M", "$4M–$5M", "$5M–$6M", "$6M–$7M", "$7M–$8M", "≥ $8M"],
        datasets: [
            {
                label: "Municipal y SLEP",
                data: [31.1, 37.5, 27.3, 25.1, 28.7, 21.9, 14.7, 5.4],
                backgroundColor: colorVerdePetroleo,
                borderWidth: 0,
            },
            {
                label: "Particular subvencionado",
                data: [61.9, 53.9, 60.6, 60.0, 59.5, 51.8, 56.7, 14.5],
                backgroundColor: colorMorado,
                borderWidth: 0,
            },
            {
                label: "Particular pagado",
                data: [4.7, 5.7, 7.6, 10.8, 11.2, 24.9, 26.8, 79.8],
                backgroundColor: colorAmbar,
                borderWidth: 0,
            },
            {
                label: "Administración delegada",
                data: [2.3, 3.0, 4.6, 4.0, 0.6, 1.3, 1.8, 0.2],
                backgroundColor: colorGris,
                borderWidth: 0,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                },
            },
            y: {
                stacked: true,
                min: 0,
                max: 100,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return value + "%";
                    },
                },
            },
        },
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                    boxWidth: 12,
                },
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw.toString().replace(".", ",")}%`;
                    },
                },
            },
        },
    },
});

/* ─── TABLA DINÁMICA: BUSCADOR DE CARRERAS SIES ────────────────────────── */

(function () {

    const URL_DATOS = "https://api.myjson.online/v1/records/5ca4b165-4816-4182-83f5-d9b8b89ce827";

    const tbody        = document.getElementById("cuerpoTabla");
    const inputBuscar  = document.getElementById("buscadorTabla");
    const selTipo      = document.getElementById("filtroTipo");
    const selRegion    = document.getElementById("filtroRegion");
    const selNivel     = document.getElementById("filtroNivel");
    const contador     = document.getElementById("contadorFilas");

    let datosTodos = [];   // todos los registros originales
    let datosFiltrados = [];

    /* Quitar acentos para comparación */
    function sinAcentos(str) {
        return String(str).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    /* Etiqueta coloreada según tipo de institución */
    function etiquetaTipo(tipo) {
        if (!tipo) return "";
        const mapa = {
            "Universidades":               ["U", "etiqueta-u"],
            "Institutos Profesionales":    ["IP", "etiqueta-ip"],
            "Centros de Formación Técnica":["CFT", "etiqueta-cft"],
        };
        const [sigla, clase] = mapa[tipo] || [tipo, "etiqueta-u"];
        return `<span class="${clase}">${sigla}</span>`;
    }

    /* Renderiza las filas visibles */
    function renderizarFilas(datos) {
        if (datos.length === 0) {
            tbody.innerHTML = `<tr><td colspan="10" class="tabla-vacia">Sin resultados para esta búsqueda.</td></tr>`;
            contador.textContent = "0 carreras encontradas.";
            return;
        }

        const total = datosTodos.length;
        const visible = datos.length;
        contador.textContent = visible === total
            ? `${total} carreras en total.`
            : `${visible} de ${total} carreras.`;

        tbody.innerHTML = datos.map((c) => {
            const sinInfo = c["Municipal y Servicios Locales"] === "s/i";
            const claseFilas = sinInfo ? ' class="sin-datos"' : "";

            return `<tr${claseFilas}>
                <td>${c["Nombre carrera"] || "—"}</td>
                <td>${c["Nombre institución"] || "—"}</td>
                <td>${etiquetaTipo(c["Tipo de institución"])}</td>
                <td>${c["Región"] || "—"}</td>
                <td>${c["Nivel carrera"] || "—"}</td>
                <td>${c["Arancel Anual 2026"] || "—"}</td>
                <td>${c["Matrícula Total 2025"] != null ? c["Matrícula Total 2025"] : "—"}</td>
                <td>${c["Municipal y Servicios Locales"] || "—"}</td>
                <td>${c["Particular Subvencionado"] || "—"}</td>
                <td>${c["Particular Pagado"] || "—"}</td>
            </tr>`;
        }).join("");
    }

    /* Aplica todos los filtros activos */
    function aplicarFiltros() {
        const textoBuscar = sinAcentos(inputBuscar.value.trim());
        const tipoSel    = selTipo.value;
        const regionSel  = selRegion.value;
        const nivelSel   = selNivel.value;

        const hayFiltro = textoBuscar || tipoSel || regionSel || nivelSel;
        if (!hayFiltro) {
            tbody.innerHTML = "";
            contador.textContent = `${datosTodos.length} carreras disponibles. Escribe o filtra para explorar.`;
            return;
        }

        datosFiltrados = datosTodos.filter((c) => {
            /* texto libre: busca en carrera, institución y región */
            if (textoBuscar) {
                const haystack = sinAcentos(
                    (c["Nombre carrera"]     || "") + " " +
                    (c["Nombre institución"] || "") + " " +
                    (c["Región"]             || "")
                );
                if (!haystack.includes(textoBuscar)) return false;
            }

            if (tipoSel   && c["Tipo de institución"] !== tipoSel)   return false;
            if (regionSel && c["Región"]              !== regionSel)  return false;
            if (nivelSel  && c["Nivel carrera"]       !== nivelSel)   return false;

            return true;
        });

        renderizarFilas(datosFiltrados);
    }

    /* Puebla el select de regiones con valores únicos del dataset */
    function poblarFiltroRegiones(datos) {
        const regiones = [...new Set(datos.map(c => c["Región"]).filter(Boolean))].sort();
        regiones.forEach((r) => {
            const opt = document.createElement("option");
            opt.value = r;
            opt.textContent = r;
            selRegion.appendChild(opt);
        });
    }

    /* Listeners */
    inputBuscar.addEventListener("input",  aplicarFiltros);
    selTipo.addEventListener("change",     aplicarFiltros);
    selRegion.addEventListener("change",   aplicarFiltros);
    selNivel.addEventListener("change",    aplicarFiltros);

    /* Fetch de datos */
    fetch(URL_DATOS)
        .then((res) => {
            if (!res.ok) throw new Error("Error HTTP: " + res.status);
            return res.json();
        })
        .then((json) => {
            datosTodos = json.data || json;
            datosFiltrados = [...datosTodos];
            poblarFiltroRegiones(datosTodos);
            contador.textContent = `${datosTodos.length} carreras disponibles. Escribe o filtra para explorar.`;
        })
        .catch((err) => {
            console.error("Error al cargar los datos:", err);
            tbody.innerHTML = `<tr><td colspan="10" class="tabla-vacia">
                No se pudieron cargar los datos. Verifica la conexión o el enlace al JSON.
            </td></tr>`;
            contador.textContent = "Error al cargar.";
        });

})();