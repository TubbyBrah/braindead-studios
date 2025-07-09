module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  extend: {
    animation: {
      glitchRGB: 'glitchRGB 2s infinite ease-in-out',
      rgbGlitch: 'rgbGlitch 3s infinite ease-in-out',
    },
    keyframes: {
      glitchRGB: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '20%': { transform: 'translate(-1px, 1px)' },
        '40%': { transform: 'translate(2px, -1px)' },
        '60%': { transform: 'translate(-2px, 2px)' },
        '80%': { transform: 'translate(1px, -2px)' },
      },
      rgbGlitch: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '30%': { transform: 'translate(-1px, 0.5px)' },
        '60%': { transform: 'translate(1.5px, -1px)' },
        '90%': { transform: 'translate(-1px, 1px)' },
      },
    },
  },
}
,
  plugins: [],
};
