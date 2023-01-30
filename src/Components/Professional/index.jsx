// import { Link } from 'react-router-dom'
// import SectionOne from '../../Components/SectionOne'
import Footer from '../../Components/Footer'
import '../../Utils/Style/Home.css'

function Professional() {
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

      <div className="pageText">   
<h2> Expert Systèmes, Réseaux, Stockage, Sauvegarde </h2>
<p>
  YMLB </p>

<h2>Domaines d'Expertise</h2>
<p>
 Windows
/ Linux (redhat OpensUX), Unix, Solaris, Aix
/ Open VMS
/ Stockage SAN HP
/ Clustering ( Redhat , Compaq, Sun)
/ Vmware niveau 1
/ Cloud
/ Big Data </p>
<h2> Expérience constructeur </h2>
<p>
   16 ans chez HP</p>
<h2>Gestion de projet </h2>
<p>
 Oberthur (+ mission à l’étranger déploiement)
/ Société générale</p>

<p>
 CV à la demande</p>
</div>
<div className="pageFooter">
        <Footer src={Footer} />
      </div>
    </div>
  )
}

export default Professional
