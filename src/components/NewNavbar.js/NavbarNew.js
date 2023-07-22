import React from 'react'
import './NavbarNew.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function NavbarNew() {
  return (
        <div className="newNav">
            <div className="navData flex justify-between items-center">
                <div className="leftData flex justify-between relative items-center text-white ml-12 w-8/12">
                    <p className=' hover:border-b-2 flex gap-1'><AiOutlineShoppingCart className='text-2xl'/>All</p>
                    <p className=' hover:border-b-2'>Mobile</p>
                    <p className=' hover:border-b-2'>BestSeller</p>
                    <p className=' hover:border-b-2'>Fastion</p>
                    <p className=' hover:border-b-2'>Customer Service</p>
                    <p className=' hover:border-b-2'>Electonices</p>
                    <p className=' hover:border-b-2'>Prime</p>
                    <p className=' hover:border-b-2'>Today's Deal</p>
                    <p className=' hover:border-b-2'>Amazon Pay</p>
                </div>
                <div className="rightData">
                    <img src="/nav.jpg" alt="" />
                </div>
            </div>
        </div>
  )
}

export default NavbarNew