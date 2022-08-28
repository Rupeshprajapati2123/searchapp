import React, { useState,useEffect } from 'react'
import '../App.css'
import axios from "axios";
import Card from './Card';

export default function Cardtop({}) {
    const [loading,setLoading]=useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const loadPosts = async () => {
          setLoading(true);
          const response = await axios.get(
            "https://fakestoreapi.com/products?limit=5"
          );
          setPosts(response.data);
          setLoading(false);
        };
        loadPosts();
      }, []);
      if(loading){
        return(
            <h1>laoding</h1>
        )
      }
  return (
    <>
    <div className='top'>
    <p className='head'>Trending</p>
    <div style={{display:"flex"}}>
        {posts.map((item)=>{
            return(
                <Card name={item.title} price={item.price} img={item.image}/>
            );
        })}
</div>
    </div>
    <div>
        
    </div>
    </>
  )
}
