import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './components/context/authContext/AuthContext';
import { ListContextProvider } from './components/context/listContext/ListContext';
import { MovieContextProvider } from './components/context/movieContext/MovieContext';
import { UserContextProvider } from './components/context/userContext/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </>
);

