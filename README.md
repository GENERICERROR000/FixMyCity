***
***

# TODO

## QUESTIONS

* For ENV vars stored in .bash_profile, what do when on Heroku/AWS?

## Implement

1. ~~Redux~~
2. ~~Node~~
  * ~~JWT for API~~
  * ~~Auth for User~~
3. ~~Implement JWT and Auth for client~~
4. ~~React-Router (make sure working with Redux)~~
5. ~~Make sure Async fetch works with React-Router and Redux~~
  * ~~Redux-Thunk~~
6. Material-UI
  * Create Custom Theme for App

## Logic

1. Create issue for Issue, before persist to DB (parse body content)
2. Increase number of hits for specific Issue
3. Create array of Twitter users who submit same issue (after first submission of issue)

## Features

1. Live feed of Tweets
2. Maps Maps Maps

## STRETCH
  1. Server Side Routing (Branch: "ssr")
    * (https://github.com/kireerik/razzle-material-ui-styled-example/tree/298fa531d11dc5569b42b8629d84a56ab78d358e)
    * (https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/)
    * (https://www.codementor.io/mz026/server-side-rendering-with-redux-and-react-router-8s8en3o7p)
    * (https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md)

***
***

# FIX MY CITY

An app integrated with Twitter to allow citizens to report damage in their city.

## User Story

Fix my city is an app for government employees to use to track and assign damage reported around a given city. Damage is reported via Twitter by everyday citizens. The goal is to encourage people to be active in maintaining their cities and communities.

### Government Employee

Government employees will be the main user of the app.

### Citizen

Will need standard format for posts:
  * Image (not required)
  * Body Content
    * What needs repair
    * Severity ratingß

## Design

  * [Wireframes](https://www.fluidui.com/editor/live/)
  * [Color Palette](https://coolors.co/f5f5f5-dbdbdb-5595cd-f7af8a-ffd08d)
  * [Inspiration](https://c2.staticflickr.com/4/3485/3761059311_68f6ba825c_b.jpg)


## Entity Relationship Diagram

![ERD](./ERD.jpg)

## Technology/Libraries Used

_Server (will be doing server-side routing)_

  1. Server Packages
    * Node.js
    * Express
    * MongoDB
    * Mongoose
  2. Packeges
    * Twitter API ([twit](https://github.com/ttezel/twit))
    * Google Maps API ([google-map-react](https://www.npmjs.com/package/google-map-react))
