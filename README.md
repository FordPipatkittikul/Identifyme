# Identifyme

## link for website
link: https://fordpipatkittikul.github.io/Identifyme/

## Overview
Identifyme is a full-stack web application that allows user to input imageURL and it will locate face location & show top 4 recognition of that image. It will increment your rank each time you input image so Let's go!!!!.
face-detection frontend handles Imagelink, calculate face location, display top 4 recognition of image with a clean User Interface and API integration with the backend.
Data that used to calculate face location & top 4 recognition is done in the backend is being done by using **clarifai api** [face detection model](https://clarifai.com/clarifai/main/models/face-detection) and [general image recognition](https://clarifai.com/clarifai/main/models/general-image-recognition). **Big thanks to clarifai api**.

**Frontend code: this repository.**

**Backend & database code: https://github.com/FordPipatkittikul/face-detection-server.**

**Backend server & database are currently run by render. unfortunately, render only give us 90 days for database so It will expire soon.** 

**Date expires for render's database: (06/25/2024)**

## Tech stack
Front-end: React.js

backend: node.js & express.js

database: postgresql

Deployment : Github pages for frontend & render for backend & database.

## Project design
**The backend** is express.js app coordinated by `server.js` file. server.js file initiates the backend server and hold endpoints. ALL of secure information is in `.env` file such as PAT, USERID which I'm using gitignore so no one can access that informaiton except myself. The endpoints for managing ImageRecognition, faceDetection and increment rank is in `image.js` file, for signin is in `signin.js` file, for register is in `register.js`.
file. `database.js` is where I connect to render's database.

**Databse** is postseqerl which is relational database. I have two tables for my database which is **login** and **users**. 

**All `users` column and their data type**

ID serial PRIMARY KEY

name VARCHAR(100) 

email text UNIQUE NOT NULL

entries BIGINT DEFAULT 0

joined TIMESTAMP NOT NULL

**All `login` column and their data type**

ID serial PRIMARY KEY 

hash VARCHAR (100) NOT NULL 

email text UNIQUE NOT NULL 

**The frontend** is a React app with tachyons css & scss. `index.js` is a big parent to all the file. Using if-else conditions to go different page which is signin, register, home, signout. Every directory's name in component directory is self's explanation. `App.js` is where it contains all the functionality of the app such as onFaceDetectionButtonSubmit function that call api backend for update ranking and displays box on face in the picture, onImageRecognitionButtonSubmit for update ranking and displays top 4 recognition for specific image and onRouteChange for user to switching pages.


## Set up
1) command: `npm install` for both repo.
2) command: `npm start` for both repo.


## Helpful website, tools and npm package

**How to deploy react app on github pages**: https://create-react-app.dev/docs/deployment/#github-pages

**ChatGpt and github copilot for debugging**

**clarifai API doc**: [https://docs.clarifai.com/api-guide/api-overview/](https://docs.clarifai.com/api-guide/predict/images)https://docs.clarifai.com/api-guide/predict/images

**favicorn generator**: https://favicon.io/

**particles-bg for cool background**: https://www.npmjs.com/package/particles-bg

**react-parallax-tilt for movement components**: https://www.npmjs.com/package/react-parallax-tilt

**tachyons for css property**: https://tachyons.io/docs/table-of-styles/

**knex.js for connecting to my database**: https://knexjs.org/guide/

**dotenv for loads environment variables from a .env file to secure my information**: https://www.npmjs.com/package/dotenv?activeTab=readme

**bcrypt-nodejs for hashing user password** : https://www.npmjs.com/package/bcrypt-nodejs

