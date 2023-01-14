import logo from './logo.svg';
import './App.css';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import './index.css';
import { useEffect, useState } from 'react';

import Header from './Header';
import Trending from './Trending';
import Random from './Random';
import Search from './Search';
import LoadMore from './LoadMore';

function App() {

  // const [search, setSearch] = useState("")
  const [rating, setRating] = useState("g")

  const [headerData, setHeaderData] = useState({ search: "", rating: "g" })

  const searchlinkpart = `https://api.giphy.com/v1/gifs/search?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=10`
  const trendinglinkpart = `https://api.giphy.com/v1/gifs/trending?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=10`
  const randomlinkpart = `https://api.giphy.com/v1/gifs/random?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&tag=&limit=10`

  const [plusten, setPlusten] = useState(10)
  // Future "LoadMore" component, which load additional content, while reaching bottom of the page
  const callback = () => { 
    console.log('send plusten') 
    setPlusten((plusten)=>plusten+10)
  };

  useBottomScrollListener(callback);

  function handleSubmit(e) {
    e.preventDefault()
    setPlusten(10)
    setHeaderData({
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value
    });
  }

  // trying to implement search in App.js component
  const [link, setLink] = useState(`${trendinglinkpart}&rating=${rating}`)
  const [randomLink, setrandomLink] = useState(`${randomlinkpart}&rating=${headerData.rating}`)
  useEffect(()=>{
    if (headerData.search.length > 0) {
      setLink(`${searchlinkpart}&q=${headerData.search}&rating=${headerData.rating}`)
    } else {
      setLink(`${trendinglinkpart}&rating=${headerData.rating}`)
      setrandomLink(`${randomlinkpart}&rating=${headerData.rating}`)
    }
    console.log(headerData.search, headerData.rating)
  },[headerData.search, headerData.rating])
  // 

  // function handleChange(e) {
  //   // if (e.target.name == "search") {
  //   //   setSearch((search)=>e.target.value)
  //   // } else {
  //   //   setRating((rating)=>e.target.value)
  //   // }
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setHeaderData({
  //     ...headerData,
  //     [name]: value,
  //   });
  //  }

  return (
    <div className="App" style={{ height: "700px"}}>
      <Header 
      search = {headerData.search} 
      rating = {headerData.rating} 
      data={headerData} 
      handleSubmit = {handleSubmit}>
      </Header>
      {headerData.search.length > 0 
      ?
      <Search 
      search = {headerData.search} 
      rating = {headerData.rating} 
      searchlinkpart = {searchlinkpart}
      link = {link}>
      </Search>
      : 
      <div>
        <Random 
        rating = {headerData.rating} 
        randomlinkpart={randomlinkpart}/>
        <Trending 
        rating = {headerData.rating} 
        trendinglinkpart = {trendinglinkpart}
        link = {link}/>
      </div>
      }
      <LoadMore 
      plusten = {plusten} 
      search = {headerData.search} 
      rating = {headerData.rating} 
      trendinglinkpart = {trendinglinkpart}
      searchlinkpart = {searchlinkpart}
      link={link}
      />
    </div>
  );
}

export default App;
