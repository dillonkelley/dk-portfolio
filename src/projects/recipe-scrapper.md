---
title: Recipe Scrapper
stack: [firebase, express, vue, node]
slug: recipe-scrapper
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615326852/food-stock/4.jpg
---

# Recipe Scraper


<div class="relative" style="padding-top: 56.25%">
<iframe class="absolute inset-0 w-full h-full my-4" src="https://www.youtube.com/embed/RgV-MHk8eD4?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br><br>

Repo: <a class="mb-2 hover-state mb-2" href="https://github.com/digthedill/front-end-recipe-scraper" target="_blank">Frontend</a>/<a class="mb-2 hover-state mb-2" href="https://github.com/digthedill/recipe-scraper-api" target="_blank">Backend</a>

Website: <a class="mb-2 hover-state mb-2" href="https://cranky-pare-b2c0ec.netlify.app/" target="_blank">Netlify Site</a>

## Tech

- Node/Express
- Cheerio.js
- Vue.js
- Bootstrap
- Firebase Auth/DB


## About
Login or sign-up using firebase authentication. Once verified, you can submit the url of your favorite recipe's website. The app will scrape the recipe from the input website and store the information in the firebase database. Sign off and come back to the app anytime to view your recipes. You also have the option of deleting a recipe if you choose to. This project's frontend is built with Vue.js and Bootstrap. I used this project to get familiar with Vue. 
<br><br>
The node scrapper is built using Axios and Cheerio. The focus of this web scraper is for food recipes across different websites. The challenge was to determine the origin website's architecture and setup a scrapper function to tailor to that website. Due to the repetitive process, only 12 or so sites are accepted. The default scrapper function is designed to work with wordpress sites that use wordpress' recipe plugin.
<br><br>

The idea for this site/app came from my Mom. She always kept tabs of recipe sites open on her computer, so she wouldn't close her tabs and risk loosing the recipe. I offered this to her so she can close out of her tabs and save her favorite dishes.


