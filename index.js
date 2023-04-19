async function abc(){
let fetc=await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ab537322817d4faa9eb955dc7f737e11");
let response=await fetc.json();
// console.log(response)
for(let item of response.articles){
    var dataofitems=[item.title,item.description,item.urlToImage,item.publishedAt,item.url];
    // console.log(dataofitems)
    call(dataofitems);
}

}
abc();
function call([title,description,urlimage,publishedat,url]){
 document.getElementById('cards').innerHTML+= `
 <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${urlimage} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">Published on :${new Date(publishedat).toDateString()}</p>
      <a href=${url} target="_blank" class="btn btn-primary">Read More</a>
    </div>
  </div>`
}
