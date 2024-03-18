import React from "react";
import "./NutritionalInfor.css";

type Nutrition = {
  quantity: number;
  unit: string;
  noServings: number;
};

const NutritionalInfo: React.FC<Nutrition> = (props) => {
  return (
    <>
      <section className="dataGrid">
        <h3>Nutrition</h3>
        <p>
          <b>Serves</b> {props.noServings}
        </p>
        <p>
          <b>Kcal per person</b>
          {" " +
            Math.round(props.quantity / props.noServings) +
            " " +
            props.unit}
        </p>
      </section>
    </>
  );
};

export default NutritionalInfo;
