import React,{useContext} from "react";
import { BlogContext } from "../../contexts/BlogContextProvider";
import {Link} from "react-router-dom";
import "./BlogWeb.css";
import load from "../../utils/Load";


const BlogWeb = () =>{
    const {post} = useContext(BlogContext);
    //style={{background:theme.ui,color:theme.syntax}}
   // style={{background:theme.ui}}
   console.log(typeof(post));
   
   const data =  post == undefined ? load() :   post.map(p => {
       const webPost = () =>{
           console.log("hello kija");
               return window.location.href=p.blog_url;
       };
    return (
        <table>
        <thead>
          <tr>
              <th key={p._id}>{p.blogname}</th>
              
          </tr>
        </thead>

        <tbody>
          <tr key={p._id}>
            <td>
        <div className="card" > 
        <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={p.currentPost.url} onClick={(event) => webPost()}/>
    </div>
        </div>
            </td>
            
          </tr>
          
        </tbody>
      </table>

    )
})
     return (
     
       <div className="container">
           
             {data}
       </div>
         
    
     );


}



export default BlogWeb;




