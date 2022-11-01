import React from 'react'
import aboutImage from '../assets/images/about-image.png';

export const About = () => {
  return (
    <div className="bg-white">
        <div className="p-24 grid grid-cols-2">
            <div className="">
                <h2 className="text-3xl font-medium pb-6">About Us</h2>
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur ipsum ullam libero nemo inventore omnis voluptate ducimus accusantium voluptas. Quae reiciendis deleniti temporibus provident impedit quia, ipsum cumque quasi.
                    Quasi quisquam ea dolorem similique praesentium laboriosam ipsa modi qui soluta repudiandae? Voluptatum, deleniti optio nostrum quod non nihil consequatur nobis, in architecto, aliquid natus repudiandae molestias vitae rem animi?
                    Molestias laborum facere recusandae officiis eveniet velit. Obcaecati, voluptas.
                </p>
            </div>

            <div className="flex items-center justify-center">
                <img src={ aboutImage } alt="about" className='w-[400px] h-[400px] object-cover'/>
            </div>
        </div>
    </div>
  )
}