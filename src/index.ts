import { config } from "./env/dev.env";
import express from "express";
import path from "path";
import { mongo } from "./DB/mongo-connect";
//import { User, IUser } from "./server/model/user";
//import { Task, ITask } from "./server/model/task";
//import { model, Schema, Model, Document } from "mongoose";
import router from "./server/routes/healthcheck";
import consoleLogger from "./server/logger/console-logger";
import userRouter from "./server/routes/user-routers"
import taskRoutes from './server/routes/task-routes';
const app = express();

mongo.mongooseConnect(config.MONGO_DB_CONN_STR);

if (config.NODE_ENV === "DEV") {
  console.log(`Loading Application in DEV mode`);
  app.use(consoleLogger);
}

//https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.get("/", (req, res) => {
  res.redirect(301, "/api");
});

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ message: "Welcome to API Home", "health-check": "/api/status" });
});

app.use("/api", router);



app.use("/api/users", userRouter);


router.use('/tasks', taskRoutes);
// start the Express server
app.listen(config.API_PORT, () => {
  console.log(`server started at http://localhost:${config.API_PORT}`);
});
