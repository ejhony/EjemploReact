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
  <h1>#5C DSM</h1>
  <h2>M.T.I. Jhony</h2>
  </div>
  )
}

export default App