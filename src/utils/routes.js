import {Switch,Route} from "react-router-dom";
import React from "react";
import ErrorPage from "./errorpage";
import StartPage from "../Components/";
import Blog from "../Components/Blog/Blog";


const Routes = () =>{

    return (
        <Switch>

           <Route path="/" exact component = {StartPage} />
           <Route path ="/web" exact component = {Blog}  />
           <Route  component= {ErrorPage}/>



        </Switch>
    );
}



export default Routes;