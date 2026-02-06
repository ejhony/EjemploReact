import './cards.css'
import elpepe from './cards/elpepe.png'
import etesech from './cards/etesech.png'
import potaxio from './cards/potaxio.png'
import juan from './cards/juan.png'

const cardsData = [
  { id: 1, name: 'Java', text: 'Lenguaje de programación de propósito general, orientado a objetos y multiplataforma.', image: elpepe },
  { id: 2, name: 'Python', text: 'Lenguaje de alto nivel, interpretado y famoso por su sintaxis clara y legible.', image: etesech },
  { id: 3, name: 'JavaScript', text: 'Lenguaje ligero usado para añadir interactividad y dinamismo a la web.', image: potaxio },
  { id: 4, name: 'PHP', text: 'Lenguaje de código abierto usado para desarrollo del lado del servidor.', image: juan },
]

function Cards() {
  return (
    <div className='cardsPage'>
    <div className="contenedorDiv">
      {cardsData.map(card => (
        <Card key={card.id} {...card} />
      ))}
        </div>
    </div>
  )
}

function Card({ name, text, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{text}</p>
      <a href="#">Ver más</a>
    </div>
  )
}

export default Cards
