import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { BiSearchAlt } from 'react-icons/bi'

const Navbar = () => {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    // console.log(user.email);

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute text-sm sm:text-lg'>
            <Link to='/'>
                <h1 className='text-blue-600 text-2xl font-extrabold cursor-pointer sm:text-4xl'>SOURYAX</h1>
            </Link>
            {user?.email ? <div className='flex items-center flex-wrap'>
                <Link to='/search'><BiSearchAlt className='w-[50px] h-[30px] sm:w-[35px] sm:m-2 text-gray-400 cursor-pointer'/></Link>
                <Link to='/account'>
                    <button className='text-white pr-4'>Account</button>
                </Link>
                    <button onClick={handleLogout} className='bg-blue-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
            </div> :
                <div className='flex items-center flex-wrap '>
                    <Link to='/search'><BiSearchAlt className='w-[50px] h-[30px] sm:w-[35px] sm:m-2 text-gray-400 cursor-pointer'/></Link>
                    <Link to='/login'>
                        <button className='text-white pr-4'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-blue-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
                    </Link>
                </div>}
        </div>
    )
}

export default Navbar