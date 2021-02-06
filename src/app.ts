import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";
import * as methodOverride from "method-override";
import * as errorHandler from "errorHandler";
import { AddressInfo } from "net";
import router from "./routes";

const app = express();

const isProduction = process.env.NODE_ENV === "production";

app.use(cors());

if (!isProduction) {
  app.use(errorHandler());
}

app.use(logger("dev"));
app.use(express.json());
app.use(methodOverride());
app.use(express.static(__dirname + "/public"));
app.use(router);

/// catch 404 and forward to error handler
app.use(function (_request, _response, next) {
  const error = new Error("Not Found");
  error["status"] = 404;
  next(error);
});

// let's start our server...
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + (server.address() as AddressInfo).port);
});
