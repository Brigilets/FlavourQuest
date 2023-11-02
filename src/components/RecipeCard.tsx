import React from 'react'
import './RecipeCard.css'

type RecipeCardProps = {
    name:string;
    cuisine: string,
    imgURL:string
}

const RecipeCard: React.FC<RecipeCardProps>  = (props) =>{
    return (
        <>
        <div className='cardWrapper'>
            <img alt=' recipe image' src={props.imgURL}/>
            <section>
                <h4>{props.name}</h4>
                <h5>{props.cuisine}</h5>
            </section>
        </div>
        </>
    )
}

export default RecipeCard