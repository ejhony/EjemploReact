import './sucursales.css'

function Sucursales() {
  const tiendas = [
    { id: 1, ciudad: 'Ciudad de México', direccion: 'Av. Reforma #123, Centro', horario: '9:00 AM - 8:00 PM' },
    { id: 2, ciudad: 'Monterrey', direccion: 'Plaza Fiesta, Local 45', horario: '10:00 AM - 9:00 PM' },
    { id: 3, ciudad: 'Guadalajara', direccion: 'Calle Juárez #500, Sector Juárez', horario: '9:00 AM - 7:00 PM' }
  ];

  return (
    <section className="sucursales">
      <h2>Nuestras Sucursales</h2>
      <div className="sucursales-grid">
        {tiendas.map((tienda) => (
          <div key={tienda.id} className="sucursal-card">
            <h3> {tienda.ciudad}</h3>
            <p><strong>Dirección:</strong> {tienda.direccion}</p>
            <p><strong>Horario:</strong> {tienda.horario}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sucursales;