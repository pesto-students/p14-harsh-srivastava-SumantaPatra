// In a weather application, you need to implement a function that retrieves the temperature for a given city from an external API. However, retrieving the temperature can be a slow and resource-intensive operation, so you want to cache the results for each city to avoid making unnecessary API calls. Write a function getTemperatureForCity that takes a city name as a parameter and returns the temperature for that city. The function should use memoization to cache the results.

// Assume that you have a hardcoded list of temperatures for various cities in place of API. You can use the following data:

const temperatureData = {

'New York': 20,

'London': 18,

'Paris': 22,

'Tokyo': 25,

'Sydney': 28,

};

function memoize(func) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (cache[key]) {
        return cache[key];
      }
      
      const result = func.apply(this, args);
      cache[key] = result;
      
      return result;
    };
  }

  function getTemperatureForCity(cityName:string){
    return temperatureData[cityName]
  }   

  const memoizeFun = memoize(getTemperatureForCity)

  console.log(memoizeFun('New York'))
  console.log(memoizeFun('New York'))
  console.log(memoizeFun('New York'))

