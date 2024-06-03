import { createServer } from "http";
import { Server } from "socket.io";
const socketServer = createServer();
const io = new Server(socketServer, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "https://665d6deb82d8ef6a16759e52--neon-griffin-df7db4.netlify.app"
    ],
    allowedHeaders: ["GET", "POST"],
  },
});

const port = 5050;

const rooms = {};

// socket.handshake.address production
// socket.handshake.headers.origin development
io.on("connection", (socket) => {
  console.log("User connected");
  socket.join(socket.handshake.headers.origin);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("isThereSomeOneInTheRoom", (exercise) => {
    let type;
    if (
      !Object.keys(rooms).length ||
      rooms[socket.handshake.headers.origin] === "teacher"||
      rooms[socket.handshake.address]==="teacher"
    ) {
      type = "teacher";
    } else {
      type = "student";
    }
    socket.join(type);
    rooms[socket.handshake.headers.origin] = type;
    rooms[socket.handshake.address]===type
    socket.emit("userType", type);
  });
  socket.on("changeInCode", (obj) => {
    socket.to("teacher").emit("receiveCode", obj);
  });
  socket.on("model", (obj) => {
    console.log("🚀 ~ socket.on ~ obj:", obj);
    socket.to("teacher").emit("model", obj);
  });
});

socketServer.listen(port, () => {
  (`Socket.IO server listening on port ${port}`);
});

export default socketServer;
