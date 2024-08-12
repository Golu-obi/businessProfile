import React from 'react';

function Cards({ item }) {
  return (
      <>
    <div className='mt-5 my-5 p-3'>

    <div className="card bg-base-100 w-92  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure className=' overflow-hidden'>
        <img
          src={item.image}
          alt={item.name}
          />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          {/* Optionally, you can add a badge or any additional element here */}
        </h2>
        <p>{item.title}</p>
        {/* <p className="text-lg font-semibold">Rs {item.Price}/Pcs</p> */}
        <div className="card-actions justify-between">
          <div className='cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-gray-950	hover:text-white'>Explore</div>
          <div className="badge badge-outline">{item.category}</div>

        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Cards;
