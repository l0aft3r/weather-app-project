export default WeatherFetcher

class WeatherFetcher {
    #apikey = '6T45RSXE3NBTNPJQU8M76TNKX';
    async getWeatherData(searchPrompt = 'london') {
        try {
            let weatherdata = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchPrompt}?key=${this.#apikey}`);
            weatherdata = await weatherdata.json();
            let temp = weatherdata.currentConditions.temp
            let conditions = weatherdata.currentConditions.conditions
            return [temp, conditions];
        } catch {
            throw new Error('An error occured while getting the weather data');
        }
    }
}