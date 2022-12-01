const express = require("express");
const app = express();
const path = require("path");
const alumniRouter = require("./routes/alumniRoutes");

require("dotenv").config();
app.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 5000;
const cors = require("cors");
const connectDB = require("./db/connect");
app.use(express.json());

app.use(cors());

// route handler
app.use("/api/v1/alumni", alumniRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    await connectDB(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
