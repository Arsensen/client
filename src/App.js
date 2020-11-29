import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRouter } from './routes'

function App() {
  const routes = useRouter(false)
  return (
    <div className="App">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
