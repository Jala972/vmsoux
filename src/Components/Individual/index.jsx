// import { Link } from 'react-router-dom'
// import SectionOne from '../../Components/SectionOne'
import Footer from '../../Components/Footer'
import '../../Utils/Style/Home.css'

function Individual() {
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
<h2> Dépannage Informatique  </h2>
<p>
Soyez assuré de bénéficier de tout le savoir-faire d’un spécialiste
 du dépannage informatique depuis plus de 40 ans !
 </p>
 <p>
Notre entreprise est spécialisée dans les activités de dépannage informatique,
 la maintenance informatique, la formation et l’installation de votre matériel.

Particulier, nous intervenons sur PC & Mac, fixe ou portable
</p>

<h2>Formation informatique </h2>
<p>
Avec VMSOUX, vous êtes sûr de toujours 
faire le bon choix : le choix d’une prestation 
de qualité sur l’ensemble de nos services informatiques !
</p>


<p>
Nous sommes formés pour intervenir dans la mise en place, 
paramétrage et réparation informatiques de vos équipements ( imprimante, webcam, boîte orange livebox , box de free, dartybox,
 sfr box... )</p>

</div>
<div className="pageFooter">
        <Footer src={Footer} />
      </div>

    </div>
  )
}

export default Individual