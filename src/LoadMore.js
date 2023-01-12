import { useState, useEffect } from "react";

function LoadMore({plusten, search, rating}) {

    const [LoadMoreArray, setLoadMoreArray] = useState([])
    const [initialVals, setInitialVals] = useState([search,  rating])
    useEffect(()=>{
        fetch("https://dog.ceo/api/breed/hound/images/random/5").then(res => res.json()).then((data) => setLoadMoreArray(LoadMoreArray.concat(data.message)))
    },[plusten]);
    console.log("if statement", search == initialVals[0] && initialVals[1] == rating)
    if(search == initialVals[0] && initialVals[1] == rating){
        return(
            <div>
                {LoadMoreArray.map((image, id) => <img key={id} src={image} style={{ height: "100px", width: "100px" }}></img>)}
            </div>
        );
    }
    else {
        setInitialVals([search,  rating])
        setLoadMoreArray([])
        return(
            <div></div>
        );
    }
  
  }
  
  export default LoadMore;