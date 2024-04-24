const btnEl = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";
async function getQuote() {
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quote.innerText = "Updating..."
        author.innerText = "Updating..."
        const res = await fetch(apiURL)
        const data = await res.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quote.innerText = quoteContent;
        author.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    } catch (error) {
        quote.innerText = "An Error Happened,try again later"
        author.innerText = "An Error Happened"
        btnEl.disabled = true;
    }
}

btnEl.addEventListener("click", getQuote);

getQuote();