import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import LocationAndTime from "./components/LocationAndTime";
import Details from "./components/Details";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "New Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {
      const message=query.q? query.q :'current location'
      toast.info('Fetching feather for '+message)
      await getFormattedWeatherData({ ...query, units}).then((data) => {
        toast.success("Succesfully fetched weather for "+ message)
        console.log(data)
        setWeather(data);
      }).catch(error=>toast.error("City Not found"));
    };
    fetchWeather();
  }, [query, units]);

  const formaBackground=()=>{
    if(!weather)return 'from-cyan-700 to-gray-700'
    const threshold = units==='metric'?20:60
    if (weather.temp<=threshold)return 'from-cyan-700 to-blue-700'

    return "from-yellow-700 to-orange-700"
  }
  return (
    <div className={`mx-auto max-w-screen-md h-screen w-screen py-10 px-10 sm:px-32 bg-gradient-to-br ${formaBackground()} h-fit shadow-xl`}>      
      <TopButtons setQuery={setQuery}  />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <LocationAndTime weather={weather}/>
          <Details weather={weather} />
        </>
      )}


      <ToastContainer autoClose={3000} theme="colored"/>

    </div>
  );
}

export default App;
