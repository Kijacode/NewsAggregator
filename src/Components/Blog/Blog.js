import React from "react";
import Corous from "../Corousel";
import "./Blog.css";
import BlogWeb from "./BlogWeb";


const Blog = () =>
{
    return (
     <div >
         <div className="row">
      <div className="grid-example col s12" id="home_12">
      <div className = "container">
      <Corous id="home-courousel"/>
    
</div>
    
      
      </div>
      <div className="grid-example col l12 " id="data">
      <BlogWeb /> 
  
      
      ></div>
    </div>
     </div>
    );
}


export default Blog;