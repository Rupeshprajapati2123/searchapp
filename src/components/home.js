import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import List from './list';
import Cardtop from "./cardtop";

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Item from "./womenItem";
export default function Home() {
const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);
  return (<>
    <input
      style={{ width: "30%", height: "25px" }}
      type="text"
      id="inp"
      placeholder="Search..."
      onChange={(e) => setSearchTitle(e.target.value)}
    />
    <div className={"App"} >
    {loading ? (
      <h4>Loading ...</h4>
    ) : (
      <>
      <Cardtop />
      {console.log(posts)};
      {posts.filter((value) => {
          if (searchTitle === "") {
            return value;
          } else if (
            value.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            if(value==[]){
              return (<h2>NO Items</h2>)
            }else{
              return value;
            }
          }
        })
        
        .map((item) =>{ 
            if(item=='electronics'){
       return <Link to='/item/elec'><List name={item}/> </Link>
    }
            if(item=='jewelery'){
       return <Link to='/item/jewel'><List name={item}/> </Link>
    }
            if(item=="men's clothing"){
       return <Link to="/item/men"><List name={item}/> </Link>
    }
            if(item=="women's clothing"){
       return <Link to="/item/women"><List name={item}/> </Link>
    }
        })}
    </>
    )}
  </div>
  </>
  )
}
