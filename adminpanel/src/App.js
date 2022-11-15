import Home from "./components/pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import UserList from "./components/pages/UserList/UserList";
import User from "./components/pages/User/User";
import Newuser from "./components/pages/newUser/Newuser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newproduct/NewProduct";

function App() {
  
  return (
    <Router >
     <Topbar/>
     <div className="container">
      <Sidebar/>
      
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/user/:id' element={<User/>}/>
          <Route path='/newuser' element={<Newuser/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/products' element={<ProductList/>}/> 
          <Route path='/newproduct'element={<NewProduct/>} />
        </Routes>
      
     </div>
    </Router>
  );
}

export default App;
