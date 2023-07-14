import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import {
  createConversation,
  doesConversationExist,
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
      let receiver_user = await findUser(receiver_id);
      let convodata = {
        //the person you will have conversation with
        name: receiver_user.name,
        isGroup: false,
        users: [sender_id, receiver_id],
      };
      const newConvo = await createConversation(convodata);
      // res.json(newConvo);
      //populate user to get all the information about user
      const populatedConvo = await populateConversation(
        newConvo._id,
        "user",
        "-password"
      );
      res.status(200).json(populatedConvo);
    }
  } catch (error) {
    next(error);
  }
};
