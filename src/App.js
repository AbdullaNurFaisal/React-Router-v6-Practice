import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Product from './components/Product';
import NoMatch from './components/NoMatch';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProduts';
import Admin from './components/Admin';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import './App.css';

const LazyAbout = React.lazy(() =>  import('./components/About'));


function App() {
  return (
    <AuthProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={
              <React.Suspense fallback='loading...'>
                  <LazyAbout />

              </React.Suspense>
            
            } />
            <Route path='order-summary' element={<OrderSummary />}/>
            <Route path='products' element={<Product />}>
              <Route index element={<FeaturedProducts />}/>
              <Route path='featured' element={<FeaturedProducts />}/>
              <Route path='new' element={<NewProducts />} />
            </Route>
            <Route path='users' element={<Users />}>
             <Route path=':userId' element={<UserDetails />} />   
             <Route path='admin' element={<Admin />} />
            </Route>
            <Route path='profile' element=
              {
                <RequireAuth>
                   <Profile />    
                </RequireAuth>
              }
            
            ></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='*' element={<NoMatch />} />
        </Routes>
    </AuthProvider>


  );
}

export default App;
