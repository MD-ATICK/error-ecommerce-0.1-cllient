import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './SignUpOrSignOut.css'
import { UserPostFetch } from '../User_Slice/UserLoginSlice'

function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginInfo = { email, password }
    const { user, loading } = useSelector((state) => state.user)
    const success = user.success
    const token = localStorage.getItem('token')

    
    
    const HandleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(UserPostFetch({ email, password }))
            console.log('clicked')
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        console.log(user.token)
        if (user && success === true ) {
            localStorage.setItem('token', user.token)
            navigate('/')
        }
        user && success === false && console.log(user.error)
        console.log('atick2')
    }, [success , token , dispatch]);

    return (
        <div className='signup mt-6'>
            <img src="./blacklogoamazon.png" className='mx-auto w-60 h-16 object-cover' alt="" />
            <div className='text-left form border-2 border-stone-500'>
                <h1 className='text-3xl py-3 mb-4 font-medium'>Sign-In</h1>
                <form action="" className='flex flex-col' onSubmit={HandleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} name='email' id='email'  />
                    <label htmlFor="password" className='mt-4'>Password</label>
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} name='password' id='password'  />
                    <button type='submit' className='py-2 mt-5 bg-yellow-400 border-black border rounded-md'>Continue</button>
                </form>
            </div>
            <p className='my-4'>New to Amazon</p>
            <Link to='/sign-up' className='py-2 mt-3 border border-black rounded-sm px-6 hover:bg-gray-200 bg-gray-50'>Create your Amazon Account</Link>
        </div>
    )
}

export default SignUp