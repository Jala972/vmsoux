// import { Link } from 'react-router-dom'
// import SectionOne from '../../Components/SectionOne'
import '../../Utils/Style/Home.css'
import Footer from '../../Components/Footer'

function About() {
  return (
    <div className="pageContainer">
      <div className="pageMain">
        {/* <Link to="/">
          <SectionOne src={SectionOne} />
        </Link> */}

        {/* <Link to="/">
          <Gallery src={Gallery} />
        </Link>
      </div>
      <div className="HomeFooter">
        <Footer src={Footer} /> */}
      </div>

      {/* <div className="pageText">   
<h2> Contactez nous par mail</h2>
<p>
  vmsoux@gmail.com </p>

<h2>Par Téléphone </h2>
<p>
06 62 26 34 52 </p>
<h2> Adresse </h2>
<p>
   84 Av Philippe Auguste 75011 Paris</p>
</div> */}
<div className="pageFooter">
        <Footer src={Footer} />
      </div>
    </div>
  )
}

export default About