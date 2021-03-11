
const quotes = [
{
 quote: "Self-control is strength. Right thought is mastery. Calmness is power.",
 source: "James Allen"
},

{
  quote: "Make the mind tougher by exposing it to adversity.",
  source: "Robert Greene"
},

{
  quote: "Mastery of reading and writing requires a master. Still more so life.",
  source: "Marcus Aurelius"
},

{
  quote: "The happiness of your life depends upon the quality of your thoughts.",
  source: "Marcus Aurelius",
  citation: " Ryan Holiday"
},

{
  quote: "Do not be wise in words - be wise in deeds.",
  source: "Marcus Aurelius"
},

{
  quote: "Do not be wise in words - be wise in deeds.",
  source: "Marcus Aurelius",
  year: 2021
}

]; // I used an array of objects to store the quotes. 



function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length); 
  return quotes[randomNumber]; 
}; // randomly gets a quote using the array index. 


function printQuote() {

  let printQuoteObject = getRandomQuote();

  let html = `<p class= "quote"> ${printQuoteObject.quote}</p>
  <p class= "source"> ${printQuoteObject.source}`;

  if (printQuoteObject.citation) {
    html += `<span class='citation'>${printQuoteObject.citation}</span>`;
  }  
  if(printQuoteObject.year) {
    html += `<span class='year'>${printQuoteObject.year}</span>`;
  }
  `</p>`
  
  return document.getElementById('quote-box').innerHTML = html;

console.log(printQuote());

};

document.getElementById('load-quote').addEventListener("click", printQuote, false)