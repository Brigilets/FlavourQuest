import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
// import RecipePage from "../pages/RecipePage";

type RecipeCardProps = {
  name: string;
  cuisine: string;
  imgURL: string;
  // navigate?: (to: string | object) => void;
};

const RecipeCard: React.FC<RecipeCardProps> = (props) => {
  const to = `/${props.cuisine}/${props.name}`;
  return (
    <>
      <div
        className="cardWrapper"
        // onClick={() => props.navigate?.("../pages/RecipePage")}
      >
        <img alt=" recipe image" src={props.imgURL} />
        <Link
          to={to}
          onClick={() =>
            console.log(`Navigating to: ${props.cuisine}/${props.name}`)
          }
        >
          <section>
            <h4>{props.name}</h4>
            <h5>{props.cuisine}</h5>
          </section>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
