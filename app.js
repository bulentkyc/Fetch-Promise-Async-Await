function dataReceiver() {
    async function dataHandler(data) {
        let result = await data.json();
        console.log(result);
        for (let index = 0; index < result.d.length; index++) {
            const movie = result.d[index];
            let card = `
            <div class="card">
                <img src = "${movie.i.imageUrl}"
            </div>
            `
            document.querySelector('body').insertAdjacentHTML('beforeend',card);
        }
    }

    function errorHandler(err) {
        console.log(err);
    }

    let url = 'https://imdb8.p.rapidapi.com/title/auto-complete?q='+document.getElementById('search').value;
    let options = {
        'method':'GET',
        'headers': {
            'x-rapidapi-key':'',
            'x-rapidapi-host':'imdb8.p.rapidapi.com'
        }
    };

    fetch(url, options).then(dataHandler).catch(errorHandler);
}