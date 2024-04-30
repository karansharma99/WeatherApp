import React from "react";
import {
  UilArrowUp,
  UilSunset,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconURL } from "../services/weatherService";

function Details({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <>
      <div className=" weather-condition flex items-center justify-center py-6 sm:text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className=" weather-details flex flex-row items-center justify-between text-white sm:py-3">
        <img src={iconURL(icon)} className="w-50" alt="" />
        <p className=" text-lg  sm:text-5xl">{`${temp.toFixed()} `}&deg;</p>
        <div className=" flex flex-col space-y-2 ml-5">
          <div className=" flex font-light text-xs sm:text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real Feel:
            <span className="sm:font-medium ml-1">
              {" "}
              {`${feels_like.toFixed()}`}&deg;
            </span>
          </div>
          <div className=" flex font-light text-xs sm:text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="sm:font-medium ml-1">
              {" "}
              {`${humidity.toFixed()}`}
            </span>
          </div>
          <div className=" flex font-light text-xs sm:text-sm items-center justify-center">
            <UilWind size={18} className="mr-1 " />
            Wind:
            <span className="text-xs sm:text-sm sm:font-medium ml-1">
              {" "}
              {`${speed.toFixed()} km/h`}
            </span>
          </div>
        </div>
      </div>

      <div className="flex text-xs sm:text-sm flex-row items-center justify-center space-x-1 text-white py-3">
        <UilSun size={50} />
        <p className="font-light">
           Rise:
          <span className="text-xs font-medium ml-1">
            {formatToLocalTime(sunrise, timezone).slice(18, 22)}
          </span>
        </p>
        <p className=" font-light">|</p>
        <UilSunset size={50} />
        <p className="font-light">
          Set:
          <span className=" font-medium ml-1">
            {formatToLocalTime(sunset, timezone).slice(18, 22)}
          </span>
        </p>
        <p className=" font-light">|</p>
        <UilArrowUp size={50} />
        <p className="font-light">
          High:
          <span className=" font-medium ml-1">
            {`${temp_max.toFixed()}`}&deg;
          </span>
        </p>
        <p className=" font-light">|</p>
        <UilArrowDown size={50} />
        <p className="font-light">
          Low:
          <span className=" font-medium ml-1">
            {`${temp_min.toFixed()}`}&deg;
          </span>
        </p>
      </div>
    </>
  );
}

export default Details;
