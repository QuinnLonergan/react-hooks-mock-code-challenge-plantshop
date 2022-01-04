import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({itemsToRender}) {

  
  return (
    <ul className="cards">{itemsToRender.map((plant) => (
      <PlantCard 
        key={plant.id}
        name={plant.name}
        price={plant.price}
        image={plant.image}
      />
    ))}</ul>
  );
}

export default PlantList;
