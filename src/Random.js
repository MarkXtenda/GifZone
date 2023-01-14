import { useEffect, useState } from "react";

function Random({rating, randomlinkpart}) {

    const [randomArray, setrandomArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // async function inni(link) {
    //     await fetch(link)
    //     .then(res => res.json())
    //     .then(data => {
    //         const timer = setTimeout(() => {
    //             setIsLoading(false)
    //             setrandomArray(data.data)
    //             console.log(randomArray)
    //             console.log(data.data)
    //             console.log(randomLink)
    //         }, 500);
    //         return () => clearTimeout(timer);  
    //     })
    //     .catch(err => console.error(err));
    //   }

    useEffect(()=>{
        console.log(`${randomlinkpart}&rating=${rating}`)
        setIsLoading(true)
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then((data) => {
            const timer = setTimeout(() => {
                setIsLoading(false)
                setrandomArray(data)
                console.log(data)
                console.log("array",randomArray)
                console.log(`${randomlinkpart}&rating=${rating}`)
            }, 1000);
            return () => clearTimeout(timer);         
        })        
        // fetch(randomLink)
        // .then(res => res.json())
        // .then((data) => {
        //     const timer = setTimeout(() => {
        //         setIsLoading(false)
        //         setrandomArray(data.data)
        //         console.log(randomArray)
        //     }, 1000);
        //     return () => clearTimeout(timer);         
        // })
    },[rating]);

    if(isLoading) {
        return (
            <section>
                Random
                <p>{rating}</p>
                <h2>Loading...</h2>
            </section>
        );
    }
    else {
        return (
            <section>
                Random
                <p>{rating}</p>
                {/* <p>{randomArray.map((image, id) => <img key={id} src={image.images.downsized.url} style={{ height: "100px", width: "100px" }}></img>)}</p> */}
            </section>
        );
    }
  }
  
  export default Random;