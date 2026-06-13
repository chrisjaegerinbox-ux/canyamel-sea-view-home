import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
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
          hover: "hsl(var(--accent-hover))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        azure: {
          DEFAULT: "#1B3A5C",
          light: "#2A5080",
          dark: "#122840",
        },
        sand: {
          DEFAULT: "#E8D5B0",
          light: "#F5EDD8",
          dark: "#D4BC8E",
        },
        terracotta: {
          DEFAULT: "#C17A52",
          light: "#D4956F",
          dark: "#A66038",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px 0 rgba(27,58,92,0.08)',
        'warm': '0 4px 12px 0 rgba(27,58,92,0.10)',
        'warm-md': '0 8px 24px 0 rgba(27,58,92,0.12)',
        'warm-lg': '0 16px 40px 0 rgba(27,58,92,0.14)',
        'warm-xl': '0 24px 64px 0 rgba(27,58,92,0.16)',
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "0.4" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-up-delay": "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.18s forwards",
        "fade-up-delay-2": "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.34s forwards",
        "fade-up-delay-3": "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.50s forwards",
        "scroll-bounce": "scroll-bounce 1.6s ease-in-out infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
