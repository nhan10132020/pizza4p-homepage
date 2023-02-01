import './App.css';
import Navbar from './components/Navbar';
import Navmodel from './components/Navmodel';
import Subbar from './components/Subbar';
import { useContextProvider } from './context/Provider';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
function App() {
  const {isSubbarOpen} = useContextProvider()
  //aos initialization
  useEffect(()=>{
    Aos.init({
      offset: 60, once: true, duration: 800,
      ease:"ease-in-out",
      debounceDelay: 50,
      offset:200,
      throttleDelay: 99,
    })
  },[])

  return (
    <div className="App overflow-x-hidden overflow-y-auto bg-[#000] text-white">
      <Navbar/>
      <Subbar/>
      {isSubbarOpen&&<Navmodel/>}


      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
