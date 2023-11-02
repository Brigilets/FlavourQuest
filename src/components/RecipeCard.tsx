import React from 'react'

type RecipeCardProps = {
    name:string;
    cuisine: string,
    imgURL:string
}

const RecipeCard: React.FC<RecipeCardProps>  = (props) =>{
    return (
        <>
        <div className='card-wrapper'>
            <img alt=' recipe image' src={props.imgURL}/>
            <section>
                <h3>{props.name}</h3>
                <h5>{props.cuisine}</h5>
            </section>
        </div>
        </>
    )
}

export default RecipeCard