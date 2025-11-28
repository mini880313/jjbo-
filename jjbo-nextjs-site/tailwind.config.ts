// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 設定專案的顏色為經典黑白色系
      colors: {
        'background-light': '#FFFFFF', // 純白背景
        'background-dark': '#000000',  // 純黑背景
        'text-dark': '#111111',       // 深灰文字
        'text-light': '#EEEEEE',      // 淺灰文字
        'accent-main': '#000000',     // 主要強調色 (黑色)
      },
      // 設定字體為無襯線，提高現代感
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
      },
      // 確保網站排版俐落
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};

export default config;