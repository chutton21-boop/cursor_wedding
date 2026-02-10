import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        surface: "#ffffff",
        text: "#707070",
        muted: "rgba(217, 217, 217, 1)",
        mutedText: "#1d1d1d",
        border: "#1d1d1d",
        accent: "#1d1d1d",
        accentHover: "#1d1d1d33",
        black: "#1d1d1d",
        white: "#ffffff",
        whiteTransparent: "#ffffff33",
        grey: "#707070",
        blackTransparent: "#1d1d1d33",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "heading-xl": ["64px", { lineHeight: "64px", letterSpacing: "-0.03em" }],
        "heading-l": ["64px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "heading-s": ["32px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "heading-m": ["44px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "heading-xs": ["16px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "body-m": ["16px", { lineHeight: "1", letterSpacing: "0" }],
        "body-s": ["12px", { lineHeight: "1", letterSpacing: "0" }],
      },
      // space, borderRadius, boxShadow: only from Figma variables; none found, so not extended
    },
  },
  plugins: [],
};

export default config;
