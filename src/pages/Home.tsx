
import '../App.css'
import React , {Context, lazy, useMemo} from 'react'
import { RecipesContextType, useRecipes } from '../RecipesContext'
const Footer = React.lazy(()=>import ('../components/Footer'))
const Header = React.lazy(()=>import ('../components/Header'))
const RecipeCard = lazy(()=> import ('../components/RecipeCard'))





const Home: React.FC =()=>{

  const recipesContext=useRecipes()
  console.log('recipes',recipesContext?.recipes)


  return (
<>
  <Header/>

 <div >
    {recipesContext !== null
    ? recipesContext.recipes.map((recipe)=><RecipeCard name={recipe.recipe.label} cuisine={recipe.recipe.cuisineType} imgURL={recipe.recipe.images.SMALL.url} />) 
     : 'There are no recipes'}
 </div>

 <Footer/>


</>
  )
}

export default Home