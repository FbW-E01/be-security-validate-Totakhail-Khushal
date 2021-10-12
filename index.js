import express from "express";
// import data from './validators/data.js'
import parrotValidators from "./validators/validateData.js";
import { validationResult } from "express-validator";
import cors from "cors";

const server = express();
server.use(express.json());

server.use(cors());

server.use((req, res, next) => {
  console.log(`[Req] ${req.method} ${req.url}`);
  next();
});
const birds = [];
server.post("/data", parrotValidators, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400);
    res.json({
      errors: result.errors,
      // errors:result.errors.map(e => e.msg)
    });
    return;
  }

  res.json(req.body);
  birds.push(req.body);
  console.log(req.body);
});

server.get("/data", parrotValidators, (req, res) => {
  res.json(birds);
});

server.listen(8080, () => {
  console.log("listening to http:localhost:8080");
});
