[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com) [![ForTheBadge uses-git](http://ForTheBadge.com/images/badges/uses-git.svg)](https://GitHub.com/) [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)

# Overview
**Sweet Beats** is a [Chingu](https://chingu.io/) project by team Geckos 04. Made in just six weeks, and done entirely remote.
<br><br><br>
# Features
* The Spotify Web API and [audio analysis](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/).
* Responsive web design via Styled Components.
* Create, update, and delete playlists according to beats per minute (and other song data).
* Backend programming: user authentication with OAuth, MongoDB, Express.js, and cookies.
<br><br><br>

# Running The App
This project was started with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

In Node Package Manager, run...

`npx create-react-app sweet-beats`
<br>
`cd sweet-beats`

## Dependencies
Before running `npm start`, you will need these dependencies in the client folder:

* "node-sass": "^4.14.1",
* "rc-slider": "^9.3.0",
* "react": "^16.13.1",
* "react-dom": "^16.13.1",
* "react-loader-spinner": "^3.1.14",
* "react-modal": "^3.11.2",
* "react-player": "^2.3.1",
* "react-router-dom": "^5.2.0",
* "react-scripts": "^3.4.1",
* "styled-components": "^5.1.0",
* "styled-react-modal": "^2.0.1",

And these dependencies will need to be installed in the oauth-bridge folder:

* "body-parser": "^1.19.0",
* "cookie-session": "^1.4.0",
* "cors": "^2.8.5",
* "dotenv": "^8.2.0",
* "express": "^4.15.4",
* "mongoose": "^5.9.18",
* "passport": "^0.4.1",
* "passport-spotify": "^1.1.0",
* "querystring": "^0.2.0",
* "request": "^2.81.0",

## Spotify
In addition to a Spotify account, the app requires two unique IDs:

`Client ID`
<br>
`Client Secret ID`

Further details are in [the official Spotify documentation](https://developer.spotify.com/documentation/web-api/quick-start/).
<br><br><br>

# OAuth Bridge Template
This service logs in to Spotify and redirects the user to a given frontend application with a valid access_token as a parameter in the url.

## Development Mode
In development mode, it assumes you are running the frontend on localhost:3000, but the server itself will be running on localhost:8888.

In order to start developing, register a Spotify Application here:
https://developer.spotify.com/my-applications

On that page, add http://localhost:8888 as a callback url. (Don't forget to hit save at the bottom of the page!)

Write the below commands in your terminal (replacing XXXX AND YYYY with your acutal client id and secret from the page where you registered your application)

```
export SPOTIFY_CLIENT_ID=XXXX
export SPOTIFY_CLIENT_SECRET=YYYY
npm start
```

Then go to http://localhost:8888/login in your browser. This will initiate the login flow and finally redirect to http://localhost:3000?access_token=ZZZZZ where ZZZZZ is a valid access token that you can use to do operations in the Spotify API.

## Deploying to Production
This template is intended to be deployed on Heroku. After installing the Heroku CLI tools you can run the below commands in the same directory as server.js (replacing abc123, cba456, mybackend and myfrontend with your actual data -- the below example assumes you already have your frontend running on http://myfrontend.herokuapp.com.

```
heroku create mybackend
heroku config:set SPOTIFY_CLIENT_ID=abc123
heroku config:set SPOTIFY_CLIENT_SECRET=cba456
heroku config:set REDIRECT_URI=https://mybackend.herokuapp.com/callback
heroku config:set FRONTEND_URI=https://myfrontend.herokuapp.com
git push heroku master
```

You should now be able to go to http://mybackend.herokuapp.com/login and it will eventually redirect to http://myfrontend.herokuapp.com?access_token=ZZZZZ, where ZZZZZ is a valid access token that you can use to do operations in the Spotify API.
<br><br><br>

# Other Tools Used
* ZenHub
* Figma
* Google Docs
* Discord
<br><br><br>

# License
[MIT License](https://opensource.org/licenses/MIT).
