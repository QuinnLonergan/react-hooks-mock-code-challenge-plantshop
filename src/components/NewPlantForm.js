import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  })

  function handleChange(e){
    const newPlant = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [newPlant]:value,
    })

    console.log(formData)
  }

  function handleSubmit(e){
    e.preventDefault()
    addPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name} 
          onChange={handleChange}/>
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleChange}/>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
