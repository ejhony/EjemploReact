import './acercaDe.css'

function AcercaDe() {
  return (
    <section className="acerca">
      <div className="acerca-contenido">
        <h2> ACERCA DE MI</h2>

        <p>
          Soy estudiante de Ingeniería en Tecnologías de la Información,
          enfocado en desarrollo web moderno con React y diseño limpio.
        </p>

        <p>
          Me gusta crear interfaces atractivas, funcionales
          y fáciles de usar.
        </p>

        <div className="acerca-botones">
          <button>Ver proyectos</button>
          <button>Contáctame</button>
        </div>
      </div>
    </section>
  )
}

export default AcercaDe
