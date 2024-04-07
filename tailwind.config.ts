import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#EF9A6E',
        sub: '#E58157',
        bgGray: '#E6E6DD',
        fontBlack: '#101010',
        fontBurgundy: '#581D17',
      },
    },
  },
  plugins: [],
};
export default config;
