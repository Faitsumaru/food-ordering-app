import React from 'react';
import Button from './elements/Button';

export const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 pt-7 mx-auto relative flex max-sm:flex-col items-center justify-between">
        <div className="banner__descr w-full md:w-1/2 p-3 max-sm:text-center">
            <h2 className="banner__title mb-16 max-sm:mb-3 font-bold text-5xl text-white">
                Food Ordering Made Easy
            </h2>

            <p className="banner__text font-semibold text-lg text-red-600 py-4">
                Get Started Today!
            </p>

            <div className="banner__btn-container flex items-center max-lg:flex-col max-lg:items-center">
                <Button>Order Now</Button>
                <a href="/menu" className='text-yellow-400 hover:text-yellow-500 transition ease-in duration-300 font-bold text-decoration-line px-3 mx-3 max-lg:pt-4 max-lg:px-0 max-lg:mx-0'>
                    See Menu
                </a>
            </div>
        </div>

        <div className="banner__img w-full md:w-1/2 p-3 flex justify-end max-sm:w-1/2">
            <img src={ require("../assets/images/pizza_banner.png") } alt="banner" className='max-h-95' />
        </div>
    </div>
  )
}