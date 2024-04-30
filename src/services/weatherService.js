const API_KEY = "7b50e7e44c98fa3f74b73ab09dfe6103";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    timezone,
  };
};
const getFormattedWeatherData = async (searchParams) => {
  const formattedData = await getWeatherData("weather", searchParams).then(
    formatCurrentWeather
  );

  return { ...formatCurrentWeather, ...formattedData };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  const unixTime = secs + zone;
  const dateObj = new Date(unixTime * 1000);
  console.log(dateObj);
  const UTCTime = dateObj.toUTCString();
  console.log(UTCTime.slice(0, 16));
  return UTCTime;
}; //DateTime.fromSeconds((secs)+zone).toFormat(format);

const iconURL = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconURL };
