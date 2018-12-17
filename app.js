var http = require("http")
var path = require("path")
var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

var app = express()

app.set("views", path.resolve(__dirname, "views"))
app.set("view engine", "ejs")

var entries = []
app.locals.entries = entries ;

app.use(logger("dev"))

app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
 Response.render("index")
})

app.get("/new-entry", (req, res) => {
 Response.render("new-entry")
})

app.post("")