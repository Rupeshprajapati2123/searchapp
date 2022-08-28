import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from './Card';
export default function WomenItem({cat}) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  console.log(cat);
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/women's%20clothing`
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);
  console.log(posts);
  return (
    <div style={{display:"flex"}}>
    {posts.map((item)=>{
      return(
  <Card img={item.image} name={item.title} price={item.price}/>
      );
      
    })}

</div>
  )
}
