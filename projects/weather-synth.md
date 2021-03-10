---
title: Weather Synth
stack: node, express, hbs, tone.js
slug: weather-synth
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615326404/dills-corner/weather-synth.png
---

# Weather Synthesis

A simple weather app that generates a Tone.js sequencer

## About

The search field fetches data about the entered location. That data is used to modify the synthesizer and sequencer built in Tone.js. The rate of the sequence is calculated based on what time of the day you are using the app. Currently, the rate (or BPM) is set to increase throughout the day.

Once the search event is fired, the Tone.js synthesizer is visualized through pts.js.

## Tech:

- Tone.js
- pts.js
- Node/Express
- Handlebars
- mapbox API and weatherstack API
- postman-request

## Inspiration:

This project was inspired from the common weather apps used for students to learn servers and http requests. I thought it'd be interesting to generate some type of synthesizer from the parameters that are received from your weather forecast.

As for a conceptual inspiration, I have to acknowledge the brilliant, Brian Eno. His work in generative art and music is unparalleled.
