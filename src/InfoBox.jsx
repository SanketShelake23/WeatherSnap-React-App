import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";


export default function InfoBox({info}){

    const SUN_URL = import.meta.env.VITE_SUN_URL;
    const RAIN_URL = import.meta.env.VITE_RAIN_URL;
    const WINTER_URL = import.meta.env.VITE_WINTER_URL;

    return(
        <div className="infoBox">
           
            <div className='infoCard'>
            <Card sx={{ maxWidth: 800, maxHeight: 700 }}>
            <CardMedia
                sx={{ height: 240 }}
                image={ info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? SUN_URL : WINTER_URL)}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} &nbsp;{info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon /> )}
                </Typography>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>   {/* // component={"span"} : To add multiple <p></p> */}
                   <p>Temparature :  &nbsp;{info.temp}&deg;C</p> 
                   <p>Humidity : &nbsp;{info.humidity}</p>
                   <p>Min Temp : &nbsp;{info.tempMin}&deg;C</p>
                   <p>Max Temp : &nbsp;{info.tempMax}&deg;C</p>
                   <p>The Weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
           </Card>
           </div>
        </div>
    )
}
