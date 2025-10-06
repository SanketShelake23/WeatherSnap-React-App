import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./weatherApp.css";

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
     city : "Wanderland",
     country : "In",
     feelsLike : 29.91,
     humidity : 58,
     temp : 28.47,
     tempMin : 28.47,
     tempMax : 28.47,
     weather : 'scattered clouds'
    });


   let updateInfo = (newInfo)=>{

     setWeatherInfo(newInfo);
   }
    

    return(
        <div className="weatherApp" style={{background: 'linear-gradient(135deg, #00feba, #5b548a)', color:"#fff"}} >
        < SearchBox updateInfo={updateInfo} />
        < InfoBox info={weatherInfo} />
        </div>
    )
}