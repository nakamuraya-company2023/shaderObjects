import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='logo'>
        <Link href="/">
          Home
        </Link>
        </div>
      
    </div>
  )
}

export default Navbar
