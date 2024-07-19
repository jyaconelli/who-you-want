import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s ease infinite",
        "spin-z": "spinZ 1s ease-in-out infinite alternate",
        cursor: "cursor 0.5s 1",
      },
      keyframes: {
        spinZ: {
          from: { filter: "invert(0)" },
          to: { filter: "invert(1)" },
        },

        cursor: {
          "0%": {
            cursor:
              'url(/bubbles/bubble_0000_Layer-1.png) -20 -20, auto',
          },
          "10%": {
            cursor:
              'url(/bubbles/bubble_0001_Layer-3.png) -20 -20, auto',
          },
          "20%": {
            cursor:
              'url(/bubbles/bubble_0002_Layer-4.png) -20 -20, auto',
          },
          "30%": {
            cursor:
              'url(/bubbles/bubble_0003_Layer-5.png) -20 -20, auto',
          },
          "40%": {
            cursor:
              'url(/bubbles/bubble_0004_Layer-6.png) -20 -20, auto',
          },
          "50%": {
            cursor:
              'url(/bubbles/bubble_0005_Layer-7.png) -20 -20, auto',
          },
          "60%": {
            cursor:
              'url(/bubbles/bubble_0006_Layer-8.png) -20 -20, auto',
          },
          "70%": {
            cursor:
              'url(/bubbles/bubble_0007_Layer-9.png) -20 -20, auto',
          },
          "80%": {
            cursor:
              'url(/bubbles/bubble_0008_Layer-10.png) -20 -20, auto',
          },
          "90%": {
            cursor:
              'url(/bubbles/bubble_0009_Layer-11.png) -20 -20, auto',
          },
        },
      },
      fontFamily: {
        Tiny5: ["Tiny5", "sans-serif"],
        Gruppo: ["Gruppo", "sans-serif"],
      },
      cursor: {
        fancy: "url(/cursor.png) 12 12, pointer",
      },
    },
  },
  plugins: [],
};
export default config;
