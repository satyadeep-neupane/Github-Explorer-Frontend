/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-black": "#0D1117",
                "custom-white": "#E6EDF3",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
