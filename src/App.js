import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import ProductDetail from './Pages/Inventory/ProudctDetail/ProductDetail';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddItems from './Pages/AddItems/AddItems';
import Blog from './Pages/Blog/Blog';
import ManageItems from './Pages/ManageItems/ManageItems';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ProductDetail />
          </RequireAuth>}
        >
        </Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>}
        >
        </Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>}
        >
        </Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
