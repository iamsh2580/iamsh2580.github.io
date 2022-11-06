const quotes = [
{quote :"a",
author:"aaa"},
{quote :"b",
author:"bbb"},
{quote :"c",
author:"ccc"},
{quote :"d",
author:"ddd"},
{quote :"e",
author:"eee"},
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[0])

//function todaysQtote(){
    const randNum = Math.floor(Math.random()*quotes.length);
    const todaysQuote= quotes[randNum];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
// }


//0부터 9 까지의 숫자를 주는 기능이 필요 -> Math사용