const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 8090;
const bookTransformer = require("./helpers/bookTransformer");

//Middleware
app.use(express.json()); //for parsing application/json
app.use(cors()); //for configuring Cross-Origin Resource Sharing (CORS)

function log(req, res, next) {
    console.log(req.method + " Request at" + req.url);
    next();
}
app.use(log);


//Endpoints
app.get("/subjects/:subject", function (req, res) {
    let works;
    let books = [];
    console.log(req.params);
    axios.get(`http://openlibrary.org/subjects/${req.params.subject}.json?limit=100`)
        .then((resp) => {
            works = resp.data.works;

            return axios.all(works.map((tmp) => axios.get(`http://openlibrary.org${tmp.key}.json`)
            ))
        })
        .then(axios.spread((...resp) => {
            works.forEach((work, i) => {
                console.log(resp[i].data.description);
                let book = bookTransformer(work.title, resp[i].data.description, work.authors, work.cover_id, work.subject);
                books.push(book);
            });
        }))
        .then(() => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(books));
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({
                state: false,
                data: {},
                errorMsg: "Oops. Something went wrong here"
            })
        })
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));