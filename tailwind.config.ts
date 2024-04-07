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
        mainCoral: '#EF9A6E',
        subCoral: '#E58157',
        bgGray: '#E6E6DD',
        mainBlack: '#101010',
        mainGray: '#666666',
        burgundy: '#581D17',
      },
    },
    colors: {
      main: '#EF9A6E',
      sub: '#E58157',
      bgGray: '#E6E6DD',
    },
  },
  plugins: [],
};
export default config;
