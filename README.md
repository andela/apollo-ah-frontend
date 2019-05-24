[![CircleCI](https://circleci.com/gh/andela/apollo-ah-frontend/tree/staging.svg?style=svg)](https://circleci.com/gh/andela/apollo-ah-frontend/tree/staging)  [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6097e61ece735ce73806/test_coverage)](https://codeclimate.com/github/andela/apollo-ah-frontend/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/6097e61ece735ce73806/maintainability)](https://codeclimate.com/github/andela/apollo-ah-frontend/maintainability)

Authors Haven - A Social platform for the creative at heart.
=======

## Vision
Create a community of like minded authors to foster inspiration and innovation
by leveraging the modern web.

## Application Overview
The purpose of my new project which is Authors Haven is to align like-minded authors to foster inspiration and innovation. This product provides an avenue where authors can share their ideas and other authors and readers benefits from it. 

Authors Haven is a platform where writers can share their outlook on the day to day happenings either past or present, a platform to share hard-earned experience, knowledge about how to do something better. A place to share stories that make people laugh, smile, or feel something meaningful.

## Application Features
- [x] Users can see a landing page
- [x] Users should be able to login to the application
- [x] Users should be able to sign up to the application
- [x] Users should be able to login and signup with social authentication
- [x] Users should be able to reset a forgotten password
- [x] Users should be able to create an article
- [x] Users should be able to get a single article
- [x] Users should be able to get and update their profile
- [x] Users should be able to bookmark articles for later
- [x] Users should be able to see a list of bookmarked articles
- [x] Users should be able to see logistics of their articles
- [x] Users can follow and unfollow an author
- [x] Users can clap on article.
- [x] Users can comment on an article.
- [x] Users should be redirected to a 404 page if route does not exist
- [x] Users can search and filter through the application


## Setup
> Step by step instructions on how to get the code setup locally.

- If you don't have ```node.js``` installed, please follow this link to [download Node.js](https://nodejs.org/en/), the minimum version is `v11.9.0`

- Open the `terminal` or `cmd`
- Clone the repository

```
git clone https://github.com/andela/apollo-ah-frontend.git `folder-name`. 
```

- You only append `folder-name` if you wish to download the product in a named folder of your choice.

- Cd into directory of the project folder.

- Then run

```
npm install
```

> A few things to note before running the app.

- You need  ```.env``` file.  for environment variables  eg: ```API_BASE_URL=http://localhost:Your_PORT/api/v1``` see the .env.example in the root project directory for environment variables that are required.

- Start the app with

```
npm run start:dev
```

### Technologies and Tools/Dependencies

- [Nodejs](https://nodejs.org/en/)
- [Babel](https://babeljs.io) - Javascript Transpiler/Compiler.
- [Eslint](https://eslint.org/) 
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style [guide](https://github.com/airbnb/javascript)

### Testing the application

Running unit tests.
* In a terminal/cmd, `cd` to the cloned project folder.
* Run `npm test`, for the tests.

### Testing tools

- [Jest](https://jestjs.io/) - A test framework.
- [Circle CI](https://circleci.com/) - Continuous integration.
- [Code Climate](https://codeclimate.com) - code test coverage tool.

> Find other Technologies and Tools/Dependencies in the `package.json file`.

## Deployment
[Authors Haven](https://authors-haven-app.herokuapp.com)

## License
This project is licensed under the [` MIT License`](https://opensource.org/licenses/MIT)

## Acknowledgments
Regards to the AndelaNG team for making this a reality for us - Apollo-Ah simulation team
