import React from "react";

type Nutrition = {
  quantity: number;
  unit: string;
};

const NutritionalInfo: React.FC<Nutrition> = (props) => {
  return (
    <>
      <p>
        <b>Nutrition:</b> {Math.round(props.quantity) + " " + props.unit}
      </p>
    </>
  );
};

export default NutritionalInfo;
