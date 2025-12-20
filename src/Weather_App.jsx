
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
InfoBox

SearchBox


export default function WeatherApp(){
const [ weatherInfo ,setWeatherInfo] = useState({
    city:"Delhi",
        feelslike: 24.84,
        temp:25.12,
        tempMin:2585,
        tempMax:25.21,
        humidity:47,
        weather:"haza"
});
let updateInfo =( newinfo)=>{
    setWeatherInfo(newinfo)

}


    return(
        <div style={{textAlign:"center"}}>
            <h2>
                Weather App by Abhi
            </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={ weatherInfo}/>
        </div>
    )
}