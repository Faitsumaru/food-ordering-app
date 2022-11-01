import React from 'react';
import Button from './elements/Button';

export const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between">
        <div className="banner__descr w-full md:w-1/2 p-3">
            <h2 className="banner__title mb-16 font-bold text-5xl text-white">
                Food Ordering Made Easy
            </h2>

            <p className="banner__text font-semibold text-lg text-red-600 py-4">
                Get Started Today!
            </p>

            <div className="banner__btn-container">
                <Button>Order Now</Button>
                <a href="/menu" className='text-yellow-400 hover:text-yellow-500 transition ease-in duration-300 font-bold text-decoration-line px-3 mx-3'>
                    See Menu
                </a>
            </div>
        </div>

        <div className="banner__img w-full md:w-1/2 p-3 flex justify-end">
            <img src={ require("../assets/images/pizza_banner.png") } alt="banner" className='max-h-95' />
        </div>
    </div>
  )
}