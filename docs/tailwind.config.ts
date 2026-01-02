import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000",
        paper: "#fff",
        mist: "#bfbfbf",
        ash: "#8a8a8a"
      },
      fontFamily: {
        display: ["'Shippori Mincho B1'", "serif"],
        body: ["'Zen Kaku Gothic New'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 255, 255, 0.12)",
        hairline: "0 0 0 1px rgba(255, 255, 255, 0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
