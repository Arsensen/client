import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useRouter } from './routes'

function App() {
  const {token, userID, login, logout} = useAuth()
  const isAuthorized = !!token
  const routes = useRouter(isAuthorized)
  return (
    <AuthContext.Provider value = {{token, userID, login, logout, isAuthorized}}>
      <div className="App">
        <BrowserRouter>
          {isAuthorized && <Navbar />}
          {routes}
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
