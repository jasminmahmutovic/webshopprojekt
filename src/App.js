import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about.js";
import Checkout from "./pages/checkout.js";
import Login from "./pages/login.js";
import Main from "./pages/main.js";
import MyAccount from "./pages/myaccount.js";
import Products from "./pages/products.js";
import Register from "./pages/register.js";
import ShowInDom from "./ShowInDom"

import './App.css';

//Kopierade över och gjorde om våra routes från föregående kurs.
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <ShowInDom />}>
      <Route index element={<Main />}/>
      <Route path="main" element={ <Main />} />
      <Route path="login" element={ <Login />} />
      <Route path="products" element={ <Products />} />
      <Route path="about" element={ <About />} />
      <Route path="checkout" element={<Checkout/>}></Route>
      <Route path="myaccount" element={ <MyAccount />} />
      <Route path="register" element={ <Register />} />
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
