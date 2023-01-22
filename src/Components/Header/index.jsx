import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import colors from '../../Utils/Style/colors'
import VmsouxLogo from '../../Assets/logo vmsoux.png'
import '../../Utils/Style/Header.css'

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLogo">
        <img className="LogoVmsoux" src={VmsouxLogo} alt="Logo Vmsoux" />
      </div>
      <div className="NavContainer">
        <div className="AcceuilStyle">
        <Link to="/">
          <h2 className="ongletStyle">Accueil</h2>
        </Link>
        </div>
        <div className="AcceuilStyle">
        <Link to="/professional">
          <h2 className="ongletStyle">Professionnel</h2>
        </Link>
        </div>
        <div className="AcceuilStyle">
        <Link to="/individual">
          <h2 className="ongletStyle">Particulier</h2>
        </Link>
        </div>
        <div className="AcceuilStyle">
        <Link to="/security">
          <h2 className="ongletStyle">Sécurité</h2>
        </Link>
        </div> 
        <div className="AcceuilStyleRight">
        <Link to="/about">
          <h2 className="ongletStyle">Contact</h2>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
