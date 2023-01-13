import { useState, useEffect } from "react";

function LoadMore({plusten, search, rating}) {

    const [LoadMoreArray, setLoadMoreArray] = useState([])
    const [initialVals, setInitialVals] = useState([search,  rating])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(()=>{
        setIsLoading(true)
        fetch("https://dog.ceo/api/breed/hound/images/random/5")
        .then(res => res.json())
        .then((data) => {
            const timer = setTimeout(() => {
                setIsLoading(false)
                setLoadMoreArray(LoadMoreArray.concat(data.message))
            }, 1000);
            return () => clearTimeout(timer);         
        })
    },[plusten]);

    console.log("if statement", search == initialVals[0] && initialVals[1] == rating)

    if(search == initialVals[0] && initialVals[1] == rating){
        return(
            <div>
                {LoadMoreArray.map((image, id) => <img key={id} src={image} style={{ height: "100px", width: "100px" }}></img>)}
                {isLoading &&
                    <h2>
                    Loading...
                    </h2>
                }
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