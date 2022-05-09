import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home/Home';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Items from './Pages/Items/Items';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory'



function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
