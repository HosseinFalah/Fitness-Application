const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    },
};

const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY
    }
};  

const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};

export { exerciseOptions, youtubeOptions, fetchData }