import { useEffect, useState } from "react";

function Random({rating, randomlinkpart, array}) {

    const [randomArray, setrandomArray] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setrandomArray(array)
        console.log(randomArray)
    },[array])
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

    // useEffect(()=>{
    //     console.log(`${randomlinkpart}&rating=${rating}`)
    //     setIsLoading(true)
    //     fetch(`https://dog.ceo/api/breeds/image/random`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         const timer = setTimeout(() => {
    //             setIsLoading(false)
    //             setrandomArray(data)
    //             // console.log(data)
    //             // console.log("array",randomArray)
    //             // console.log(`${randomlinkpart}&rating=${rating}`)
    //         }, 1000);
    //         return () => clearTimeout(timer);         
    //     })   

    //     // fetch(randomLink)
    //     // .then(res => res.json())
    //     // .then((data) => {
    //     //     const timer = setTimeout(() => {
    //     //         setIsLoading(false)
    //     //         setrandomArray(data.data)
    //     //         console.log(randomArray)
    //     //     }, 1000);
    //     //     return () => clearTimeout(timer);         
    //     // })
    // },[rating]);

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
                {randomArray.length > 0 
                ? <img src={randomArray}></img>
                : <img></img>}
            </section>
        );
    }
  }
  
  export default Random;