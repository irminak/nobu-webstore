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
            tan: ['Tan Meringue', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                plants: "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-21d3e9d/www.decorilla.com/online-decorating/wp-content/uploads/2022/05/Boho-home-decor-AD-2048x1365.jpeg')",
            },
        },
    },
    plugins: [],
};
