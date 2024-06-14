import './../css/Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'></div>
        <ul>
        <li className='sec'><a href='#sec1'>HOME</a></li>
        <li className='sec'><a href='#sec2'>LATEST</a></li>
        <li className='sec'><a href='#sec3'>AI</a></li>
        <li className='sec'><a href='#sec4'>STARTUPS</a></li>
        <li className='sec'><a href='#sec5'>ABOUT US</a></li>
        </ul>
    </div>
    
  )
}

export default Sidebar