

const BASE_URL = 'https://api.nytimes.com/svc/';
const API_KEY = import.meta.env.VITE_NYT_API_KEY;
/* popular */
const cache = JSON.parse(localStorage.getItem('cache')) ?? {};

export async function getmostPopular(endpoint, days) {
    const url = new URL(`mostpopular/v2/${endpoint}/${days}.json`, BASE_URL);

   return fetchData(url);
}

/* article search */
export async function arcticleSearch(query, filter) {
    const url = new URL('search/v2/articlesearch.json', BASE_URL);
    url.searchParams.append('q',query);
    url.searchParams.append('fl',filter);
    return fetchData(url);
}

/* data and api key */
async function fetchData(url){
    url.searchParams.append('api-key', API_KEY);

    if (cache[url.href] !== undefined) {
        console.log('returning cache bonk...');
        return cache[url.href].results;
    }

    console.log('fetching the new data...');


    const response = await fetch(url);
    const data = await response.json();

    cache[url.href] = data;

localStorage.setItem('cache', JSON.stringify(cache))

    return data.results;

}



