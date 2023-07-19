import {useContext} from "react";
import React from "react"
const Context = () => {
    const themes = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ffffff",
            background: "#222222"
        }
    };
    const ThemeContext = React.createContext(themes.dark);
    function Toolbar(props) {
        return (
            <div>
                <ThemedButton/>
            </div>
        );
    }
    function ThemedButton() {
        const theme = useContext(ThemeContext);
        return (
            <button style={{background: theme.background, color: theme.foreground}}>
                I am styled by theme context!
            </button>
        );
    }
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar/>
        </ThemeContext.Provider>
    );
}
export default Context;