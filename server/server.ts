import { findAllCourses } from "./queries/findAllCourses";

import express from "express";
import { Application } from "express-serve-static-core";
import { initRestApi } from "./api/api";
import { apiErrorHandler } from "./api/apiErrorHandler";

// defining express application
const app: Application = express();

initRestApi(app);

// handling errors using middleware
// note: this will not catch error from promise,
// ie. from apiGetAllCourses promise
app.use(apiErrorHandler);

app.listen(8090, () => {
  console.log("Server is running");
});
