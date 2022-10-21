//// VALUES TO CONFIGURE ////////

// fakeWeather CONTROLS WHAT WEATHER CONDITION TO SHOW IN THE SCENE
// TRY THE FOLLOWING VALUES:
// `snow`
// `thunder`
// `heavy rain`
// `light rain`
// `cloudy`
export const fakeWeather: string | null = null

// LATITUDE AND LONGITUDE OF WEATHER CONDITIONS

// Paris 

const lat: string = '48.85'
const lon: string = '2.294'

// WEATHER API ID & KEY

// Glitch Candies codes

const appId: string = 'd9fa6d29'
const APIkey: string = '08606abfacba057a4ac5234f1f754ff4'

// FALLING SPEED OF RAIN AND SNOW

export const rainSpeed = 4
export const snowSpeed = 1

////////////////////////////////

// fully constructed URL for weather API
export const callUrl: string =
  'http://api.weatherunlocked.com/api/current/' +
  lat +
  ',%20' +
  lon +
  '?app_id=' +
  appId +
  '&app_key=' +
  APIkey
