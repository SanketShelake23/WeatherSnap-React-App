import "./SearchBox.css"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert";
import SearchIcon from '@mui/icons-material/Search';
import { colors } from "@mui/material";

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error,setError] = useState(false);

    const GEOCODING_API_URL = import.meta.env.VITE_GEOCODING_API_URL;
    const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    


    let getWeatherInfo = async()=>{
      
        try{
        let geoResponse = await fetch(`${GEOCODING_API_URL}?q=${city}&limit=1&appid=${API_KEY}`)
        let jsonGeoResponse = await geoResponse.json();

        let weatherResponse = await fetch(`${WEATHER_API_URL}?lat=${jsonGeoResponse[0].lat}&lon=${jsonGeoResponse[0].lon}&appid=${API_KEY}&units=metric`);
        let jsonWeatherResponse = await weatherResponse.json();
    
       // console.log(jsonWeatherResponse);
        let result = {
           city : city,
           country : jsonWeatherResponse.sys.country,
           temp : jsonWeatherResponse.main.temp,
           tempMin : jsonWeatherResponse.main.temp_min,
           tempMax : jsonWeatherResponse.main.temp_max,
           humidity : jsonWeatherResponse.main.humidity,
           feelsLike : jsonWeatherResponse.main.feels_like,
           weather : jsonWeatherResponse.weather[0].description,
        };
        return result;
       }
       catch(err){
         throw err;
       }
    }

    function handleInputChange(event){
      setCity(event.target.value);
    }

    let handleFormSubmit = async(event)=>{
        try{
        event.preventDefault();
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info);
        }
        catch(err){
            setError(!error);
        }
    }

    return(
        <div className="SearchBox">
            <form onSubmit={handleFormSubmit}>
             <TextField className="ipBox" id="outlined-size-small" size="small" placeholder="Search City" value={city} onChange={handleInputChange} required sx={{backgroundColor:"white",borderRadius:"5px", border:"none"}}/>
             &nbsp; &nbsp;
            <Button variant="contained" id="submitbtn" type="submit" style={{marginBottom:"20px"}} sx={{backgroundColor:"#fff", borderRadius:"20px"}}>{<SearchIcon sx={{ color: 'rgba(30, 197, 223, 1)'}} />}</Button>
               { error && <Alert severity="warning" onClose={() => {setError(false)}} className="alert"> No Such Place Exists !</Alert>}
            </form>         
        </div>
    );
}