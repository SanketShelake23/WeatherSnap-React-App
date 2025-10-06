import { ClassNames } from '@emotion/react';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import './App.css';

import WeatherApp from "./WeatherApp"


function App() {
  
  return (

    <div className="appBox">
        <div className='navbar'>
            <span className='title'> <CloudCircleIcon sx={{ color: 'rgba(30, 197, 223, 1)', fontSize:"30px"}}/>&nbsp;<i>WeatherSnap</i></span>
           &nbsp; &nbsp;  &nbsp; <span className='tagline'>"- Know the Sky Above You !"</span>
        </div>
        
        <WeatherApp />
        <div className="f-info">
        <div className="f-info-socials">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
         </div>
         <div className="f-info-brand"> &copy; WeatherSnap Private Limited</div>
         <div className="f-info-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
        </div>
     </div>
    </div>
     
  );
}

export default App
