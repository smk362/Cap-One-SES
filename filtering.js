const container = document.getElementById('articles');
const category = document.getElementById("category");

//Alerts the user that they are viewing sports news and sends a url with the category specified to sports to the loadArticles function.
function sportsSort() {
    category.textContent = "You are viewing Sports News";
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=78b9d599c4f94f8fa3afb1a5458928d6';
    loadArticles(url);
}

//Alerts the user that they are viewing tech news and sends a url with the category specified to technology to the loadArticles function.
function techSort() {
    category.textContent = "You are viewing Technology News";
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=78b9d599c4f94f8fa3afb1a5458928d6';
    loadArticles(url);
}

//Alerts the user that they are viewing entertainment news and sends a url with the category specified to entertainment to the loadArticles function.
function entertainSort() {
    category.textContent = "You are viewing Entertainment News";
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=78b9d599c4f94f8fa3afb1a5458928d6';
    loadArticles(url);
}

//Loads the articles from the News API into a JSON and reads them
function loadArticles(url) {
    console.log("loadArticles is running");
    container.textContent = "";

    //Reads the url and creates a JSON
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var articles = request.response;

        //For each article, creates an entry that includes an image, the title, the source, and a link to the article
        for(let i = 0; i < articles.articles.length; i++) {
            const article = document.createElement('div');
            article.className = "entry";
            container.appendChild(article);

            const img = new Image();
            img.src = articles.articles[i].urlToImage;
            article.appendChild(img);

            const text = document.createElement('div');
            text.className = "text";
            article.appendChild(text);

            const source = document.createElement('h3');
            source.textContent = articles.articles[i].source.name;
            text.appendChild(source);

            const title = document.createElement('h2');
            title.textContent = articles.articles[i].title;
            text.appendChild(title);

            const desc = document.createElement('p');
            desc.textContent = articles.articles[i].description;
            text.appendChild(desc);

            const url = document.createElement('a');
            url.href = articles.articles[i].url;
            url.textContent = "Click here to view full article!";
            url.target = "_blank";
            text.appendChild(url);
        }
    }
}
