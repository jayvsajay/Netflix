import Home from "./components/pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import {BrowserRouter as Router , Routes , Route, Navigate,Outlet} from 'react-router-dom'
import UserList from "./components/pages/UserList/UserList";
import User from "./components/pages/User/User";
import Newuser from "./components/pages/newUser/Newuser";
import Login from "./components/pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./components/context/authContext/AuthContext";
import MovieList from "./components/pages/movieList/MovieList";
import Movie from "./components/pages/movie/Movie";
import NewMovie from "./components/pages/newMovie/NewMovie";
import List from "./components/pages/List/List";
import ListPage from "./components/pages/ListPage/ListPage";
import NewList from "./components/pages/newList/NewList";

function App() {
  const {user} = useContext(AuthContext)
  const Layout = () => (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet/>
      </div>
    </>
  );
  return (
    <Router >
      <Routes>
      <Route path="/login" element={user ? <Navigate to='/' /> : <Login/>} />
          <Route element={<Layout />} >
            <Route path="/" element={!user ? <Navigate to='/login' /> : <Home/>} />   
            {user && 
          <>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/user/:id' element={<User/>}/>
          <Route path='/newuser' element={<Newuser/>}/>
          <Route path='/movie/:movieId' element={<Movie/>}/>
          <Route path='/movie' element={<MovieList/>}/> 
          <Route path='/newmovie'element={<NewMovie/>} />
          <Route path='/lists' element={<List/>}/>
          <Route path='/list/:listId' element={<ListPage/>}/>
          <Route path='/newlist' element={<NewList/>}/>
       
     </>
             } 
      </Route>
     </Routes>
    </Router>
  );
}

export default App;
