import logo from './logo.svg';
import './App.css';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import './index.css';
import { useEffect, useState } from 'react';

function App() {

  const [search, setSearch] = useState("")
  const [rating, setRating] = useState("g")
  let trending = `https://api.giphy.com/v1/gifs/trending?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=25&rating=`
  let random = `https://api.giphy.com/v1/gifs/random?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&tag=&limit=25&rating=`
  let link = `https://api.giphy.com/v1/gifs/search?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&q=&limit=25&offset=0&rating=`
  const [randomLink, setrandomLink] = useState(random+rating)
  const [trendingLink, settrendingLink] = useState(trending+rating)
  const [searchLink, setsearchLink] = useState(link+rating)

  const [randomArray, setrandomArray] = useState([])
  const [trendingArray, settrendingArray] = useState([])
  const [searchArray, setsearchArray] = useState([])

  // Testing useState
  const [test, setTest] = useState([])
  // Future "LoadMore" component, which load additional content, while reaching bottom of the page
  const callback = () => { console.log('yeet') };

  useBottomScrollListener(callback);
  // Trending and random pages
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
  console.log("random", randomArray)
  console.log("trending", trendingArray)
  // Search page

  // useEffect(()=>{
  //   fetch(trendingLink).then(res => res.json()).then(data => setTest(data.data))
  //   console.log(test)
  // },[]);

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
    <div className="App">
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
      <section>
        Trending
        <p>{trendingLink}</p>
      </section>
      <section>
        Random
        <p>{randomLink}</p>
        {/* <p>{test.map(data => <img src={data.images.fixed_width.url}></img>)}</p> */}
      </section>
      <section>
        Search
        <p>{search}</p>
        <p>{rating}</p>
        <p>{searchLink}</p>
        </section>
    </div>
  );
}

export default App;
