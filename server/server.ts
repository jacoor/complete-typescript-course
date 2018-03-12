import { findAllCourses } from "./queries/findAllCourses";

import express from "express";
import { Application } from "express-serve-static-core";

// defining express application
const app:Application = express();

// defining routes
app.route("/api/courses").get((req, resp) => {
  findAllCourses().then(results => {
    resp.status(200).json({results});
  });
});

app.listen(8090, () => {
  console.log("Server is running");
});
