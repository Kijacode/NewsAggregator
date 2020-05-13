import React, { useState, useEffect,createContext } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:7000";

export const BlogContext = createContext();

const   BlogContextProvider = (props) => {
  const [post, setPost] = useState();

  useEffect(() => {

  
  fetchdata();
  async  function fetchdata(){
    const socket = socketIOClient(ENDPOINT);
    await   socket.on("Blog",data => {
        //console.log(data);
      setPost(data);

    });
    }
   
  }, []);

  return (
      <BlogContext.Provider value = {{post}}  >
   
     {props.children}

      </BlogContext.Provider>
   
  );
}

export default BlogContextProvider;