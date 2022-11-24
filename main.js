import axios from 'axios';

async function fetchRandomquote() {
  try {
    const randomquoteData = await axios.get(
       'https://www.breakingbadapi.com/api/quote/random'
     );
const returnQ=randomquoteData.data[0].quote;


    console.log(randomquoteData.data[0]); 
     if (randomquoteData.status == 200) {
      return randomquoteData.data;
    } else {
      return null;
     }
  } catch (error) {
     console.log('Uh, oh there is an error', error);
   }
 }

//  fetchRandomquote()

 function showRandomQuote (){
  const quoteText = document.getElementById("quote-text");
  const quoteButton = document.getElementById("gen-quote-btn");
  quoteButton.addEventListener("click", async() => {
    const returnQuote = await fetchRandomquote();
      console.log(returnQuote);
    quoteText.innerHTML = returnQuote[0].quote;
    const quoteAuthor=document.getElementById("quote-author");
    quoteAuthor.innerHTML=returnQuote[0].author
  })
}
showRandomQuote ();

const clearbutton=()=>{
  let outputElements=document.querySelectorAll(".output")
    console.log(outputElements);
  outputElements.forEach((el)=> {
    el.innerHTML ="";
  })
}

const clearoutput=document.getElementById("clear");
  clearoutput.addEventListener("click",clearbutton);
  
  