import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Random({randomImage, array, setGif}) {
    const [randomArray, setrandomArray] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setrandomArray(array)
        setIsLoading(false)
    },[array])

    if(isLoading) {
        return (
            <section>
                Random
                <h2>Loading...</h2>
            </section>
        );
    }
    else {
        return (
            <section>
                <h2>Random</h2>
                {randomArray
                ? <Link to="/individual" onClick={()=>setGif(array)}><div className="card"><img className="gif-list-image" src={randomImage}></img></div></Link>
                : <img></img>}
            </section>
        );  
    }
  }
  
  export default Random;