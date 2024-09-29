import WeatherFetcher from "./modules/weather-fethcer";
import './styles.css';
import { setupIcons, changeInfo, changeBackground } from "./modules/ui";

setupIcons();

const searchPrompt = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

const weatherFetcher = new WeatherFetcher();
let data;
(async () => {
    data = await weatherFetcher.getWeatherData();
    changeInfo('London', data[0], data[1]);
    changeBackground(data[1]);
    console.log(data);
})();

searchBtn.addEventListener('click', async () => {
    data = await weatherFetcher.getWeatherData(searchPrompt.value);
    changeInfo(searchPrompt.value, data[0], data[1]);
    changeBackground(data[1]);
});