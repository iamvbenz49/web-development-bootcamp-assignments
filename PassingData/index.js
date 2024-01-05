import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({ extended: true }));
let length = 0;
app.get("/", (req, res) => {
  res.render("index")
});

app.post("/submit", (req, res) => {
  const length = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{l:length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
