
import './App.css'
import React , {lazy} from 'react'
import { useRecipes } from './RecipesContext'
const Footer = React.lazy(()=>import ('./components/Footer'))



function App(){

  const recipes = useRecipes()
  console.log('recipes',recipes)


  return (
<>

 <div>hey there </div>

 <Footer/>


</>
  )
}

export default App
