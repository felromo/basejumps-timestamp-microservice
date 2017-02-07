
# TimeStamp Microservice App
Simple TimeStamp Microservice that checks if the get request has either a unix
timestamp or a regural date string. If such case exists return both the Unix 
timestamp and the natural language form of that date, else return null.

## How to use it
Pass in a unix timestamp or a date string ex: "December 15, 2015"
http://app-uri/date
where date is either of the aforementioned options

## Where to use it
Woking Heroku Version: [Link](https://thawing-earth-66663.herokuapp.com/)

## Build it
* Clone the repo
`git clone https://github.com/tyrantwarship/basejumps-timestamp-microservice local-copy`
* Install the dependencies locally 
`npm install`
* Run the development server (nodemon is used to reload the app after changes)
`npm run dev`
* Edit app.js with editor
* Point your browser to localhost:8080 by default
