import createHttpError from "http-errors";
import validator from "validator";
import { UserModel } from "../models/index.js";

//env variables
const { DEFAULT_PICTURE, DEFAULT_STATUS } = process.env;

export const createUser = async (userData) => {
  const { name, email, picture, status, password } = userData;

  //check if fields are empty
  if (!name || !email || !password) {
    throw createHttpError.BadRequest("Please fill all fields");
  }

  //check name length
  if (
    !validator.isLength(name, {
      min: 2,
      max: 16,
    })
  ) {
    throw createHttpError.BadRequest(
      "Please make sure your name is between 2 and 16 characters."
    );
  }

  //Check status length
  if (status) {
    if (status.length > 64) {
      throw createHttpError.BadRequest(
        "Please make sure your status is less than 64 characters."
      );
    }
  }

  //Check email is valid
  if (!validator.isEmail(email)) {
    throw createHttpError.BadRequest("Please provide valid email address");
  }

  //check if user already exist
  const checkDb = await UserModel.findOne({ email });
  if (checkDb) {
    throw createHttpError.BadRequest(
      "Please try again with different email address, this email is already exists"
    );
  }

  //check password length
  if (
    !validator.isLength(password, {
      min: 6,
      max: 128,
    })
  ) {
    throw createHttpError.BadRequest(
      "Please make sure your password is between 6 and 128 characters"
    );
  }
  //hash password ---> to be done in the user model

  //ADDING user to database

  const user = await new UserModel({
    name,
    email,
    password,
    status: status || DEFAULT_STATUS,
    picture: picture || DEFAULT_PICTURE,
  }).save();
  return user;
};
