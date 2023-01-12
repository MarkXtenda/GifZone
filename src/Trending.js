import Random from "./Random";
import { useState, useEffect } from "react";

function Trending({rating}) {
    const [randomArray, setrandomArray] = useState([])
    const [trendingArray, settrendingArray] = useState([])
    
    useEffect(()=>{
        Promise.all([
          fetch("https://dog.ceo/api/breed/hound/images/random/5").then(res => {
            if(res.ok) {
              return res.json()
            }
            throw res
          }),
          fetch("https://dog.ceo/api/breed/hound/images/random/5").then(res => {
            if(res.ok) {
              return res.json()
            }
            throw res
          })
      ]).then((urlData) => {
          settrendingArray(urlData[0].message)
          setrandomArray(urlData[1].message)
      }) 
    },[]);
    return (
        <div>
            <Random rating = {rating} array = {randomArray}></Random>
            <section>
                Trending
                <p>{rating}</p>
                <p>{trendingArray.map((image, id) => <img key={id} src={image} style={{ height: "100px", width: "100px" }}></img>)}</p>
            </section>
        </div>
    );
  }
  
  export default Trending;