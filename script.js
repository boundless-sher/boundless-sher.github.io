const apiUrl = "https://murphy-quotes-0c76523e6ac1.herokuapp.com/api/quotes";

const pickRandom = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    quote = data[randomIndex].quote;
    author = data[randomIndex].author;
    return { quote, author };
};

const getRandomQuote = () => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const { quote, author } = pickRandom(data);
            console.log(quote, author);
            document.getElementById("quote-content").innerText = quote;
            document.getElementById("quote-content").innerText += `\n${author}`;
        });
};

document
    .getElementById("get-random-quote")
    .addEventListener("click", getRandomQuote);
