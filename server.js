const express = require("express");
const app = express();
const path=require("path")
// const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.json());

app.use(cors());
// app.use("/api/v1", routes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const start = async () => {
  try {
    // await connectDB(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();