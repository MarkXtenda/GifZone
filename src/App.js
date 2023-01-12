import logo from './logo.svg';
import './App.css';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import './index.css';
import { useEffect, useState } from 'react';

import Trending from './Trending';
import Random from './Random';
import Search from './Search';
import LoadMore from './LoadMore';

function App() {

  const [search, setSearch] = useState("")
  const [rating, setRating] = useState("g")
  
  let link = `https://api.giphy.com/v1/gifs/search?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&q=&limit=25&offset=0&rating=`
  let trending = `https://api.giphy.com/v1/gifs/trending?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=25&rating=`
  let random = `https://api.giphy.com/v1/gifs/random?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&tag=&limit=25&rating=`
  
  
  const [randomLink, setrandomLink] = useState(random+rating)
  const [trendingLink, settrendingLink] = useState(trending+rating)
  const [searchLink, setsearchLink] = useState(link+rating)

  const [randomArray, setrandomArray] = useState([])
  const [trendingArray, settrendingArray] = useState([])
  const [searchArray, setsearchArray] = useState([])
  const [plusten, setPlusten] = useState(0)

  // Testing useState
  const [test, setTest] = useState([])
  // Future "LoadMore" component, which load additional content, while reaching bottom of the page
  const callback = () => { 
    console.log('yeet') 
    setPlusten(plusten+10)
  };

  useBottomScrollListener(callback);

  function handleChange(e) {

    if (e.target.name == "search") {
      setSearch(e.target.value)
      setsearchLink(link+rating + "     " +search)

    } else {

      setRating(e.target.value)

      if (search.length > 0) {
        setsearchLink(link+rating + "     " +search)
      }
      else {
        setrandomLink(random+rating)
        settrendingLink(trending+rating)
      }
    }
  }

  return (
    <div className="App" style={{ height: "700px"}}>
      <header>
        <form onChange={(e) => handleChange(e)}>
          <input name="search" onChange={(e) => { handleChange(e)}} ></input>
          <select name = "rating" onChange={(e) => { handleChange(e)}}>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
        </form>
      </header>
      {search.length > 0 
      ?
      <Search search = {search} rating = {rating} ></Search>
      :
      <Trending rating = {rating} ></Trending>
      }
      <LoadMore plusten = {plusten} search = {search} rating = {rating}></LoadMore>
    </div>
  );
}

export default App;
