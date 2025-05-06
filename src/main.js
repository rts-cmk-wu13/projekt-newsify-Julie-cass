
/* 
document.querySelector("header").append()

document.querySelector("main").append()

document.querySelector("footer").append()
 */

/* style */
import './styling/style.scss'

document.querySelector("body").append(divElm)
/* header */
import { berry } from "./standard/footer";
import { banana, grape } from "./standard/header";
import { divElm } from './layout';
import { sectionElem } from './home/homelayout';
import { getmostPopular } from './apimap/nyt_api';

document.querySelector("header").append(banana)


document.querySelector("header").append(grape)

/* main */
document.querySelector("main").append(sectionElem)

/* footer */
document.querySelector("footer").append(berry)



const popArticles = await getmostPopular('viewed', 7);
const Article = await arcticleSearch('query', filter);
console.log(popArticles)
console.log('get here now',Article)