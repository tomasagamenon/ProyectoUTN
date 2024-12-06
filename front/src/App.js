import './scss/style.scss';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/main/HomePage';
import Footer from './components/Footer';
import FixedInfo from './components/FixedInfo';
import InfoPage from './pages/main/InfoPage';
import ContactPage from './pages/main/ContactPage';
import ProductsPage from './pages/main/ProductsPage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/products' element={<ProductsPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/info' element={<InfoPage/>}></Route>
          <Route path='/product' element={<ProductPage/>}></Route>
          <Route path='/error' element={<ErrorPage/>}></Route>
        </Routes>
        <FixedInfo></FixedInfo>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
