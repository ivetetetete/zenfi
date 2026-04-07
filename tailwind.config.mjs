/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                zenfi: {
                    // Backgrounds
                    cream: "#FDF8F2",
                    blush: "#FFF8F5",

                    // Surfaces
                    white: "#FFFFFF",

                    // Borders
                    sand: "#EDE8DF",
                    divider: "#F5F0EA",

                    // Text
                    brown: "#3D3530",
                    taupe: "#A89A92",
                    placeholder: "#C4B9B0",

                    // Primary action
                    terra: "#E07A5F",
                    "terra-dark": "#D4664A",

                    // Positive / income
                    sage: "#81B29A",

                    // Category palette
                    "cat-1": "#E07A5F", // Terracotta
                    "cat-2": "#81B29A", // Sage
                    "cat-3": "#F2CC8F", // Sand yellow
                    "cat-4": "#A8DADC", // Soft teal
                    "cat-5": "#C9B8E8", // Lilac
                    "cat-6": "#F4A261", // Amber
                    "cat-7": "#6B9E78", // Forest
                    "cat-8": "#E8A598", // Dusty rose
                },
            },
            fontFamily: {
                display: ['"Playfair Display"', "serif"],
                body: ["Nunito", "sans-serif"],
            },
        },
    },
    plugins: [],
};