import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

export default async function (req, res, next) {
  if (!req.headers["authorization"])
    return next(createHttpError.Unauthorized());
  const bearerToken = req.headers["authorization"];
  const token = bearerToken.split(" ")[1];
  //check if the access token is valid, or expired
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return next(createHttpError.Unauthorized());
    }
    //add user property to user
    req.user = payload;
    next();
  });
}
