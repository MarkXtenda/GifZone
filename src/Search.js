import { useEffect, useState } from "react"
import useDebounce from './hooks/debounce';

import { debounce } from "lodash";

function Search({search, rating, link}) {
    const [searchArray, setsearchArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const searchlinkpart = `https://api.giphy.com/v1/gifs/search?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=25`
    // const [link, setLink] = useState(`${searchlinkpart}&q=${search}&rating=${rating}`)

    const debouncedSearchTerm = useDebounce(search, 500);

    async function inni(link) {
        await fetch(link)
        .then(res => res.json())
        .then(data => {
            const timer = setTimeout(() => {
                setIsLoading(false)
                console.log(data.data)
                setsearchArray(data.data)
            }, 500);
            return () => clearTimeout(timer);  
        })
        .catch(err => console.error(err));
      }
      // trying to implement search in App.js component
      useEffect(()=>{
        if (link[30] == "s") {
            // 
            // console.log(debouncedSearchTerm, rating)
            setIsLoading(true)
            console.log(search)
            inni(link)
        }
      },[link])
    // useEffect(()=>{
    //     if (search.length > 0) {
    //         // 
    //         // console.log(debouncedSearchTerm, rating)
    //         setIsLoading(true)
    //         console.log(search)
    //         setLink(`${searchlinkpart}&q=${search}&rating=${rating}`)
    //         inni(link)
    //         //   
    //         // setIsLoading(true)
    //         // setLink(`${searchlinkpart}&q=${search}&rating=${rating}`)
    //         // // setLink(`https://dog.ceo/api/breed/hound/images/random/5`)
    //         // fetch(link)
    //         // .then(res => {
    //         //     if (res.ok) {
    //         //         return res.json();
    //         //     }
    //         //     throw new Error('Something went wrong');})
    //         // .then((data) => {
    //         //     const timer = setTimeout(() => {
    //         //         setIsLoading(false)
    //         //         console.log(data.data)
    //         //         setsearchArray(data.data)
    //         //     }, 500);
    //         //     return () => clearTimeout(timer);         
    //         // }).catch((error) => {
    //         //     console.log(error)
    //         // })
    //     }
    // },[search, rating]);

// if anything is typed in search bar, result would be shown. Otherwise 'Search' component returns void

    if (search.length > 0) {
        return (
            <section>
            {isLoading 
            ? <h2>Searching...</h2>
            :
            <div>
                <h2>Results:</h2>
                <div>{ searchArray.length > 0 
                    ? searchArray.map((image, id) => <img key={id} src={image.images.downsized.url}></img>)
                    : <h2>Sorry. No results were found...</h2>
                }</div>
            </div>}
            </section>
        );} 
  }
  
  export default Search;