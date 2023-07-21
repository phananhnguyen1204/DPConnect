import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import {
  createConversation,
  doesConversationExist,
  getUserConversations,
  populateConversation,
} from "../services/conversation.service.js";
import { findUser } from "../services/user.service.js";

export const create_open_conversation = async (req, res, next) => {
  try {
    const sender_id = req.user.userId;
    //id we want to add conversation to
    const { receiver_id } = req.body;
    //check if receiver_id is provided
    if (!receiver_id) {
      logger.error(
        "please provide the user id you wanna start a conversation with"
      );
      throw createHttpError.BadGateway("Something went wrong!");
    }
    //check if chat exists
    const existed_conversation = await doesConversationExist(
      sender_id,
      receiver_id
    );
    //conversation does exist
    if (existed_conversation) {
      res.json(existed_conversation);
    } else {
      //create conversation because it does not exist
      // res.send("We need to create a new conversation");
      // let receiver_user = await findUser(receiver_id);
      let convodata = {
        //the person you will have conversation with
        name: "conversation name",
        picture: "conversation picture",
        isGroup: false,
        users: [sender_id, receiver_id],
      };
      const newConvo = await createConversation(convodata);
      // res.json(newConvo);
      //populate user to get all the information about user
      const populatedConvo = await populateConversation(
        newConvo._id,
        "users",
        "-password"
      );
      res.status(200).json(populatedConvo);
    }
  } catch (error) {
    next(error);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const user_id = req.user.userId;
    const conversations = await getUserConversations(user_id);
    res.status(200).json(conversations);
  } catch (error) {
    next(error);
  }
};

export const createGroup = async (req, res, next) => {
  const { name, users } = req.body;
  //add current user to users
  users.push(req.user.userId);
  if (!name || !users) {
    throw createHttpError.BadRequest("Please fill all fields");
  }
  if (users.length < 2) {
    throw createHttpError.BadRequest(
      "Atleaset 2 users are required to start a group chat"
    );
  }

  let convoData = {
    name,
    users,
    isGroup: true,
    admin: req.user.userId,
    picture: process.env.DEFAULT_GROUP_PICTURE,
  };
  try {
    const newConvo = await createConversation(convoData);
    const populatedConvo = await populateConversation(
      newConvo._id,
      "users admin",
      "-password"
    );
    console.log(populatedConvo);
    res.status(200).json(populatedConvo);
  } catch (error) {
    next(error);
  }
};
