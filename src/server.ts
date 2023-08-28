import express from 'express';
import client from "../database"
import router from './routes/noteRouter';
const app = express();
app.use(express.json());

app.use("/api", router);

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});