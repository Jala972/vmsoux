
// import '../../App.css';
import { Link } from 'react-router-dom'
import SectionOne from '../../Components/SectionOne'
import Footer from '../../Components/Footer'
import '../../Utils/Style/Home.css'

function Home() {
  return (
    <div className="HomeContainer">
      <h1>
 
      Notre agence est spécialisée dans les services informatiques 
pour les professionnels et les particuliers</h1>
<div className="Homeheader">
</div>

      <div className="HomeMain">
        <Link to="/">
          <SectionOne src={SectionOne} />
        </Link>

        {/* <Link to="/">
          <Gallery src={Gallery} />
        </Link>
      </div>
      <div className="HomeFooter">
        <Footer src={Footer} /> */}
      </div>

      <div className="HomeText">   

<h2>
 
Nous offrons des prestations ponctuelles pour les professionnels et les particuliers</h2>

<p>Pour les professionnels nous proposons une large gamme de compétences couvrant les domaines 
de l'administration système, la maintenance informatique, 
la sécurité des données et la gestion des réseaux.</p>

<p>Pour les particuliers, nous proposons des services de petits 
travaux informatiques tels que l'optimisation de la vitesse de votre ordinateur, 
l'organisation de vos fichiers et l'aide à l'accès aux services en ligne 
tels que la retraite et la santé. </p>

<p>Enfin, nous proposons un onglet 
spécifique dédié à la sécurité informatique,
pour vous aider à protéger vos données et vos informations personnelles, 
avec des conseils sur les meilleures pratiques de sécurité, 
les certifications RGPD et 
les partages de connaissances sur les Big Data.
 N'hésitez pas à nous contacter pour toute demande de renseignements
  ou pour une demande de devis.</p>

</div>
<div className="HomeFooter">
        <Footer src={Footer} />
      </div>

    </div>
  )
}

export default Home
