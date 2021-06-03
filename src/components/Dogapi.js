import React, {useState ,useEffect } from 'react';
const Dog = () =>{
const [posts,setPosts] = useState([]);

useEffect(()=>{
    fetch(`https://api.thedogapi.com/v1/breeds`,
    ).then(res=>res.json())
    .then(data => setPosts(data))
},[]);

  return posts;
}

export default Dog