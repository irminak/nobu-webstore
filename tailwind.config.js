/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            primary: '#3b5d4f',
            secondary: '#dce5e4',
            contrast: '#fdbb2a',
            font: '#2e2e2e',
            silver: '#f0f2f1',
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            futura: ['Futura PT', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                plants: "url('https://i.ibb.co/J5hMCyh/plants.jpg')",
            },
        },
    },
    plugins: [],
};
