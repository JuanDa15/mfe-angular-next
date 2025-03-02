/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--background-color)",
        "secondary-background": "var(--secondary-background-color)",
        "primary-text": "var(--text-color)",
        "secondary-text": "var(--secondary-text-color)",
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "accent": "var(--accent-color)",
        "boder-color": "var(--border-color)",
      },
    },
  },
  plugins: [],
}

