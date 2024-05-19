const apiUrl = "https://murphy-quotes-0c76523e6ac1.herokuapp.com/api/quotes";

async function handleClick() {
    const response = await fetch(apiUrl);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const quote = data.quote;
    console.log(quote);
    document.getElementById("quote-content").innerHTML = quote;
}

document
    .getElementById("get-random-quote")
    .addEventListener("click", handleClick);
