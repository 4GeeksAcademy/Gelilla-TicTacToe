import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Game from './components/Game'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-full max-h-full bg-gray-500 text-white">
		<h1 className="text-center">Tic Tac Toe in React.js</h1>			
    <Home/>

    </div>
  </React.StrictMode>,
)
