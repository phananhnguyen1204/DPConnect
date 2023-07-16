export default function (socket) {
  //user joins or opens the appication
  //user is user_id
  //user is the person we are gonna talked to
  socket.on("join", (user) => {
    console.log("user has joined: ", user);
    socket.join(user);
  });

  //join a conversation room
  socket.on("join conversation", (conversation) => {
    socket.join(conversation);
    console.log("user has joined conversation: ", conversation);
  });

  //send and receive message
  socket.on("send message", (message) => {
    let conversation = message.conversation;
    if (!conversation.users) return;
    conversation.users.forEach((user) => {
      if (user._id === message.sender._id) return;
      socket.in(user._id).emit("receive message", message);
    });
  });
}
