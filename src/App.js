
import './App.css';
import NavbarMain from './components/NavbarFol/NavbarMain';
import HomeComponents from './Home_Components/HomeComponents';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/main.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/FooterFol/Footer';

function App() {
  return (
    <div className=" p-0 m-0 App">
      <NavbarMain />
      <HomeComponents />
<Footer/>
      
    </div>
  );
}

export default App;
