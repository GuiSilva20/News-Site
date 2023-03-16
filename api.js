
var baseURL = 'https://api.marketaux.com/v1/news/all?language=pt&countries=br'
var key = 'OzqvWrEjUg7PTuwmqDyho8y3jAVjoruh6zGiMVxi'
let fullLink = baseURL + '&api_token=' + key



fetch(fullLink)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayNews(data)
        displayNews2(data)
        displayNews3(data)
    })

    .catch((error) => console.error("FETCH ERROR:", error));

async function displayNews(data) {
    
    const news = data.data[0]
    const newsDiv = document.getElementById('news');
    const heading = document.getElementById('heading')
    const time = document.getElementById('time')
    const title = document.getElementById('Title')
    const img = document.getElementById('img')
    const font = document.getElementById('font')
    img.setAttribute("src", innerHTML = news.image_url)
    heading.innerHTML = news.title;
    time.innerHTML = news.published_at;
    title.innerHTML = news.snippet;
    font.innerHTML = news.source;
    const click = document.getElementById('newsA')
    newsA.innerHTML = Onclick(() => news.url)
    
    
};

async function displayNews2(data) {
    
    const news = data.data[1]
    const heading = document.getElementById('heading2')
    const time = document.getElementById('time2')
    const title = document.getElementById('Title2')
    const img = document.getElementById('img2')
    const font = document.getElementById('font2')
    img.setAttribute("src", innerHTML = news.image_url)
    heading.innerHTML = news.title;
    time.innerHTML = news.published_at;
    title.innerHTML = news.snippet;
    font.innerHTML = news.source;
    
};

async function displayNews3(data) {
    
    const news = data.data[2]
    const heading = document.getElementById('heading3')
    const time = document.getElementById('time3')
    const title = document.getElementById('Title3')
    const img = document.getElementById('img3')
    const font = document.getElementById('font3')
    img.setAttribute("src", innerHTML = news.image_url)
    heading.innerHTML = news.title;
    time.innerHTML = news.published_at;
    title.innerHTML = news.snippet;
    font.innerHTML = news.source;
    
};
