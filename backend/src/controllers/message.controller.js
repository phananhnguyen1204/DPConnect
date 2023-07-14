export const sendMessage = async (req, res, next) => {
  try {
    res.send("send message");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    res.send("get messages");
  } catch (error) {
    next(error);
  }
};
