import PropTypes, { func } from 'prop-types'        
import './cards.css'

import elpepe from './cards/elpepe.png'
import etesech from './cards/etesech.png'
import potaxio from './cards/potaxio.png'
import juan from './cards/juan.png'

const cardsData = [
    { id: 1, name: 'elpepe', text: 'omg', image: elpepe },
    { id: 2, name: 'etesech', text: 'El sech', image: etesech },
    { id: 3, name: 'potaxio', text: 'Con arroz blanco', image: potaxio },
    { id: 4, name: 'juan', text: 'Juan', image: juan },
]

function Cards() {
    return (
        <div className='contenedorDiv'>
        <TarjetaComponent titulo="Java" descripcion = "lenguaje de programación de propósito general, orientado a objetos y multiplataforma. El código compilado puede ejecutarse en cualquier dispositivo que tenga una Máquina Virtual Java"/>
        <TarjetaComponent titulo="Python" descripcion = " lenguaje de programación de alto nivel, interpretado y de código abierto, famoso por su sintaxis clara y legible que se asemeja al inglés AWS"/>
        <TarjetaComponent titulo="JavaScript" descripcion = "JavaScript es un lenguaje de programación ligero, interpretado y orientado a objetos BYJU'S, diseñado principalmente para añadir interactividad y dinamismo a las páginas web "/>
        <TarjetaComponent titulo="PHP" descripcion = "lenguaje de código abierto muy popular, diseñado específicamente para el desarrollo web y que se ejecuta en el lado del servidor PHP"/>
    </div>
    )
}

function Card({ name, text, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    )
}

function TarjetaComponent(props) {
    let imagen;
    return(
        <div className='card'>
            <img src={imagen} alt='Logotipo'/>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            <a href='#'>Ver más</a>
        </div>
    )
}

export default Cards
