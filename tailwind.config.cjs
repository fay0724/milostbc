/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            xxl: { max: "2048px" },
            xl: { max: "1280px" },
            lg: { max: "1000px" },
            md: { max: "884px" },
            sm: { max: "600px" },
            xsm: { max: "375px" },
        },
    },
    plugins: [require("daisyui")],
}
