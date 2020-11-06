console.log("js running");

const container = document.getElementById('articles');
const mostRelevant = document.createElement('div');
mostRelevant.className = "list";
const category = document.getElementById("category");

container.appendChild(mostRelevant);

//Alerts the user that they are viewing sports news and sends a url with the category specified to sports to the loadArticles function.
function sportsSort() {
    category.textContent = "You are viewing Sports News";
    let url = 'http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=78b9d599c4f94f8fa3afb1a5458928d6';
    loadArticles(url);
}

//Alerts the user that they are viewing tech news and sends a url with the category specified to technology to the loadArticles function.
function techSort() {
    category.textContent = "You are viewing Technology News";
    let url = 'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=78b9d599c4f94f8fa3afb1a5458928d6';
    loadArticles(url);
}

//Alerts the user that they are viewing entertainment news and sends a url with the category specified to entertainment to the loadArticles function.
function entertainSort() {
    category.textContent = "You are viewing Entertainment News";
    let url = 'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=78b9d599c4f94f8fa3afb1a5458928d6';
    loadArticles(url);
}

//Loads the articles from the News API into a JSON and reads them
function loadArticles(url) {
    mostRelevant.textContent = "";

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var articles = request.response;

        for(let i = 0; i < articles.articles.length; i++) {
            const article = document.createElement('div');
            article.className = "entry";
            mostRelevant.appendChild(article);

            const title = document.createElement('h2');
            title.textContent = articles.articles[i].title;
            article.appendChild(title);

            const source = document.createElement('h3');
            source.textContent = articles.articles[i].source.name;
            article.appendChild(source);

            const url = document.createElement('a');
            url.href = articles.articles[i].url;
            url.textContent = "Click here to view full article!";
            url.target = "_blank";
            article.appendChild(url);
        }
    }
}
