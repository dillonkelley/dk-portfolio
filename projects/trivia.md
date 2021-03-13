---
title: Trivia App
stack: [node, react, mongodb, express]
slug: trivia
img: https://res.cloudinary.com/dilldog-industries/image/upload/v1615526720/dills-corner/svg-start.png
---

# Socially Distanced Trivia

repo: <a href="https://github.com/digthedill/trivia-frontend" target="_blank" class="mb-2 hover-state underline hover:no-underline">Frontend</a>/<a href="https://github.com/digthedill/socially-distanced-trivia" target="_blank" class="mb-2 hover-state underline hover:no-underline">Backend</a>

website: <a href="https://socially-distanced-trivia.vercel.app/" target="_blank" class="mb-2 hover-state underline hover:no-underline">Vercel site</a>

## Tech:

- Socket.io
- Node/Express
- MongoDB (atlas)
- React
- Material UI

<div class="relative mb-8" style="padding-top: 56.25%">
<iframe class="absolute inset-0 w-full h-full my-4" src="https://www.youtube.com/embed/RgV-MHk8eD4?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## About

The game works without user authentication. To start a game, click start game and socket.io will create a game room. Only the creator of the room has control of starting the game. You can invite friends to join your room.

The user information, room, and scoring is stored in mongoDb Atlas. Using socket.io, the user is stored and removed once they open or close the app. This technique will prevent the database from becoming too large.

## More..

This project was an opportunity to use socket.io in React, and to dive beyond the chatroom use. The app also allowed me to practice and learn Material UI.
