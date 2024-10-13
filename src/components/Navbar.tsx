import React from 'react'
import { Link } from 'react-router-dom'

const Navbar : React.FC = () => {
  return (
    <nav className='bg-blue-600 p-4'>
        <Link to="/"><h1 className='text-white text-2xl'>E-commerce</h1></Link>
    </nav>
  )
}

export default Navbar