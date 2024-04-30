import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: "Mumbai" },
    { id: 2, title: "London" },
    { id: 3, title: "Tokyo" },
    { id: 4, title: "Paris" },
    { id: 5, title: "Chandigarh" },
  ];
  return (
    <div className="flex items-center justify-between sm:flex-grow flex-row my-6 w-full ">
      {cities.map((city) => {
        return (
          <button
            onClick={() => setQuery({ q: city.title })}
            key={city.id}
            className=" text-white font-xs sm:font-md text-sm sm:text-lg "
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
