const express = require("express"); //server framework for server setting & config
const bodyParser =  require("body-parser"); //for parsing the request (API calls from client side)
const cors = require("cors"); //for defining, which domain configuration calls to our server (cross origin resource sharing)

const db = require('./db');

const app = express();
const productRouter = require("./routes/productRouter");

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Food Ordering!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/', productRouter);