// Calling all required dependencies
const express = require("express");
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 7070;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
app.use(express.static(process.cwd() + '/public'));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
