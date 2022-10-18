// IMPORT PATH
const path = require("path");

// IMPORT EXPRESS
const express = require("express");

// IMPORT MORGAN TO LOG REQUEST AND RESPONSE
const morgan = require("morgan");

// IMPORT FAVICON
const favicon = require("serve-favicon");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const userRouter = require("./routes/api/users");

dotenv.config();

// const DB = mongoose
//   .connect(
//     process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD),
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("DB CONNECTION SUCCESSFUL!");
//   });

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// app.use("/api/users", userRouter);                


// ♾️♾️♾️ ROUTES

app.all("*", (req, res) => {
  res.send("Undefined route");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
