import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { UserPostRegisterFetch } from '../User_Slice/UserRegisterSlice';
import convertToBase64 from './Base64Convert';
import './SignUpOrSignOut.css'

function SignOut() {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [phoneno, setphoneno] = useState('');
    const [password, setpassword] = useState('');
    const [file, setfile] = useState('/profile.png');

    const info = {
        url : file ,
        name : fname.trim() + ' ' + lname.trim() ,
        email ,
        phoneno ,
        password
    }
    const dispatch = useDispatch()

    const HandleSubmit = (e) => {
        e.preventDefault()
        dispatch(UserPostRegisterFetch(info))
    }
    
    const onUpload = async (e) => {
        const base64 = await convertToBase64(e.target.files[0])
        setfile(base64)
        console.log(base64)
    }

    return (
        <div className='signout mt-4'>
            <img src="./blacklogoamazon.png" className='mx-auto w-60 h-16 object-cover mt-6' alt="" />
            <div className=' form2 border-2 border-stone-500'>
                <form action="" className='flex flex-col text-left' onSubmit={HandleSubmit}>
                    <label htmlFor="profile">
                        <img src={file} alt="pic koi" className='w-24 object-cover rounded-full h-24 shadow-lg my-2 mx-auto cursor-pointer' />
                    </label>
                    <input type="file" id='profile' onChange={onUpload} name='profile' className='hidden' />
                    <div className='flex justify-between max-w-full gap-2 mb-2'>
                        <div>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" placeholder='First Name' className='w-full' value={fname} onChange={(e) => setfname(e.target.value)} name='fname' id='fname' required />
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" placeholder='Last Name' className='full' value={lname} onChange={(e) => setlname(e.target.value)} name='lname' id='lname' required />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} name='email' id='email' required />
                    <label htmlFor="phoneno" className='mt-3'>Phone No</label>
                    <input type="text" placeholder='Phone Number' value={phoneno} onChange={(e) => setphoneno(e.target.value)} name='phoneno' id='phoneno' required />
                    <label htmlFor="password" className='mt-3'>Password</label>
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} name='password' id='password' required />
                    <button type='submit' className='py-2 mt-2 mb-2 bg-yellow-400 border-black border rounded-md'>Continue</button>
                </form>
            </div>
            <p className='mt-1'>Already have a account? <Link to='/login' className='text-center hover:underline text-center'>sign up</Link></p>
        </div>
    )
}

export default SignOut