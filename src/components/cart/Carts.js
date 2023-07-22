import React, { useState } from 'react'
import Footer from '../footer/Footer'

function Carts() {

  const [quantity, setquantity] = useState(0);
  console.log(quantity)

  return (
    <div>
      <div>
        <div className="grid carts p-9">
          <div className="left p-3 mr-6 border-2 border-purple-800">
            <h1>Shopping Cart</h1>
            <p className='text text-teal-800'>Select All Items</p>
            <p className='text-right pb-1 mb-4 border-b-2 border-stone-500'>Price</p>
            
            <div className='border-4 border-red-600'>

              <div className='flex justify-between p-2 border-2 border-yellow-600'>
                <div>
                  <img className='w-60' src="https://media.istockphoto.com/id/537270808/photo/security-concept-smartwatch-with-combination-padlock-3d-render.jpg?s=612x612&w=0&k=20&c=TAIV2KY1anPwtKAUfz9oCEnwYNE7uJtFKV39RBV2Nno=" alt="" />
                </div>
                <div className=''>
                    <p>Molfe Sencse 500 Smartwatch (Black Strap , Freesize) smartwatch</p>
                    <p className='text text-yellow-600'>Usually dispatched in 8 days</p>
                    <p className='text'>Eligible for FREE Shipping</p>
                    <div className='flex justify-evenly'>
                      <select name="" id="" onChange={ (e) => setquantity(e.target.value)} className='border-2 border-stone-600'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button className='text text-teal-800 border-r-2 pr-9 border-teal-900'>Delete</button>
                      <button className='text text-teal-800 border-r-2 pr-9 border-teal-900'>Save or Later</button>
                      <button className='text text-teal-800 '>See more like this</button>
                    </div>
                </div>
                <h1>4048.00</h1>
              </div>
              <div className='flex justify-between p-2 border-2 border-yellow-600'>
                <div>
                  <img className='w-60' src="https://media.istockphoto.com/id/537270808/photo/security-concept-smartwatch-with-combination-padlock-3d-render.jpg?s=612x612&w=0&k=20&c=TAIV2KY1anPwtKAUfz9oCEnwYNE7uJtFKV39RBV2Nno=" alt="" />
                </div>
                <div className=''>
                    <p>Molfe Sencse 500 Smartwatch (Black Strap , Freesize) smartwatch</p>
                    <p className='text text-yellow-600'>Usually dispatched in 8 days</p>
                    <p className='text'>Eligible for FREE Shipping</p>
                    <div className='flex justify-evenly'>
                      <select name="" id="" onChange={ (e) => setquantity(e.target.value)} className='border-2 border-stone-600'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button className='text text-teal-800 border-r-2 pr-9 border-teal-900'>Delete</button>
                      <button className='text text-teal-800 border-r-2 pr-9 border-teal-900'>Save or Later</button>
                      <button className='text text-teal-800 '>See more like this</button>
                    </div>
                </div>
                <h1>4048.00</h1>
              </div>
              <div className='flex justify-between p-2 border-2 border-yellow-600'>
                <div>
                  <img className='w-60' src="https://media.istockphoto.com/id/537270808/photo/security-concept-smartwatch-with-combination-padlock-3d-render.jpg?s=612x612&w=0&k=20&c=TAIV2KY1anPwtKAUfz9oCEnwYNE7uJtFKV39RBV2Nno=" alt="" />
                </div>
                <div className=''>
                    <p>Molfe Sencse 500 Smartwatch (Black Strap , Freesize) smartwatch</p>
                    <p className='text text-yellow-600'>Usually dispatched in 8 days</p>
                    <p className='text'>Eligible for FREE Shipping</p>
                    <div className='flex justify-evenly'>
                      <select name="" id="" onChange={ (e) => setquantity(e.target.value)} className='border-2 border-stone-600'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button className='text text-teal-800 border-r-2 pr-9 border-teal-900'>Delete</button>
                      <button className='text text-teal-800 border-r-2 pr-9 border-teal-900'>Save or Later</button>
                      <button className='text text-teal-800 '>See more like this</button>
                    </div>
                </div>
                <h1>4048.00</h1>
              </div>

            </div>
          </div>
          <div className="right flex flex-col mt-3 shadow-lg rounded-md">
            <div className='mb-3 border-2 border-gray-800'>
              <img className='object-cover' src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
            </div>
            <div className='flex flex-col h-80 mt-4 justify-center border-2 border-orange-500 '>
              <p className='text text-teal-800'>Your order is eligible for FREE Delivery</p>
              <p className="text">Select this option at checkout Details</p>
              <p className='text text-lg'>Subtotal (1) : <span className='text-lg font-semibold'>4049.00</span></p>
              <button className='py-2 px-6 bg-yellow-400 rounded-md my-3'>Processd to Buy</button>
              <select name="" id="" className='p-2'>
                <option value="">Emi Avaiable</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Carts