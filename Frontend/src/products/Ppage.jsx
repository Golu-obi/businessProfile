import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Products from '../Components/Products';


function products() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Products/>

    </div>
    <Footer/>

    </>
  )
}

export default products
