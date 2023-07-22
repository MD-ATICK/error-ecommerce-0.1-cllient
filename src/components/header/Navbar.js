import React, { useEffect } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UserMeFetch } from '../User_Slice/UserMeSlice'

function Navbar() {

    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const { user, loading } = useSelector((state) => state.meinfo)

    const callAboutPage = async () => {
        try {
            const res = await fetch(`/api/user/me`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            console.log(data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callAboutPage()
    }, []);

    return (
        <header>
            <nav>
                <div className="left">
                    <Link to='/' className='cursor-pointer'> <img src="./amazon.png" alt="" /></Link>
                    <div className="searchBar flex justify-center items-center">
                        <input type="text" className='rounded py-2 px-3 w-96' name="search" id="search" placeholder='Search' />
                        <BiSearchAlt className='w-14 h-10 p-2 -m-1 bg-yellow-500 rounded cursor-pointer' />
                    </div>
                </div>
                {/* <button className='border-2 border-black rounded-md px-4 py-2' onClick={handleClick}>click</button> */}
                <div className="right text-white">
                    <Link to='/carts'> <div className="cart flex justify-center items-center gap-x-3 relative">
                        <AiOutlineShoppingCart className='text-2xl' />
                        <p>Cart</p>
                        <div className='bg-blue-600 absolute -top-3 left-4 rounded-full text-sm h-5 w-5 text-center flex justify-center items-center '>5</div>
                    </div></Link>
                    {user && user.success === true ? <img src="/profile.png" className='h-11 w-11' alt="" /> :
                        <Link to='/login' className='py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-md shadow-md'><button>Sign in</button></Link>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar