import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '2.5': '0.625rem', // 10px
        '2.75': '0.688rem', // 11px
        '5.25': '1.313rem', // 21px
        '7.5': '1.875rem', // 30px
        '8.5': '2.125rem', // 34px
        '8.75': '2.188rem', // 35px
        '11.5': '2.875rem', // 46px
      },
      colors: {
        mainCoral: '#EF9A6E',
        subCoral: '#E58157',
        bgGray: '#E6E6DD',
        mainBlack: '#101010',
        mainGray: '#666666',
        burgundy: '#581D17',
      },
    },
  },
  plugins: [],
};
export default config;
