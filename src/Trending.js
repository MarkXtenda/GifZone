import { useState, useEffect } from "react";

function Trending({rating, trendinglinkpart, array}) {
    const [trendingArray, settrendingArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        settrendingArray(array)
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
                <p>{rating}</p>
                <h2>Loading...</h2>
            </section>
        );
    }
    else {
        return (
            <section>
                Trending
                <p>{rating}</p>
                <div>{trendingArray.map((image, id) => <img key={id} src={image.images.downsized.url}></img>)}</div>
            </section>
        );
    }
  }
  
  export default Trending;