import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#090909', panel: '#121110', gold: '#c6a36a', wine: '#581d26', muted: '#aaa39a' }, fontFamily: { display: ['Georgia', 'serif'] } } },
  plugins: []
};
export default config;
