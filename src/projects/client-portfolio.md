---
title: Client Sites
slug: client-portfolio
stack: [gatsby, css]
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615390905/dills-corner/julia-photography.png
---

# Client Sites

<div class="flex flex-col md:flex-row space-y-2 md:space-x-6 justify-center items-center">
    <a href="https://karissatalanian.com/" target="_blank" class="img-link">
    <img class="w-full rounded-lg object-cover" src="https://res.cloudinary.com/dilldog-industries/image/upload/v1615590465/dills-corner/karissa-cover.png" alt="picture">
    </a>
    <a href="https://juliawilliams.info/photos" target="_blank" class="img-link">
    <img class="w-full rounded-lg object-cover" src="https://res.cloudinary.com/dilldog-industries/image/upload/v1615607646/dills-corner/julia_will.png" alt="picture">
    </a>
    <a href="https://karissatalanian.com/graphicDesign" target="_blank" class="img-link">
    <img class="w-full rounded-lg object-cover" src="https://res.cloudinary.com/dilldog-industries/image/upload/v1615590334/dills-corner/karissa-gallery_jlaphs.jpg" alt="picture">
    </a>
</div>

## Tech

- Gatsby.js
- CSS
- Cloudinary
- Stapi CMS


## About

These are websites I built for artists who needed web galleries for their artwork. Each site is a built from my template and modified to meet each client's needs. Each site is setup to handle multiple galleries and large image sizing.
<br><br>
The issue I had using strapi CMS was image load times. Since I had strapi hosted on a heroku free tier, the load time was very long and unusable. I modified my approach to serving assets by directly calling cloudinary from gatsby.js. I wrote utility functions to fetch images from different folders, and sped the website up to 99% on lighthouse.
<br><br>
I still use strapi CMS to load static information like the bio and cover images. Strapi and cloudinary are setup to emit a webhooks to the netlify site to rebuild when changes are made.
