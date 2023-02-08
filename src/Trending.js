import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Trending({array, setGif}) {
    const [trendingArray, settrendingArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        settrendingArray(array)
        setIsLoading(false)
    },[array])
    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch(`${trendinglinkpart}&rating=${rating}`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         const timer = setTimeout(() => {
    //             setIsLoading(false)
    //             settrendingArray(data.data)
    //             // console.log(trendingArray)
    //         }, 1000);
    //         return () => clearTimeout(timer);         
    //     })
    // },[rating]);

    if(isLoading) {
        return (
            <section>
                Trending
                <h2>Loading...</h2>
            </section>
        );
    }
    else {
        return (
            <section>
                <h2>Trending</h2>
                <div className="card">{trendingArray.map((image, id) => <Link key={id} to="/individual" onClick={()=>setGif(image)}><img className="gif-list-image" src={image.images.downsized.url}></img></Link>)}</div>
            </section>
        );
    }
  }
  
  export default Trending;