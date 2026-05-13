/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Importante: Esto permite que Tailwind escanee las clases de Tremor
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tus colores de "The Editorial Engineer"
        brand: {
          primary: "#847b11", // El dorado de tu logo
          "primary-hover": "#6b630e",
          bg: "#0f172a", // El oscuro de tu Hero
          card: "#ffffff",
        },
        // Configuración de colores específica para Tremor
        tremor: {
          brand: {
            faint: "#eff6ff",
            muted: "#bfdbfe",
            subtle: "#60a5fa",
            DEFAULT: "#847b11", // Usamos tu dorado como color por defecto
            emphasis: "#1d4ed8",
            inverted: "#ffffff",
          },
        },
      },
    },
  },
  plugins: [],
}