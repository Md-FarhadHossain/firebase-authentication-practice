import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto'>
        <nav className='flex items-center justify-between'>
            <Link to='/' className='text-3xl font-semibold'>Firbae Auth</Link>

            <ul className='flex'>
                <li className='ml-4 font-semibold'><Link to='/'>Home</Link></li>
                <li className='ml-4 font-semibold'><Link to='/login'>Sign in</Link></li>
                <li className='ml-4 font-semibold'><Link to='/signup'>Sing Up</Link></li>
                <li className='ml-4 font-semibold'><Link to='/product'>Product</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
