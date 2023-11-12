/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sociais: {
                    github: "#1A202C",
                    // github: "#24292F",
                    githubHover: "#24292F",
                    // githubHover: "#1A202C",

                    google: "#FFFFFF",
                    googleHover: "#F9FAFB",
                    googleText: "#0000008A",

                    facebook: "#1877F2",
                    facebookHover: "#166FE5",
                },
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
        // require("flowbite/plugin")
    ],
};
