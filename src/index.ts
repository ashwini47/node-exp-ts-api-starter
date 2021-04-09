import {config} from "./env/dev.env";
import express from "express";
import path from "path";
import {mongo} from "./DB/mongo-connect"
import { User, IUser } from "./server/model/user";
import { Task, ITask } from "./server/model/task";
import { model, Schema, Model, Document } from "mongoose";
const app = express();
mongo.mongooseConnect(config.MONGO_DB_CONN_STR);

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      message: "API HOME",
      localTime: new Date().toLocaleString(),
    })
  );
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(`Request Processed URL ${fullUrl}`);
});
app.get("/customers", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send("Customers API");
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(`Request Processed URL ${fullUrl}`);
});

// start the Express server
app.listen(config.API_PORT, () => {
  console.log(`server started at http://localhost:${config.API_PORT}`);
});
