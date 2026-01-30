import elpepe from './cards/elpepe.png'
import etesech from './cards/etesech.png'
import potaxio from './cards/potaxio.png'
import juan from './cards/juan.png'
function Cards(){
    return(
        <section>
            <div className="cardContainer">
                
             
                <div className="card1">
                    <img src={elpepe} alt="El pepe"/>
                    <h2>El pepe</h2>
                    <p>El mejor amigo del hombre</p>
                </div>

                <div className="card2">
       
                    <img src={etesech} alt="Elsech"/> 
                    <h2>El Ete Sech</h2>
                    <p>El sech</p>
                </div>

                <div className="card3">
                    <img src={potaxio} alt="kalajo"/>
                    <h2>Potaxio</h2>
                    <p>Con arroz blanco</p>
                </div>

                <div className="card4">
                    <img src={juan} alt="Juan"/>
                    <h2>juano</h2>
                    <p>juan</p>
                </div>
            </div>
        </section>
    )
}

export default Cards;