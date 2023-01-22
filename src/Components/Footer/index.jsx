import '../../Utils/Style/Footer.css'
import VmsouxLogo from '../../Assets/logo vmsoux.png'

function Footer() {
  return (
    <div className="FooterContainer">
      
      <div className="Footertext"> 
      <div className='FooterContactContainer'>
      <h4> Contactez nous par mail</h4>
<p>
  vmsoux@gmail.com </p>
  </div>
  <div className='FooterContactContainer'>
<h4>Par Téléphone </h4>
<p>
06 62 26 34 52 </p></div>
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
