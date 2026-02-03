import './promociones.css';

function Promociones(props) {
    let user = props

    if (user) {
        return (
            <div className='promocionesDiv'>
                <h3>Secciones de promociones</h3>
                <p>En esta seccion se da a conocer la informacion correspondiente a promociones del sitio</p>
                
            </div>
        )
    }
    return (
        <div>
            <h3>No hay datos</h3>
        </div>
    )
}


export default Promociones;