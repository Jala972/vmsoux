import React, {useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'

import VmsouxLogo from '../../Assets/Vmsoux carte de visite3.jpg'

import '../../Utils/Style/Navbar.css'

function Navbar() {
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect (() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if(window.innerWidth > 1380){
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])
    
    return (
       
        // Short circuit Operator du Menu de Navigation
        <nav>
             <div className='logoContainerNav'> 
             <img className="LogoVmsouxNav" src={VmsouxLogo} alt="Logo Vmsoux" />  
             </div>
            {(toggleMenu || largeur > 1380) &&(

            <ul>
                <Link to="/">
                    <li className='items'>Accueil</li>
                </Link>
                <Link to="/professional">
                    <li className='items'>Professionnel</li>
                </Link>
                <Link to="/individual">
                <li className='items'>Particulier</li>
                </Link>
                <Link to="/security">
                <li className='items'>Sécurité</li>
                </Link>
                <Link to="/about">
                <li className='items'>Contact</li> 
                </Link>   
            </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='btn'>MENU</button>
        </nav>
    )
}
export default Navbar