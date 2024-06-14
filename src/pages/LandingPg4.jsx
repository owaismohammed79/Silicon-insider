import Card from "../Components/Card"

function LandingPg4() {
  return (
    <div className='lp4'>
        <section id='sec4'>
        <div className="header">
        <div className='pg-title'>Startups</div>
        <div className="line" style={{width: '100%', position: 'relative', left: '1px'}}></div>
      </div>
      <Card category="startup"/>
      </section>
    </div>
  )
}

export default LandingPg4