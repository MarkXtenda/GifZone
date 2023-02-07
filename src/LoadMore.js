import { useState, useEffect } from "react";

function LoadMore({plusten, search, rating, trendinglinkpart, searchlinkpart, link}) {

    const [firstRender, setFirstRender] = useState(true)
    const [LoadMoreArray, setLoadMoreArray] = useState([])
    const [initialVals, setInitialVals] = useState([search,  rating])
    const [isLoading, setIsLoading] = useState(false)
    const [loadMoreLink, setloadMoreLink] = useState(``)

    async function inni(link) {
        await fetch(link)
        .then(res => res.json())
        .then(data => {
            const timer = setTimeout(() => {
                setIsLoading(false)
                console.log(data.data)
                setLoadMoreArray(LoadMoreArray.concat(data.data))
            }, 500);
            return () => clearTimeout(timer);  
        })
        .catch(err => console.error(err));
      }
      
    useEffect(()=>{
        if (plusten == 10) {
            setFirstRender(false)
            setInitialVals([search,  rating])
            setLoadMoreArray([])
            setloadMoreLink(`${link}&offset=${plusten}`)
        } else {
        setIsLoading(true)
        inni(`${link}&offset=${plusten}`)
        // setloadMoreLink(`${link}&offset=${plusten}`)
        // console.log(loadMoreLink)
        // fetch(loadMoreLink)
        // .then(res => res.json())
        // .then((data) => {
        //     const timer = setTimeout(() => {
        //         setIsLoading(false)
        //         setLoadMoreArray(LoadMoreArray.concat(data.data))
        //         console.log(LoadMoreArray)
        //     }, 1000);
        //     return () => clearTimeout(timer);         
        // })
    }
    },[plusten]);

    if(search == initialVals[0] && initialVals[1] == rating){

        return(
            <section>
                <div>{LoadMoreArray.map((image, id) => <img key={id} src={image.images.downsized.url}></img>)}</div>
                {isLoading &&
                    <h2>
                    Loading...
                    </h2>
                }
            </section>
        );
    }
    else {
        setInitialVals([search,  rating])
        setLoadMoreArray([])
        return(
            <section></section>
        );
    }
  
  }
  
  export default LoadMore;