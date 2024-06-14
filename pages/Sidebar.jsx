import './../css/Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'></div>
        <ul>
        <li><a href='#sec1'>HOME</a></li>
        <li><a href='#sec2'>LATEST</a></li>
        <li><a href='#sec3'>AI</a></li>
        <li><a href='#sec4'>STARTUPS</a></li>
        <li><a href='#sec5'>ABOUT US</a></li>
        </ul>
    </div>
    
  )
}

export default Sidebar