import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

import Cards from './Cards';

function Items() {
    const [book, setBook] = useState([]);

    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          setBook(res.data.filter((data) => data.category === "SS"));
        } catch (error) {
          console.log(error);
        }
      };
  
      getBook();
    }, []);
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Display Items</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium, illum quae reiciendis modi quas facere quo est consequuntur nulla sed excepturi a in pariatur placeat totam consectetur ducimus itaque. Officiis dolore accusamus ducimus obcaecati mollitia optio, incidunt, vel eligendi nesciunt cum exercitationem quo ab qui esse. Rem quia perferendis eveniet temporibus numquam exercitationem reprehenderit cum ullam, nobis non earum.</p>
            </div>
            <div className='slider-container'>
                <Slider {...settings}>
                    {book.map((item) => (
                        <div className='slider-item' key={item.id}>
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Items;
