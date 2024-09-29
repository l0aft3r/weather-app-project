import locationSVG from '../icons/location-outline.svg'
import giphyFetcher from '../modules/gif-fetcher.js';
export { setupIcons, changeInfo, changeBackground }

function setupIcons() {
    const img = document.querySelector('img');
    img.src = locationSVG;
}

function changeInfo(loc, temp, con) {
    const location = document.querySelector('h1');
    const temperature = document.querySelector('#temp');
    const conditions = document.querySelector('h2');

    location.textContent = loc;
    temperature.textContent = temp + '°C';
    conditions.textContent = con;
}

async function changeBackground(con) {
    const src = await giphyFetcher(con);
    const main = document.querySelector('#mainContainer');
    main.style.backgroundImage = `url('${src}')`;
    main.style.backgroundRepeat = 'no-repeat';
    main.style.backgroundSize = 'cover';
}