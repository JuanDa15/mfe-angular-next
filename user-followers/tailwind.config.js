/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--background-color)",
        "secondary-background": "var(--secondary-background-color)",
        "primary-text": "var(--text-color)",
        "secondary-text": "var(--secondary-text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        "boder-color": "var(--border-color)",
      },
    },
  },
  plugins: [],
};
