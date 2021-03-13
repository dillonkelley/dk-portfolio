---
title: Weather Synth
stack: [node, express, hbs, tone.js]
slug: weather-synth
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615526352/dills-corner/Screenshot_from_2021-03-11_23-17-14_ad9kmc.png
---

# Weather Synthesis

Repo: <a class="underline hover:no-underline mb:2" target="_blank" href="https://github.com/digthedill/weather-sequencer">Github</a>

Website: <a class="underline hover:no-underline" target="_blank" href="https://pacific-wave-90389.herokuapp.com/">Heroku App</a>

## Tech:

- Tone.js
- pts.js
- Node/Express
- Handlebars
- mapbox API and weatherstack API
- postman-request

<a href="https://pacific-wave-90389.herokuapp.com/" target="_blank">
    <img class="w-full" src="https://res.cloudinary.com/dilldog-industries/image/upload/v1615403787/dills-corner/weather_tones.png" alt="weather synth demo" />
</a>

## About

The search field fetches data about the entered location. That data is used to modify the synthesizer and sequencer built in Tone.js. The rate of the sequence is calculated based on what time of the day you are using the app. Currently, the rate (or BPM) is set to increase throughout the day.

Once the search event is fired, the Tone.js synthesizer is visualized through pts.js.

## Inspiration:

This project was inspired from the common weather apps used for students to learn servers and http requests. I thought it'd be interesting to generate some type of synthesizer from the parameters that are received from your weather forecast.

As for a conceptual inspiration, I have to acknowledge the brilliant, Brian Eno. His work in generative art and music is unparalleled.
