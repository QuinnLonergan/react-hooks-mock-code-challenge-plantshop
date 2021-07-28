import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [plants, setPlants] = useState([])
  const [itemsToRender, setItemsToRender] = useState([])

  function addPlant(formData){
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data) => {
      setPlants([...plants, data])
    })
  }

  useEffect(() => { 
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((data) => {
      setPlants(data)
      setItemsToRender(data)
    })
  }, []);


useEffect(() => {
  let searchedPlants = plants.filter((plant) => {
    return plant.name.includes(searchItem)
  })
  setItemsToRender(searchedPlants)
}, [searchItem, plants]) 

  // function makeItemsToRender(){
  //   let searchedPlants = plants.filter((plant) => {
  //     if (searchItem) return true;

  //     return plant.name.includes(searchItem)
      
  //   })


  //   setItemsToRender(searchedPlants)
  // }

  function setSearchItemInApp(searchItem){
    setSearchItem(searchItem)
  }
 
  

  return (
    <div className="app">
      <Header />
      <PlantPage 
        setSearchItemInApp={setSearchItemInApp}
        itemsToRender={itemsToRender}
        // makeItemsToRender={makeItemsToRender}
        addPlant={addPlant}
        />
    </div>
  );
}

export default App;
