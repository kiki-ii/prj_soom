import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { HashRouter  } from 'react-router-dom'
import { Provider } from "./components/ui/provider"


import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
      <Provider>
        <App />        
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
