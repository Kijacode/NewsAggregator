import React, { createContext,useState} from "react";

//here is the provider
export const ThemeContext = createContext();



const ThemeContextprovider = (props) =>{

    const[them,setthem] = useState(
        [
            {
                isLightTheme: true,
                light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
                dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
              }
        ]
    )



    const tooggleTheme =()=>{
        setthem( [{isLightTheme: ! them.isLightTheme}])
        }

        return (
            <ThemeContext.Provider value = {{them,tooggleTheme}} >

                {props.children}
            </ThemeContext.Provider>
        )

}




export default ThemeContextprovider;
