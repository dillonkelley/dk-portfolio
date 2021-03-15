---
title: Weather Synth
stack: [node, express, hbs, tone.js]
slug: weather-synth
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615526352/dills-corner/Screenshot_from_2021-03-11_23-17-14_ad9kmc.png
---

# Weather Synthesis

<a href="https://pacific-wave-90389.herokuapp.com/" target="_blank">
    <img class="w-full" src="https://res.cloudinary.com/dilldog-industries/image/upload/v1615403787/dills-corner/weather_tones.png" alt="weather synth demo" />
</a>
<br><br>

Repo: <a class="mb:2" target="_blank" href="https://github.com/digthedill/weather-sequencer">Github</a>

Website: <a target="_blank" href="https://pacific-wave-90389.herokuapp.com/">Heroku App</a>

## Tech

- Tone.js
- pts.js
- Node/Express
- Handlebars
- mapbox API and weatherstack API
- postman-request


## About

The search field fetches weather data about the entered location. That data is used to modify the synthesizer and sequencer's parameters built in Tone.js. The rate of the sequence is calculated based on what time of the day you are using the app. Keywords from the weather description trigger different sequences (arrays of notes that are looped). The most popular descriptor is "cloudy", so that is the most heard sequence.
<br><br>
 The visualizer takes the audio context from Tone.js and outputs a visualization of the wave shapes. This visualizer is built using an api built on top of html's canvas api called pts.js. 
 <br><br>
 The biggest challenge with this project is consistency across platforms. Currently the audio doesn't work well on android phones, but is seems to work well with apple, iphone, and ubuntu.

## Inspiration:

This project was inspired from the common weather apps used for students to learn servers and http requests. I thought it'd be interesting to generate some type of synthesizer from the parameters that are received from your weather forecast.
<br><br>
As for a conceptual inspiration, I have to acknowledge the brilliant, Brian Eno. His work in generative art and music is unparalleled.
