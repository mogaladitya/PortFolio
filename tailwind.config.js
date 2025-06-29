// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-start infinite',
        shake: 'shake 0.5s',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-5deg)' },
          '40%': { transform: 'rotate(5deg)' },
          '60%': { transform: 'rotate(-5deg)' },
          '80%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
