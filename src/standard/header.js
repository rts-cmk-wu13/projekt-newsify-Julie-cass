

export let banana = document.createElement("section")
banana.classlist = "home_title"

banana.innerHTML = `
<div class="title">
<img class="logo_img" src="/src/newsify_logo.png" alt="">
    <h1 class="firma_name">Newsify</h1>
</div>
`
/* end */

export let grape = document.createElement("section")
grape.classlist = "search_section"
grape.innerHTML = `
<div class="search_con">
    <input type="text" placeholder="search news here">
</div>
`/* end */