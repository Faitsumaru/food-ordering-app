import React from 'react'

export const AddProduct = ({ onAddProduct }) => {
  return (
    <div className="flex justify-end">
        <button onClick={onAddProduct} className='bg-yellow-400 hover:bg-yellow-500 transition ease-in duration-300 rounded-full w-5 h-5 flex items-center justify-center text-lg pb-1'>
            <span className='drop-shadow'>+</span>
        </button>
    </div>
  )
}
