import React,{ useState, useRef, useEffect } from 'react';
import Dog from "./components/Dogapi";
import Accordion from "./components/Accordion";


const App =() =>{

     
     const posts=Dog();
     const rendereedPosts =posts.map((post)=>{

        return(
            <>
              
              <Accordion title={post.name}>
        <span className="accordion-text"></span>

        <img src={post.image.url}  width="80" height="68"></img>
                  <li>Name of the dog is {post.name}</li>
                  <li>ID of the dog is {post.id}</li> 
                  <li>weight (imperial) {post.weight.imperial}</li>
                  <li>Origin(will be empty if none) :{post.origin}</li>
                  <li>Bred of the dog {post.bred_for}</li>
                  <li>temperament of the dog is {post.temperament}</li>
                  <li>It's breed group {post.breed_group}</li>
                  <li>It's height  {post.height.imperial}</li>
      </Accordion>



              <h3 key={post.id}><div>
              <ol> 
            
                  
              </ol>
             
              </div></h3>
    
            </>
        )
     })
   return(
       <div>
           {rendereedPosts}
       </div>
   )
}

export default App