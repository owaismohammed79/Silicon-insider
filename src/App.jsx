import Body from '../pages/Body.jsx'
import Sidebar from '../pages/Sidebar.jsx'
import LandingPg2 from '../src/pages/LandingPg2.jsx'
import LandingPg3 from '../src/pages/LandingPg3.jsx'
import LandingPg4 from '../src/pages/LandingPg4.jsx'
import Footer from '../src/Components/Footer.jsx'

function App() {
  return (
    <div >
      <Sidebar/>
      <Body />
      <div>
        <LandingPg2 />
        <LandingPg3 />
        <LandingPg4 />
      </div>
      <Footer />
    </div>  
   
  )
}

export default App