export default class MarsRover {
  static getMars(rover, date) {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${process.env.API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}