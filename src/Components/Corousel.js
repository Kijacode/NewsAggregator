
import {Carousel} from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import "./Blog/Blog.css";




const Corous = () =>{

    return (
           
     <div className="container" >
     <Carousel autoPlay>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228037/n7sn1l9bzgafujhpmfyb.jpg"/>
                    
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228037/jyjp4urwl8t9w35vqwrc.jpg"/>
                   
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228036/vezbw3bmj0mjx7hkhjac.jpg"/>
                
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228037/rt8gqnk3sjfspnrwcxfn.jpg"/>
                   
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228036/pznlze1arveu0bolnb2h.jpg"/>
                   
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228036/t8xwheschatiwritdtfh.jpg"/>
                   
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228036/ogttkmglbqpowabrwqyu.jpg"/>
                   
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228036/fpz3tffnai48ck6qwn34.png"/>
                   
                </div>
                <div>
                <img src="https://res.cloudinary.com/kijacode/image/upload/v1589228036/kkfiynegemepf2lnobto.jpg"/>
                   
                </div>
            </Carousel>

     </div>
       
       
    );
}

export default Corous;