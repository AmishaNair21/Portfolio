import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      dropShadow: {
        'custom': '5px 4px 5px rgba(0, 0, 0, 0.4)'
      },
      colors: {
        customlavendar : "#8165C0",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
   
    },
  },
  plugins: [
  
  ],
} satisfies Config;
