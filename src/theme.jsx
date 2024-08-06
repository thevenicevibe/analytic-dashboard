import { createContext, useState,useMemo } from "react";
import { createTheme, Typography } from "@mui/material";

export const tokens = (mode) => ({
...(mode === 'dark'
    ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blue: {
          100: "#cce4f0",
          200: "#99c9e2",
          300: "#66add3",
          400: "#3392c5",
          500: "#0077b6",
          600: "#005f92",
          700: "#00476d",
          800: "#003049",
          900: "#001824"
},
    } : {
        grey: {
            900: "#141414",
            800: "#292929",
            700: "#3d3d3d",
            600: "#525252",
            500: "#666666",
            400: "#858585",
            300: "#a3a3a3",
            200: "#c2c2c2",
            100: "#e0e0e0",
        },
           
        primary: {
            900: "#040509",
            800: "#080b12",
            700: "#0c101b",
            600: "#101624",
            500: "#141b2d",
            400: "#434957",
            300: "#727681",
            200: "#a1a4ab",
            100: "#d0d1d5",
        },
            
        greenAccent: {
            900: "#0f2922",
            800: "#1e5245",
            700: "#2e7c67",
            600: "#3da58a",
            500: "#4cceac",
            400: "#70d8bd",
            300: "#94e2cd",
            200: "#b7ebde",
            100: "#dbf5ee",
        },
        redAccent: {
            900: "#2c100f",
            800: "#58201e",
            700: "#832f2c",
            600: "#af3f3b",
            500: "#db4f4a",
            400: "#e2726e",
            300: "#e99592",
            200: "#f1b9b7",
            100: "#f8dcdb",
        },    
        
        blue: {
            900: "#001824",
            800: "#003049",
            700: "#00476d",
            600: "#005f92",
            500: "#0077b6",
            400: "#3392c5",
            300: "#66add3",
            200: "#99c9e2",
            100: "#cce4f0",
  },
    }
            
)


})

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette: {
            mode: mode,
            ...(mode === 'dark'?{
                primary:{
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background:{
                    default: colors.primary[500],
                }
                
            } :{
                primary:{
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background:{
                    default: "#fcfcfc",
                }
            }) ,

            typography : {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 12,
                h1: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 40,
                },
                h2: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 32,
                },
                h3: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 24,
                },
                h4: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 20,
                },
                h5: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 16,
                },
                h6: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 14,
                }
            }
        }
    }
}


// context for color mode 
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})


export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev)=> (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme , colorMode];
}