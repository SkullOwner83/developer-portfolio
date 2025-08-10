import { Footer } from "./Components/Footer.jsx";
import { Banner } from "./Components/Banner.jsx";
import { Home } from "./Pages/Home.jsx";
import { AudioProvider } from "./Contexts/AudioContext.jsx";
import { TechProvider } from "./Contexts/TechContext.jsx";
import './Styles/Styles.scss';

function App() {

  return (
    <div>
      <AudioProvider>
        <TechProvider>
          <Banner/>
          <Home/>
          <Footer/>
        </TechProvider>
      </AudioProvider>
    </div>
  )
}

export default App
