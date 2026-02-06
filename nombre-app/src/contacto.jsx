import './contacto.css'

function Contacto() {
  return (
    <section className="contacto">
      <div className="contenedor-simple">
        <h2>Contacto</h2>
        <p>¿Tienes alguna duda? Escríbeme directamente.</p>

        <div className="datos-contacto">
          <p> <strong>Email:</strong> 240080@utxicotepec.edu.mx</p>
          <p> <strong>Ubicación:</strong> Xicotepec de Juarez,Puebla.</p>
        </div>

        <form className="formulario-simple">
          <input type="text" placeholder="Tu Nombre" />
          <input type="email" placeholder="Tu Correo" />
          <textarea placeholder="¿En qué te ayudo?"></textarea>
          <button type="button">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto