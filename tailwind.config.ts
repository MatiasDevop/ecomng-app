import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,ts}', // Scans Angular templates and components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
