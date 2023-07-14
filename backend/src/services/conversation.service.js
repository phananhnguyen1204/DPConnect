import createHttpError from "http-errors";
import { ConversationModel, UserModel } from "../models/index.js";

export const doesConversationExist = async (sender_id, receiver_id) => {
  //an array
  let convos = await ConversationModel.find({
    //in order to  be a conversation between two
    //1. it has to be not grouped
    isGroup: false,
    //sender_id and receiver_id need to be matched
    $and: [
      { users: { $elemMatch: { $eq: sender_id } } },
      { users: { $elemMatch: { $eq: receiver_id } } },
    ],
    //copy the users but not password
  })
    .populate("users", "-password")
    .populate("lastestMessage");
  if (!convos) {
    throw createHttpError.BadRequest("Oops... Something went wrong!");
  }

  //populate message model

  convos = await UserModel.populate(convos, {
    path: "latestMessage.sender",
    select: "name email picture status",
  });
  //return the first conversation exists
  return convos[0];
};

export const createConversation = async (data) => {
  const newConvo = await ConversationModel.create(data);
  //if something went wrong
  if (!newConvo) {
    throw createHttpError.BadRequest("Oops... Something went wrong!");
  }
  return newConvo;
};

export const populateConversation = async (
  id,
  fieldToPopulate,
  fieldsToRemove
) => {
  const populatedConvo = await ConversationModel.findOne({ _id: id })?.populate(
    fieldToPopulate,
    fieldsToRemove
  );
  if (!populatedConvo)
    throw createHttpError.BadRequest("Oops... Something went wrong!");
  return populatedConvo;
};
