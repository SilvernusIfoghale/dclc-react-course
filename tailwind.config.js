import { current } from "@reduxjs/toolkit";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        //theme('colors.main_background')
        theme_1: {
          main_background: "#e6e6e6",
          toggle_keys_background: "#d1cccc",
          screen_background: "#ededed",
          del_reset_background: "#377f86",
          del_reset_shadow: "#1b5f65",
          equal_toggle_background: "#ca5502",
          equal_toggle_shadow: "#893901",
          key_background: "#e5e4e1",
          key_shadow: "#a69d91",
          dark_text_color: "#35352c",
          light_text_color: "#ffffff",
        },
        theme_2: {
          main_background: "#3a4764",
          toggle_keys_background: "#232c43",
          screen_background: "#182034",
          del_reset_background: "#637097",
          del_reset_shadow: "#404e72",
          equal_toggle_background: "#d03f2f",
          equal_toggle_shadow: "#93261a",
          key_background: "#eae3dc",
          key_shadow: "#d77f2d",
          dark_text_color: "#8c8482",
          light_text_color: "#b4c6e9",
        },
        theme_3: {
          main_background: "#160628",
          toggle_keys_background: "#1d0934",
          screen_background: "#182034",
          del_reset_background: "#58077d",
          del_reset_shadow: "#bc15f4",
          equal_toggle_background: "#00e0d1",
          equal_toggle_shadow: "#6cf9f2",
          key_background: "#341c4f",
          key_shadow: "#871c9c",
          dark_text_color: "#ffe53d",
          light_text_color: "#ffffff",
        },
        comment_Color: {
          Moderate_blue: "#5457b6",
          Soft_Red: "#ed6468",
          Light_grayish_blue: "#c3c4ef",
          Pale_red: "#ffb8bb",
          Dark_blue: "#324152",
          Grayish_Blue: "#67727e",
          Light_gray: "#eaecf1",
          Very_light_gray: "#f5f6fa",
          White: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
