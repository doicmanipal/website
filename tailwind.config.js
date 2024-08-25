// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", {
      manipal: {
        "primary": "#dd6522",
        "secondary": "#f5ca35",
        "accent": "#231f20",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      },
    },],
  },
};