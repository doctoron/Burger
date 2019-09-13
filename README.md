# Burger
### Overview
Burger logger with MySQL, Node, Express, Handlebars and a homemade Object Relational Mapper (ORM) using the Model, View, Controller (MVC) design pattern.  MySQL is used to query and route data in this app and Handlebars are utilized to generate the HTML.
https://mysterious-thicket-47007.herokuapp.com/

- - -

### Directory Structure & File Setup
1. At the root of the burger $ prompt:
touch server.js && mkdir config controllers db models public views && cd config && touch connection.js orm.js && cd ../controllers && touch burgers_controller.js && cd ../db && touch schema.sql seeds.sql && cd ../models && touch burger.js && cd ../public && mkdir assets && cd assets && mkdir css img && cd css && touch burger_style.css && cd ../../../views && mkdir layouts && touch index.handlebards && cd layouts && touch main.handlebars && cd ../../

2. Next run npm init -y to create package.json

3. Run npm i express express-handlebars mysql

Versions utilized:
Node-js v10.15.2  
Node-Express 4.16.4
Heroku/7.22.4 darwin-x64 node-v11.10.1


### Running Locally:
* Make sure you have Node.js and Heroku installed.
* Use git clone https://github.com/doctoron/burger or clone your own fork
* cd burger
* npm install
* npm start
* Your app should now be running on localhost:8080.

### Deploying to Heroku
## Be sure to create a .gitignore file in the root folder and add node_modules before continuing.
    * From the bash terminal:
    `$ heroku create (connects your repo with Heroku)`
    * Navigate to www.heroku.com and login with your credentials.
    * Find your Heroku app's name in the dashboard and click on it.
    * Make sure you select the free option, then click the Provision button, then:
    `$ git push heroku master`
    `$ heroku open`
    * Note that if the app doesn't come up, you should proceed to troubleshooting: 
    
https://devcenter.heroku.com/articles/troubleshooting-node-deploys#check-your-buildpack


## This app suits the following basic specifications:
    * The `server.js` file requires the express and path npm packages.
    

### Hosting on Heroku
https://[replace-with-heroku-heroku-12345.herokuapp.com/]
PORT = process.env.PORT || 8080;

### README.md
This `README.md` was created in compliance with the project spec and deployed to my repository as described. 

## BCS Submission
* The Heroku-deployed and Github links were supplied on the BCS hub.
* A link to the Github Repository was provided here `https://github.com/doctoron/Burger.git`

### Add To Your Portfolio
This project piece was added to https://doctoron.github.io/Bootstrap-Portfolio/ as specified.
