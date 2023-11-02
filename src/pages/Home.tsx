
import './Home.css'
import React , { lazy,} from 'react'
import { useRecipes } from '../RecipesContext'
const Footer = React.lazy(()=>import ('../components/Footer'))
const Header = React.lazy(()=>import ('../components/Header'))
const RecipeCard = lazy(()=> import ('../components/RecipeCard'))





const Home: React.FC =()=>{

  const recipesContext=useRecipes()
  console.log('recipes',recipesContext?.recipes)


  return (
<>
  <Header/>

 <div className='cardGrid'>
    {recipesContext !== null
    ? recipesContext.recipes.map((recipe)=><><RecipeCard name={recipe.recipe.label} cuisine={recipe.recipe.cuisineType} imgURL={recipe.recipe.images.REGULAR.url} /></>) 
     : 'There are no recipes'}
 </div>

 <Footer/>


</>
  )
}

export default Home