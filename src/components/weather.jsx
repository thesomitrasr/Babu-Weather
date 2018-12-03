import React from "react";
const Weather = props => {
  return (
  <div className="slide">
       {props.city &&<h3 id="weather">Weather Report</h3>}
    {props.city&& <p>City: {props.city}</p>}
    {props.conuntry&& <p>Country: {props.conuntry}</p>}
    {props.temp && 
 <p> Temprature:{props.temp}</p>
   } {props.humid&&<p>  Humidity:{props.humid}</p> }
    
        {props.visibilty&&<p>  Visibilty:{props.visibilty}</p> }

        {props.descr&& <p>  Situation:{props.descr}</p> }
        {props.error && <p>{props.error}</p>}
       {props.button&&<p>{props.button}</p>}
       
  
  </div>
  );
};
export default Weather;
