import PropTypes from 'prop-types'

function Promociones(props) {
    const promociones = [
        { id: 1, titulo: "Oferta 1", descripcion: "50% de descuento" },
        { id: 2, titulo: "Oferta 2", descripcion: "Compra 2 lleva 3" },
        { id: 3, titulo: "Oferta 3", descripcion: "Envío gratis" },
    ];

    return (
        <div className="promocionesContainer">
            <h2>Promociones para {props.user}</h2>
            <div className="promocionesLista">
                {promociones.map(function(promo) {
                    return (
                        <div key={promo.id} className="promocionCard">
                            <h3>{promo.titulo}</h3>
                            <p>{promo.descripcion}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

Promociones.propTypes = {
    user: PropTypes.string.isRequired
}

export default Promociones
