import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#7D95DB',
        secondary: '#8112B8',
        tertiary: '#29065F',
      }
    },
  },
  plugins: [],
} satisfies Config;
