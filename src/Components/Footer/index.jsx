import '../../Utils/Style/Footer.css'
import VmsouxLogo from '../../Assets/Vmsoux carte de visite.jpg'

function Footer() {
  return (
    <div className="FooterContainer">
      
      <div className="Footertext"> 
      <div className='FooterContactContainer'>
      <h4> Faites votre demande de devis par mail</h4>
<p>
  vmsoux@gmail.com </p>
  </div>
  <div className='FooterContactContainer'>
<h4>Numéro Siret </h4>
<p> 89134831000014
 </p></div>
<div className='FooterContactContainer'>
<h4> Adresse </h4>
<p>
   84 Av Philippe Auguste 75011 Paris</p></div>
   </div>
   <img className="FooterLogo" src={VmsouxLogo} alt="Logo Kaza" />
      <h5 className="FooterTitle">© 2023 VMSOUX All rights reserved</h5>
    </div>
  )
}

export default Footer
