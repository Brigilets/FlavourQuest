
import './App.css'
import React  from 'react'
import { useRecipes } from './RecipesContext'

function App() {

  const recipes = useRecipes()
  console.log('recipes',recipes)


  return (
<>

 <div>hey there </div>

</>
  )
}

export default App
