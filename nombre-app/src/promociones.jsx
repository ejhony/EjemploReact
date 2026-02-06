import PropTypes from 'prop-types'
import './promociones.css'
function Promociones(props) {
    const promociones = [
        { id: 1, titulo: "Oferta 1", descripcion: "50% de descuento" },
        { id: 2, titulo: "Oferta 2", descripcion: "Compra 2 lleva 3" },
        { id: 3, titulo: "Oferta 3", descripcion: "Envío gratis" },
    ];

        return(
        <div className="promosContenido">
            <h2>Promociones</h2>
            <p>Descubre nuestras ofertas exclusivas y promociones especiales diseñadas para brindarte el mejor valor en tus compras. ¡Aprovecha estas oportunidades únicas antes de que se agoten!</p>
        </div>
    )
}

Promociones.propTypes = {
    user: PropTypes.string.isRequired
}

export default Promociones
