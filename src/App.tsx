import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ChefPage from './Pages/ChefPage';
import PackagesPage from './Pages/PackagesPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/chefs' element={<ChefPage/>}/>
          <Route path='/packages' element={<PackagesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>

       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;