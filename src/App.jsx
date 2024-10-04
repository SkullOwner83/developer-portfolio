import { Footer } from "./Components/Footer.jsx";
import { Banner } from "./Components/Banner.jsx";
import { Home } from "./Pages/Home.jsx";
import { TechProvider } from "./Contexts/TechContext.jsx";
import './Styles/Styles.scss';

function App() {

  return (
    <div>
      <Banner/>

      <TechProvider>
        <Home/>
      </TechProvider>

      <Footer/>
    </div>
  )
}

export default App
