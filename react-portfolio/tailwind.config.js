/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   sm: "375px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
};
