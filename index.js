import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import router from "./router.js";

const PORT = 4000;
const DB_URL =
  "mongodb+srv://user:123@cluster0.jkoxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
