import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data); // Set the fetched data to the book state
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []); // Dependency array is empty to run only on component mount

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='items-center justify-center text-center pt-20'>
          <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you{" "}
            <span className='text-orange-400 hover:text-blue-600'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro optio tempora? Vitae beatae incidunt pariatur porro sint commodi ex veniam cum. Enim ut repudiandae maiores necessitatibus? Sapiente, fugiat tempora?
            Eum fugit error eos tenetur quia corrupti ipsum, sint saepe iusto illo dolores amet sed libero ipsam. Odit architecto, nihil fuga nostrum similique earum asperiores, voluptatibus nulla eum iusto eligendi?
          </p>
          <Link to='/'>
            <button className='mt-6 bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
