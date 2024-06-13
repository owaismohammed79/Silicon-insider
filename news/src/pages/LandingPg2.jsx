import Card from './../Components/Card'

function LandingPg2() {
  return (
    <div className='lp2'>
      <div className="header">
        <div className='pg-title'>Latest</div>
        <div className="line" style={{width: '100%'}}></div>
      </div>
      <Card category= "Latest"/>
    </div>
  )
}

export default LandingPg2