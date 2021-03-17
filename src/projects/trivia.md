---
title: Trivia App
stack: [mongodb, express, react, node]
slug: trivia
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615526720/dills-corner/svg-start.png
---

# Socially Distanced Trivia

<div class="relative mb-8" style="padding-top: 56.25%">
<iframe class="absolute inset-0 w-full h-full my-4" src="https://www.youtube.com/embed/36vUIEX3Orw?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br><br>

repo: <a href="https://github.com/digthedill/trivia-frontend" target="_blank" class="mb-2 hover-state">Frontend</a>/<a href="https://github.com/digthedill/socially-distanced-trivia" target="_blank" class="mb-2 hover-state">Backend</a>

website: <a href="https://socially-distanced-trivia.vercel.app/" target="_blank" class="mb-2 hover-state">Vercel site</a>

## Tech

- Socket.io
- Node/Express
- MongoDB (atlas)
- React
- Material UI

## About

The app is designed to quickly start a game without an email and password sign up. To start a game, click "Create Game" and socket.io will create a game room. Only the creator of the room has control of starting the game. The admin (room creator) can invite friends to join the room (click "Join Game" with the given room name).
<br><br>
Once the admin start's the game, the 10 second countdown will start. Each round has 10 questions supplied through [Open Trivia DB](https://opentdb.com/). At the end of the round, socket.io will tally scores and emit a winner (or winners) to the room.
<br><br>
The user information, room, and scoring is stored in mongoDb Atlas. Using socket.io, the user is stored and removed once they open or close the app. This technique will prevent the database from becoming too large.
<br><br>
This project was an opportunity to use socket.io in React, and to dive beyond socket.io's chatroom use. The app also allowed me to practice and learn Material UI.
