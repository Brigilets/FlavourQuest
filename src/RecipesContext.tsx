
import React, { createContext,useContext,ReactNode, useState, useEffect,lazy,Suspense} from "react";

export const RecipesContext = createContext<RecipesContextType | null>(null)

export const useRecipes= () => useContext(RecipesContext)


export interface RecipesContextType {
    recipes: any[] ;
    loading: boolean;

}

const Loading = lazy(()=> import('./components/Loading'))

export const RecipesProvider = ({children}: {children:ReactNode})=>{
const [recipes,setRecipes] = useState<any[]>([])
const [loading,setLoading] = useState<boolean>(false)

const appID = import.meta.env.VITE_REACT_APP_EDAMAM_APP_ID
const appKey = import.meta.env.VITE_REACT_APP_EDAMAM_APP_KEY



console.log(recipes)
useEffect(()=>{
    async function fetchData(){
         try{
            const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=${appID}&app_key=${appKey}&cuisineType=American&cuisineType=Asian&cuisineType=Eastern%20Europe&cuisineType=Italian&cuisineType=Mediterranean&cuisineType=French`)
            const data =await  res.json()


            setRecipes(data.hits)
            setLoading(false)


    } catch(error){
        console.error('Error fetching data: ', error)
    }

}
fetchData()

},[])

return (
    <RecipesContext.Provider value={{recipes,loading}}>
        <Suspense fallback={<Loading/>}>{children}</Suspense>
    </RecipesContext.Provider>
)

}