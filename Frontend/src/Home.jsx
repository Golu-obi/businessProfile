import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Items from './Components/Items';
import SliderComponent from './Components/SliderComponent';

function Home() {
  return (
    <>
     <Navbar/>
     <br />
     <br />
     <br />
    <SliderComponent />
    <Banner/>
    <Items/>
    <Footer/>
    </>
  )
}

export default Home
