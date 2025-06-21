import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chuyển primary sang màu sky
        primary: {
          DEFAULT: "#0ea5e9",         // sky-500
          foreground: "#ffffff",
        },
        // Bạn có thể thêm các shade khác nếu cần (không bắt buộc)
        // sky: colors.sky (nếu cần dùng nhiều)
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
