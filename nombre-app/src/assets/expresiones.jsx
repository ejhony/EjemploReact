function Expresiones(){
    const nombre = "Jhony";
    const apellido = "Ibarra Gonzalez";
    
    return(

        <div className="expresionesContainer">
            <h2>Expresiones</h2>
            <p>Mi nombre es: {nombre} {apellido}</p>
            
            <Lista />
        </div>
    )
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