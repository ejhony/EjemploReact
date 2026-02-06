import Logo from './assets/Logotipo.png'
import facebook from './assets/redes/facebook.png'
import whatsapp from './assets/redes/whatsapp.png'
import instagram from './assets/redes/instagram.png'
import youtube from './assets/redes/youtube.png'
import linkedin from './assets/redes/linkedin.png'
import './encabezado.css'

function Encabezado({ cambiarVista }) {
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista} />
            <Redes />
        </div>
    )
}

function Logotipo() {
    return (
        <div className='logoDiv'>
            <img src={Logo} alt='Logotipo' />
        </div>
    )
}

function Menu({ cambiarVista }) {
    return (
        <div className='menuPrincipalDiv'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>INICIO</li>
                <li onClick={() => cambiarVista("AcercaDe")}>ACERCA DE</li>
                <li onClick={() => cambiarVista("Productos")}>PRODUCTOS</li>
                <li onClick={() => cambiarVista("Galeria")}>GALERIA</li>
                <li onClick={() => cambiarVista("Contacto")}>CONTACTO</li>
                <li onClick={() => cambiarVista("Sucursales")}>SUCURSALES</li>
            </ul>
        </div>
    )
}


function Redes() {
  return (
    <div className="redesDiv">
      <ul>
        <li>
          <img className="fb" src={facebook} alt="Facebook" />
        </li>
        <li>
          <img className="wsp" src={whatsapp} alt="Whatsapp" />
        </li>
        <li>
          <img className="inst" src={instagram} alt="Instagram" />
        </li>
        <li>
          <img className="yt" src={youtube} alt="Youtube" />
        </li>
        <li>
          <img className="lnk" src={linkedin} alt="Linkedin" />
        </li>
      </ul>
    </div>
  );
}


export default Encabezado
