import React, {useState} from "react";

function Search({setSearchItemInApp}) {
  const[searchItem, setSearchItem] = useState('')

  function handleChange(e) {
    let value = e.target.value
    setSearchItem(value)
    console.log(searchItem)
    setSearchItemInApp(value)
    // makeItemsToRender()
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
