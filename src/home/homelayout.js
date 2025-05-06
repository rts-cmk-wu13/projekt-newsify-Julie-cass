export let sectionElem= document.createElement("section")
sectionElem.classList = "genres"
sectionElem.innerHTML=
`
<article class="genres_con">

<div class="europe genre_box">

<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">europe</h2>
<button onclick="headlineBTN" class="btn"><i class="fa-solid fa-arrow-right"></i></button>
<div class="more">
<p>blablabla</p>
</div>
</div>

<div class="health genre_box">

<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">health</h2>

<button onclick="headlineBTN()" class="btn"><i class="fa-solid fa-arrow-right"></i></button>
</div>

<div class="sport genre_box">

<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">sport</h2>

<button onclick="headlineBTN()" class="btn"><i class="fa-solid fa-arrow-right"></i></button>
</div>

<div class="business genre_box">

<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">business</h2>

<button onclick="headlineBTN()" class="btn"><i class="fa-solid fa-arrow-right"></i></button>
</div>

<div class="travel genre_box">

<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">travel</h2>

<button onclick="headlineBTN()" class="btn"><i class="fa-solid fa-arrow-right"></i></button>
</div>

</article>
`
document.querySelector("body").append(sectionElem)


/*
<div class="health genre_box">
<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">health</h2>
<button onclick="headlineBTN()" class="btn">></button>
</div>

<div class="sport genre_box">
<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">sport</h2>
<button onclick="headlineBTN()" class="btn">></button>
</div>

<div class="business genre_box">
<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">business</h2>
<button onclick="headlineBTN()" class="btn">></button>
</div>

<div class="travel genre_box">
<img class="logo_img" src="/src/newsify_logo.png" alt="">
<h2 class="genre_title">travel</h2>
<button onclick="headlineBTN()" class="btn">></button>
</div> */