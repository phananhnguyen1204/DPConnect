import app from "./app.js";
import logger from "./configs/logger.config.js";

//env variables
const PORT = process.env.PORT || 8000;
// console.log(process.env.NODE_ENV);

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
