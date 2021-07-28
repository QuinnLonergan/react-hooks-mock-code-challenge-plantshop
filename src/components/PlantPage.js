import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({setSearchItemInApp, itemsToRender, makeItemsToRender, addPlant}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearchItemInApp={setSearchItemInApp} 
      // makeItemsToRender={makeItemsToRender}
      />
      <PlantList itemsToRender={itemsToRender}/>
    </main>
  );
}

export default PlantPage;
