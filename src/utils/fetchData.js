 const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'b9f675dd36mshd17379a9fb3b4edp1de1eejsn87f2718c1cde',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c73787dddemsh35f00053986ebfcp17670ajsne21e8a77a187',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

 const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

  export { fetchData, exerciseOptions,youtubeOptions}