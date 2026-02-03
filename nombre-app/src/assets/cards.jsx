import PropTypes from 'prop-types'
import './cards.css'
import elpepe from './cards/elpepe.png'
import etesech from './cards/etesech.png'
import potaxio from './cards/potaxio.png'
import juan from './cards/juan.png'

function Cards() {
    return (
        <div className='cardContainer'>
           
            <Card1 name="elpepe" image={elpepe} />
            <Card2 name="etesech" image={etesech} />
            <Card3 name="potaxio" image={potaxio} />
            <Card4 name="juan" image={juan} />
        </div>
    )
}



function Card1(props) {
    return (
        <div className='card1'>
            <h3>{props.name}</h3>
            <p>omg</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

Card1.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

function Card2(props) {
    return (
        <div className='card2'>
            <h3>{props.name}</h3>
            <p>El sech</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

Card2.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

function Card3(props) {
    return (
        <div className='card3'>
            <h3>{props.name}</h3>
            <p>Con arroz blanco</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

Card3.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

function Card4(props) {
    return (
        <div className='card4'>
            <h3>{props.name}</h3>
            <p>Juan</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

Card4.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Cards;