import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function LocationAndTime({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className=" flex items-center justify-center my-6">
        <p className=" text-white sm:text-xl font-extralight">
          {`${formatToLocalTime(dt, timezone).slice(
            0,
            16
          )} | Local Time: ${formatToLocalTime(dt, timezone).slice(17, 22)}`}
        </p>
      </div>
      <div className=" flex items-center justify-center my-3">
        <p className=" text-white sm:text-3xl font-medium">
          {" "}
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default LocationAndTime;
