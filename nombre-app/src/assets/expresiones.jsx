function Expresiones(){
    const nombre = "Jhony";
    const apellido = "Ibarra Gonzalez";
    return(
        <div>
            <h2>Expresiones</h2>
            <p>Mi nombre es: {nombre} {apellido}</p>
            {Lista()}
        </div>
    )
}
function Lista(){
    const users = [
        {id:1,name:"Jhony", role: "Web Developer"},
        {id:2,name:"Mago", role: "Lava Baños"},
        {id:3,name:"Gadiel", role: "Astronauta"},
        {id:4,name:"Aaron", role: "Prostituto"},
    ];

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                    </tr>
                    {users.map(function(user,index){
                        return(
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
    )
}
export default Expresiones