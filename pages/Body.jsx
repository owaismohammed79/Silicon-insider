import './../css/body.css'
import './../css/section.css'

function Body() {
  return (
    <div>
      <section id="sec1">
    <div className='b1'>
      
      <div className='a1'>
        <div className="h" style={{color: '#8acb88'}}>
        <h1> Stay Ahead of the Curve:<br></br> Cutting-Edge Tech News and Innovations</h1>
        </div>
        
        <div className="img"></div>
      </div>
      <div className='s1'>
        <div className='i1'>
          <a href = "https://techxplore.com/news/2024-06-photonic-chip-ultrafast-machine-vision.html" style = {{textDecoration: 'none'}}className='title'><h3>Photonic chip integrates sensing and computing for ultrafast machine vision</h3></a>
        </div>
        <div className="i2">
        <a href = "https://blockchain.news/news/nvidia-rtx-powered-ai-hardware-software-computex-2024" style = {{textDecoration: 'none'}}className='title'><h3>NVIDIA Unveils:<br></br>  New RTX-Powered AI Hardware and Software at COMPUTEX 2024</h3></a>
        </div>
        <div className="i3">
        <a href = "https://www.cnbc.com/2024/03/26/apple-announces-wwdc-2024-ai-announcements-expected.html" style = {{textDecoration: 'none'}}className='title'><h3>Apple Introduces AI-Driven Features at Annual Conference</h3></a>
        </div>
      </div>
    </div>
    </section>
      
     
    
    </div>
  )
}

export default Body;