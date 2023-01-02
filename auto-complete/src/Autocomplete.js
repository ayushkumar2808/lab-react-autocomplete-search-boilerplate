import React,{useState} from 'react'
import data from "./resources/countryData.json";

function Autocomplete() {
    const [value,setValue] = useState("")
    const [showSuggestions,setShowSuggestions] = useState(false)
    const suggestions = data.filter(
        person => {
          return (
            person
            .name
            .toLowerCase()
            .startsWith(value.toLowerCase()) 
          );
        }
      );
   const handleChange = (event) => {
    setValue(event.target.value)
   }
  return (
    <>
    <div>
      <input type="search" value={value} onFocus={()=>setShowSuggestions(true)} onChange={handleChange}  />

    </div>
    {showSuggestions && (
        <div>
            {suggestions.map(suggestion =>(
                <h3>{suggestion.name}</h3>
            ))}
            
        </div>
    )}
    </>
  )
}

export default Autocomplete
