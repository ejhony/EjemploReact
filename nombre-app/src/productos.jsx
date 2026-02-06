import './productos.css'

function Productos() {
  const listaProductos = [
    { id: 1, nombre: 'Hoodie Oversize', precio: '$45.00', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80' },
    { id: 2, nombre: 'Streetwear Tee', precio: '$25.00', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80' },
    { id: 3, nombre: 'Chaqueta Denim', precio: '$65.00', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80' },
    { id: 4, nombre: 'Joggers Techwear', precio: '$50.00', img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80' },
  ];

  return (
    <section className="productos-section">
      <h2 className="titulo-productos">KALAJO</h2>
      
      <div className="productos-grid">
        {listaProductos.map((prod) => (
          <div key={prod.id} className="producto-card">
            <div className="producto-imagen">
              <img src={prod.img} alt={prod.nombre} />
              <button className="btn-add">Añadir al carrito</button>
            </div>
            <div className="producto-info">
              <h3>{prod.nombre}</h3>
              <p className="precio">{prod.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Productos;