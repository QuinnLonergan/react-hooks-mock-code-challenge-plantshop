import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({itemsToRender}) {
  // const [plants, setPlants] = useState([])
  // const [itemsToRender, setItemsToRender] = useState(plants)

  // useEffect(() => { 
  //   fetch("http://localhost:6001/plants")
  //   .then((r)=>r.json())
  //   .then((data) => setPlants(data))
  // }, [plants])

  // function makeItemsToRender(){
  //   let searchedPlants = plants.filter((plant) => {
  //     if (searchItem) return true;

  //     return plant.name.includes(searchItem)
      
  //   })

  //   console.log(searchedPlants)

  //   setItemsToRender(searchedPlants)
  // }

  
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
