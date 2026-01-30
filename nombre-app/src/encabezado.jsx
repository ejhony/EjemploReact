import Logo from './assets/Logotipo.png'
import facebook from './assets/redes/facebook.png'
import whatsapp from './assets/redes/whatsapp.png'
import instagram from './assets/redes/instagram.png'
import youtube from './assets/redes/youtube.png'
import linkedin from './assets/redes/linkedin.png'
import './encabezado.css'

function Encabezado(){
    return (
    <div className='encabezadoDiv'>
        <Logotipo/>
        <Menu/>
        <Redes/>
        
    </div>
    )
}

function Logotipo(){
    return(
        <div className='logoDiv'>
           <img src={Logo} alt='Logotipo'/>
        </div>
    )
}

function Menu(){
    return(
        <div className='menuPrincipalDiv'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}
function Redes(){
    return(
        <div className='redesDiv'>
            <ul>
                <li><img src={facebook} alt='Facebook'/></li>
                <li><img src={whatsapp} alt='Whatsapp'/></li>
                <li><img src={instagram} alt='Instagram'/></li>
                <li><img src={youtube} alt='Youtube'/></li>
                <li><img src={linkedin} alt='Linkedin'/></li>
            </ul>
        </div>
    )
}
export default Encabezado