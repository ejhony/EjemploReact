import '../expresiones.css'

function Expresiones({ vista }) {
  return (
    <div className="expresiones">
      {vista === "Inicio" && <h1>WELCUMM!!!</h1>}
      {vista === "AcercaDe" }
      {vista === "Productos" && <h1>DE FINISIMA CALIDAD</h1>}
      {vista === "Galeria" && <h1>GALERIA DE IMAGENES</h1>}
      {vista === "Contacto" && <h1>Contáctanos</h1>}
      {vista === "Sucursales" && <h1>Nuestras Sucursales</h1>}
    </div>
  );
}

function Lista(){
    const users = [
        {id:1, name:"Jhony", role: "Web Developer"},
        {id:2, name:"Mago", role: "Lava Baños"},
        {id:3, name:"Gadiel", role: "Astronauta"},
        {id:4, name:"Aaron", role: "Prostituto"},
    ];

    return(
        <div className="listaTexto">
            {users.map(function(user, index){
                return(

                    <p key={index} style={{ margin: '5px 0', fontSize: '18px' }}>
                        <strong>{user.name}:</strong> {user.role}
                    </p>
                )
            })} 
        </div>
    )
}

export default Expresiones;