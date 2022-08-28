import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from './Card';
export default function JewelItem({cat}) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  console.log(cat);
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/jewelery`
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
        
  //       <div className="card" style={{backgroundColor:"white"}}>
  // <img className="card-img-top" src={item.image} alt="Card image cap" />
  // <div className="card-body">
  //   <p className="card-text">{item.title}</p>
  //   <p className="card-text">Rs {item.price}</p>
  // </div>
  <Card img={item.image} name={item.title} price={item.price}/>
      );
      
    })}

</div>
  )
}
