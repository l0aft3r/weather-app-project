export default giphyFetcher

const apikey = 'trPRjzdLsBt7BwKhBOqhfiM8QgdmhwwH';
async function giphyFetcher(searchPrompt = 'Sunny Day') {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apikey}&s=${searchPrompt}`);
    response = await response.json();
    return response.data.images.original.url;
}