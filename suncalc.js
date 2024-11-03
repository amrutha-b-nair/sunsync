// suncalc.js
import SunCalc from 'suncalc';

const latitude = 40.7128;
const longitude = -74.0060;

function getSolarTimes() {
  const now = new Date();
  const sunTimes = SunCalc.getTimes(now, latitude, longitude);
  const sunPosition = SunCalc.getPosition(now, latitude, longitude);

  return {
    sunrise: sunTimes.sunrise,
    sunset: sunTimes.sunset,
    solarNoon: sunTimes.solarNoon,
    altitude: sunPosition.altitude,
    azimuth: sunPosition.azimuth
  };
}

export { getSolarTimes };
