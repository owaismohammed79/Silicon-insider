import Card from '../Components/Card'

function LandingPg2() {
  return (
    <div className='lp2'>
      <section id='sec2'>
      <div className="header">
        <div className='pg-title' style={{color: '#fff'}}>Latest</div>
        <div className="line" style={{width: '100%', position: 'relative', left: '1px'}}></div>
      </div>
      <Card category= "Latest"/>
      </section>
    </div>
  )
}

export default LandingPg2