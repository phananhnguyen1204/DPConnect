import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import { searchUsers as searchUsersService } from "../services/user.service.js";

export const searchUsers = async (req, res, next) => {
  try {
    const keyword = req.query.search;
    if (!keyword) {
      logger.error("Please add a search term first");
      throw createHttpError.BadRequest("Please add a search term first");
    }
    const users = await searchUsersService(keyword);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
