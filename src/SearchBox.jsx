import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"


function SearchBox({updateInfo}) {
let [city , setcity] = useState("")
let [error , seterror] = useState(false)
 const API_URl = "https://api.openweathermap.org/data/2.5/weather?"
 const API_key  ="ee38bb05252c9c15466058e344fa00b3"

let getWeatherInfo = async(  )=>{
  try{
let responce = await fetch(`${ API_URl}q=${city}&appid=${API_key}&units=metric`)
 let jsonresponce =await responce.json();
 console.log(jsonresponce);
let result = 
{
  city:city,
 temp: jsonresponce.main.temp,
 tempMin: jsonresponce.main.temp_min,
 tempMax: jsonresponce.main.temp_max,
 humidity : jsonresponce.main.humidity,
 feelsLike : jsonresponce.main.feels_like,
 weather: jsonresponce.weather[0].description
}
//console.log(result)
return result;
  }catch(err){
   throw err;
  }
 
}


let handelchange =  (evt) =>{
   setcity(evt.target.value)
}
let handelsubmit =  async(evt)=>{
try{
  evt.preventDefault();
  console.log( city);
  setcity();
   let newinfo  =  await getWeatherInfo();
   updateInfo(newinfo) 
} catch{

  
  seterror(true)

}
}


  return (
    <div className="SearchBox"  >
    
    <form  onSubmit={handelsubmit}>
    <TextField id="city" label="City Name" variant="outlined"  required  value={city}
    onChange={handelchange}
    
    
    />

    <br></br><br></br>
             <Button variant="contained" type="submit"
             
             >Search</Button>
             {error && <p style={ {color:red}}> No such place exist !</p>}

    
    
    
    
    
    
    </form>
    
    
    </div>
  )
}

export default SearchBox