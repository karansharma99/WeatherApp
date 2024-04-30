import React, { useState } from "react";
import { UilSearch, UilLocationPinAlt } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const searchHandler = () => {
    if (city !== "") {
      setQuery({ q: city });
      setCity("")
    }
  };

  const handleUnitsClick = (e) => {
    if (units !== e.currentTarget.name) {
      setUnits(e.currentTarget.name);
    }
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching User Location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location Fetched");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="flex flex-row justify-center my-6 py-6">
      <div className=" flex flex-row w-3/4 items-center justify-center space-x-4 ">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="search..."
          className=" sm:text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={searchHandler}
          size={25}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
        ></UilSearch>
        <UilLocationPinAlt
          onClick={handleLocationClick}
          size={25}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className=" flex flex-row w-1/4 items-center justify-center ml-2">
        <button
          onClick={handleUnitsClick}
          name="metric"
          className=" text-sm sm:text-xl text-white font-white transition ease-out hover:scale-125"
        >
          C &deg;
        </button>
        <p className=" text-xl text-white mx-1">|</p>
        <button
          onClick={handleUnitsClick}
          name="imperial"
          className=" text-sm sm:text-xl text-white font-white ransition ease-out hover:scale-125"
        >
          F &deg;
        </button>
      </div>
    </div>
  );
}

export default Inputs;
