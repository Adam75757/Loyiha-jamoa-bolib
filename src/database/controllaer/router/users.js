import express from "express";
import { get, post, put, delete1 } from "../users.js";

let server = express();

server.get("/", get);
server.post("/", post);
server.put("/", put);
server.delete("/", delete1);

export default server;
 