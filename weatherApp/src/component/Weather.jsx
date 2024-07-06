import React , {useEffect , useState} from 'react'
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null); 

  const fetchData = async () => {
    try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8aa0caeeeeee6d8cb519cf83cf159b98`);  
    
    setWeatherData(response.data);
    console.log(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }


  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the city Name' value={city} onChange={handleInputChange} />
        <button type="submit">Get Weather</button>
      </form>
      {
        weatherData ? (
          <>
            <h2>{weatherData.name}</h2>
            <p>Temperature : {weatherData.main.temp} C</p>
            <p>Description</p>
          </>
        ) :
        <p>Loading weather Data ...</p>
      } */}

    <div className='container p-5'>
      <div className='row justify-content-center border rounded'>
        <div className='col-9 text-center bg-info '>
        <div className='d-flex w-100 justify-content-around'>
          <div>
            <input className='form-control '/>
          </div>
          <div></div>
        </div>
        </div>
        <div className='col-3'>
          <></>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default Weather