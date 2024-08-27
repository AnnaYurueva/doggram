import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1281px',
      '2xl': '1537px',
    },
    container: {
      center: true,
    },
    colors: {
      primary: '#FFD12C',
      secondary: '#2C2C2C',
      error: '#EE2D2D',
    },
    fontSize: {
      '2xs': '0.875rem', // 14px
      xs: '1rem', // 16px
      sm: '1.125rem', // 18px
      base: '1.3125rem', // 21px
      md: '1.5rem', // 24px
      lg: '1.75rem', // 28px
      xl: '1.875rem', // 30px
      '2xl': '2.5rem', // 40px
      '3xl': '3.75rem', // 60px
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    lineHeight: {
      '140': '140%',
      '130': '130%',
      '120': '120%',
      '110': '110%',
      '100': '100%',
    },
  },
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  ],
}
