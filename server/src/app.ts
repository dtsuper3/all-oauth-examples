import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => res.send("Server is running"));
app.use(router);

app.listen(port, () => {
    console.log("server is running.");
});