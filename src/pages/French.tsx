import React, { lazy, useMemo } from "react";
import {  RecipesContext, useRecipes } from "../RecipesContext";
import './Page.css'

const Footer = React.lazy(()=>import ('../components/Footer'))
const Header = React.lazy(()=>import ('../components/Header'))
const RecipeCard = lazy(()=> import ('../components/RecipeCard'))


const French: React.FC = () =>{
    const recipesContext = useRecipes()
    const recipes = recipesContext !== null? recipesContext.recipes : null
    const frenchRecipes = useMemo(()=>recipes?.filter((recipe) => recipe.recipe.cuisineType.includes('french')),[recipes])
    console.log('french recipes',frenchRecipes)
    return (<>
    <Header/>
    <h2>Enjoy our French recipes!</h2>
    <section className="cardGrid">
    {frenchRecipes !== undefined ?frenchRecipes.map((recipe)=><><RecipeCard key={recipe.recipe.label} name={recipe.recipe.label} cuisine={recipe.recipe.cuisineType} imgURL={recipe.recipe.images.REGULAR.url} /></> ):(<div>No recipes</div>)}
    </section>
    <Footer/>
    </>)
} 

export default French