import React from 'react'
import Navbar from './Navbar'
import Fotter from './Fotter'

function  Layout({children}) {
  return (
    <div>
        <Navbar />
      <main>{children}</main>
      <Fotter />
    </div>
  )
}

export default Layout
