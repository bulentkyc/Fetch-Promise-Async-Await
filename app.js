async function dataHandler(data) {
    let result = await data.json();
    console.log(result);
}

function errorHandler(err) {
    console.log(err);
}

let url = 'https://imdb8.p.rapidapi.com/title/auto-complete?q=back%20to%20the';
let options = {
    'method':'GET',
    'headers': {
        'x-rapidapi-key':'',
        'x-rapidapi-host':'imdb8.p.rapidapi.com'
    }
};

fetch(url, options).then(dataHandler).catch(errorHandler);