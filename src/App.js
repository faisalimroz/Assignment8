import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
     
       <Routes>
         
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/services' element={<Services></Services>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
