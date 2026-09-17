import type { Config } from 'tailwindcss'
const config: Config = {
  content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme:{extend:{fontFamily:{sans:['var(--font-inter)','Arial','sans-serif'],display:['var(--font-space)','Arial','sans-serif']},boxShadow:{soft:'0 18px 60px rgba(10,20,30,.08)',glow:'0 0 0 1px rgba(8,148,240,.12), 0 22px 60px rgba(8,148,240,.16)'}}},
  plugins:[]
}
export default config
