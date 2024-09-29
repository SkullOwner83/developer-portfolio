import {Footer} from "./Components/Footer.jsx";
import {Header} from "./Components/Header.jsx";
import './Styles/Styles.scss';

function App() {

  return (
    <div>
      <Header/>
      
      <main>
        <h1>SOBRE MI</h1>
        <p>Soy una persona apasionada por la tecnología y las herramientas digitales, asi como el desarrollo de aplicaciones y videojuegos. Además, estoy en una constante búsqueda de nuevo conocimiento y desarrollo profesional.</p>
      </main>

      <Footer/>
    </div>
  )
}

export default App
