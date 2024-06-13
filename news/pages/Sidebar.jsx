import React from 'react'
import './../css/Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'></div>
        <ul>
        <li><a href='#sec1'>HOME</a></li>
        <li><a href='#sec2'>PAGE2</a></li>
        <li><a href='#sec3'>PAGE3</a></li>
        <li><a href='#sec4'>PAGE4</a></li>
        <li><a href='#sec5'>FOOTER</a></li>
        </ul>
    </div>
    
  )
}

export default Sidebar