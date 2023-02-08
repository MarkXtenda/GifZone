import logo from './logo.svg';
import './App.css';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import './index.css';
import { useEffect, useState } from 'react';

import Header from './Header';
import HeroSection from './HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndividualGif from './IndividualGif';
import Content from './Content';

function App() {

  // const [search, setSearch] = useState("")
  const rating = "g"
  const [heroSection, setHeroSection] = useState(true)
  const [headerData, setHeaderData] = useState({ search: "", rating: "g" })
  const [individual, setIndividual] = useState(null)
  const searchlinkpart = `https://api.giphy.com/v1/gifs/search?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=20`
  const trendinglinkpart = `https://api.giphy.com/v1/gifs/trending?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=20`
  const randomlinkpart = `https://api.giphy.com/v1/gifs/random?api_key=8UYztLExA1SNDknw5jTntzNLn7SHxgzT&limit=20`

  const [plusten, setPlusten] = useState(10)
  // FLoadMore component, which load additional content, while reaching bottom of the page
  const callback = () => { 
    console.log('send plusten') 
    setPlusten((plusten)=>plusten+10)
  };

  // Function that checks if user reached bottom of the page
  useBottomScrollListener(callback);

  // Submit function that proccesses input from Header component
  function handleSubmit(e) {
    e.preventDefault()
    setHeroSection(false)
    setPlusten(10)
    setHeaderData({
      [e.target[0].name]: e.target[0].value.replaceAll(" ", "_"),
      [e.target[1].name]: e.target[1].value
    });
  }

  // trying to implement search in App.js component
  const [link, setLink] = useState(`${trendinglinkpart}&rating=${rating}`)
  const [randomImage, setrandomImage] = useState(null)
  const [arr1,setArr1] =useState([])
  const [arr2,setArr2] =useState([])

  // Check if user searched for anything and return appropriate links
  useEffect(()=>{
    if (headerData.search.length > 0) {
      setLink(`${searchlinkpart}&q=${headerData.search}&rating=${headerData.rating}`)
    } 
    else {
      setLink(`${trendinglinkpart}&rating=${headerData.rating}`)
    }
    console.log(headerData.search, headerData.rating)
  },[headerData.search, headerData.rating])

  // Fetch Random and Trending data, when page is loaded
  useEffect(()=>{
  Promise.all([
    fetch(`${randomlinkpart}&rating=${headerData.rating}`).then(res => res.json()),
    fetch(`${trendinglinkpart}&tag=burrito&rating=${headerData.rating}`).then(res => res.json())])
    .then(([urlOneData, urlTwoData]) => {
      setArr1(urlOneData.data)
      setrandomImage(urlOneData.data.images.downsized.url)
      setArr2(urlTwoData.data)
    })
  },[])

  // Function that suppose to handle the input from header and return appropriate result in real time. for now - rejected
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
    <div className="App">
      <Header
      search = {headerData.search} 
      rating = {headerData.rating} 
      data={headerData} 
      handleSubmit = {handleSubmit}>
      </Header>
      {heroSection &&
        <HeroSection display={setHeroSection}></HeroSection>
      }
      <Router>
        <Routes>
        <Route index element={<Content
        heroSection = {heroSection} 
        headerData = {headerData}
        link = {link}
        randomImage = {randomImage}
        array1 = {arr1}
        array2 = {arr2}
        setGif = {setIndividual}
        plusten = {plusten} 
        />}></Route>
          <Route path="/individual" element={<IndividualGif 
          heroSection = {heroSection}
          gif = {individual}
          />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
