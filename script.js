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
                label: "Arancel promedio ponderado",
                data: [6798648, 3108091, 2266022],
                backgroundColor: [colorVerdePetroleo, colorMorado, colorAmbar],
                borderColor: [colorVerdePetroleoBorde, "rgba(123, 31, 162, 1)", "rgba(245, 124, 0, 1)"],
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + formatoNumero.format(value);
                    },
                },
            },
            y: {
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                },
            },
        },
        plugins: {
            legend: { display: false },
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
                        return "Arancel promedio: " + formatoPesos.format(context.raw);
                    },
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
