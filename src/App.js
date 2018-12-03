import React from 'react';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import Navbar from './components/nav';
import './css/App.css';

const Api_key="Your Api_key"

class App extends React.Component{
  state={
    temp: undefined,
    city: undefined,
    country: undefined,
    humid: undefined,
    visibilty: undefined,
    descr:undefined,
    error:undefined,
  

  }
getWeather= async(e)=>{
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.city.value;


  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_key}`)
  const data = await api_call.json();
  if(city && country){


  console.log(data);

  this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humid: data.main.humidity,
    visibilty: data.visibility,
    descr: data.weather[0].description,
    error: "",
    
  
  })
} else{
  this.setState({
    error:  <div class="alert alert-danger" role="alert">Please enter the values...</div>
    
})
};
  

}
  render()
    {
    return(
      <div>
        <div className="navbar">
        <Navbar />
        </div>
        <div className="title">
        <Titles />
        </div>
        <div className="form">
        <Form great={this.getWeather}/>
        <div className="result">
     
        <Weather 
        ti={<h3>Weather Report</h3>}
        temp={this.state.temp} 
        city={this.state.city}
        conuntry={this.state.country} 
        humid={this.state.humid}
        visibilty={this.state.visibilty} 
        descr={this.state.descr}
        error={this.state.error}
      

        
        
        />
        </div>
      </div>
      </div>
   )
  }
}
export default App;
