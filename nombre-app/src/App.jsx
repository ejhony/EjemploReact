import Encabezado from "./encabezado"
import Expresiones from "./assets/expresiones"
import Cards from './assets/cards.jsx'
import Footer from "./footer.jsx" 
import Promociones from "./promociones.jsx"
function App(){
  return (
  <div>
    <Encabezado/>
    <Expresiones/>
    <Cards/>
    <Footer/>
    <Promociones user="Jhony"/>
  </div>
  )
}

export default App