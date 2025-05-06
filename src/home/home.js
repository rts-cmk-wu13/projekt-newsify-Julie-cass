

let SectionElm = document.createElement("section")
SectionElm.classlist = "home_main"



let fetchHeadline = () => {
  let metaUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=lFiegtcOUpRhpoZNYhVJtvL5lvYWQBDf`;

  fetch(metaUrl)
      .then(response => response.json())
      .then(data => {
    
console.log(data);

SectionElm.innerHTML = data.results.map(news => 
` 
<h1>${news.keywords}</h1>

`
).join("");  

console.log(SectionElm);
      })

      document.querySelector('#app').append(SectionElm);

};
fetchHeadline();

