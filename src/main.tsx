import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  RecipesProvider } from './RecipesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecipesProvider>
    <App />
    </RecipesProvider>
  </React.StrictMode>,
)
