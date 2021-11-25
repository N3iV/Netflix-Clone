const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./Routes/Auth");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Connec DB successfull"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8000, () => {
  console.log("backend is running");
});
