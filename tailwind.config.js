/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                mdx: "1000px",
                smx: "375px",
            },
        },
    },
    plugins: [],
};
