import './style.css'
import logo from '../../assets/logoLions.svg'
import { Link } from 'react-router-dom';





interface HeaderProps {
    aparecerBotao: boolean;
}
const Header = ({aparecerBotao}: HeaderProps) => { 
    return (
        <>
        <header>
              <div className="logo">
                    <img className='imgLogo' src={logo} alt="Logo da Loja de Seminovos" />
                    {aparecerBotao && ( <Link to={'/main'}><button>Inicio</button></Link>)} 
              </div>
        </header>
        </>
    )
}



export { Header }