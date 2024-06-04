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
                plants: "url('https://i.ibb.co/J5hMCyh/plants.jpg')",
                lamps: "url('https://i.pinimg.com/564x/8b/04/ac/8b04aceb4166d7ed8c65ef7f3fdcbb3e.jpg')",
                skin: "url('https://i.pinimg.com/564x/48/b8/7d/48b87d8582bc010ab4ded856f71e7005.jpg')",
                furniture:
                    "url('https://i.pinimg.com/564x/f7/8e/e2/f78ee2a48fa1c031bd5e4427e1998847.jpg')",
                candles:
                    "url('https://i.pinimg.com/564x/ae/fd/0e/aefd0e11bccadff7b19d0fd921550270.jpg')",
            },
        },
    },
    plugins: [],
};
