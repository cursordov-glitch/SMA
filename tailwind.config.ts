import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5bcfd",
          400: "#8197fa",
          500: "#6270f5",
          600: "#4f4dea",
          700: "#433dcf",
          800: "#3834a7",
          900: "#312f84",
          950: "#1e1c4f",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          hover: "hsl(var(--surface-hover))",
          active: "hsl(var(--surface-active))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
          mono: ["ui-monospace", "monospace"],
          },
      },
      boxShadow: {
        glass: "0 4px 24px -1px rgba(0,0,0,0.08), 0 2px 8px -1px rgba(0,0,0,0.04)",
        "glass-lg": "0 8px 40px -4px rgba(0,0,0,0.12), 0 4px 16px -2px rgba(0,0,0,0.06)",
        glow: "0 0 20px rgba(98, 112, 245, 0.35)",
        "glow-sm": "0 0 10px rgba(98, 112, 245, 0.25)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6270f5 0%, #a855f7 50%, #ec4899 100%)",
        "gradient-surface": "linear-gradient(180deg, hsl(var(--surface)) 0%, hsl(var(--background)) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(98,112,245,0.3)" },
          "50%": { boxShadow: "0 0 24px rgba(98,112,245,0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
