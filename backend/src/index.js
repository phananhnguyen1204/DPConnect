import mongoose from "mongoose";
import app from "./app.js";
import logger from "./configs/logger.config.js";

//env variables
const PORT = process.env.PORT || 8000;
const { DATABASE_URL } = process.env;
// console.log(process.env.NODE_ENV);

//exitt on mongodb error
mongoose.connection.on("error", (error) => {
  logger.error(`MongoDB connection error: ${error}`);
  //close the server
  process.exit(1);
});

//mongodb debug mode
if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

//mongodb connection
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB");
  });

let server;
server = app.listen(PORT, () => {
  logger.info(`Server is listening at ${PORT}...`);
});

const exitHandler = () => {
  if (server) {
    logger.info("server closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandleRejection", unexpectedErrorHandler);

//SIGTERM
process.on("SIGTERM", () => {
  if (server) {
    logger.info("server closed.");
    process.exit(1);
  }
});
