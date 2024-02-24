/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },

     

        extend: {
            colors: {
                sociais: {
                    github: "#1A202C",
                    // github: "#24292F",
                    githubHover: "#24292F",
                    // githubHover: "#1A202C",

                    google: "#FFFFFF",
                    googleHover: "#bdbdbd",
                    googleText: "#0000008A",

                    facebook: "#1877F2",
                    facebookHover: "#166FE5",
                },

                zinc: {
                    100: "#d0d0d0",
                    200: "#a1a1a1",
                    300: "#717273",
                    400: "#424344",
                    500: "#131415",
                    600: "#0f1011",
                    700: "#0b0c0d",
                    800: "#080808",
                    900: "#040404",
                },

                emerald: {
                    100: "#cdd5d0",
                    200: "#9baba1",
                    300: "#6a8173",
                    400: "#385744",
                    500: "#062d15",
                    600: "#052411",
                    700: "#041b0d",
                    800: "#021208",
                    900: "#010904",
                },

                green: {
                    100: "#cdd5d0",
                    200: "#9baba1",
                    300: "#6a8173",
                    400: "#385744",
                    500: "#062d15",
                    600: "#052411",
                    700: "#041b0d",
                    800: "#021208",
                    900: "#010904"
                },
                ui: {
                    text: "#E0E0EC",
                    background: "#0A0A0A",
                    primary: "#083a1a",
                    secondary: "#4b4758",
                    accent: "#9f899f",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwind-scrollbar"),
        //require("flowbite/plugin"),
    ],
};
