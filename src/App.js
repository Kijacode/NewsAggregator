import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./utils/routes";
import Nav from "./Components/Navigation.js/navigation";
import BlogContextProvider from "./contexts/BlogContextProvider";
import ThemeContextprovider from "./contexts/ThemeContextProvider";

function App() {
  return (
    <ThemeContextprovider>
    
    <BlogContextProvider>

    <div>
     <div className="container">
        <Nav />
      </div>
      <Routes />
    </div>
             
    </BlogContextProvider>
    </ThemeContextprovider>
 
    
  );
}

export default App;
