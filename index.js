const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");
const token = "5992399200:AAG4RT6sjz4m5ZeK73R2Sv7lr5tUGXx4wRA";

const bot = new TelegramBot(token, { polling: true });
let chatIds = new Set();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hello This is Noti Server");
  res.send("Hello This is Noti Server");
});

app.post("/comment", (req, res) => {
  console.log("Received a webhook from Figma:", req.body);
  chatIds.forEach((chatId) => {
    bot.sendMessage(chatId, "Received a webhook from Figma");
  });
  res.status(200).send("Received");
});

bot.on("message", (msg) => {
  if (msg.text.toString().toLowerCase() === "/start") {
    console.log("Received /start command from chat ID:", msg.chat.id);
    chatIds.add(msg.chat.id); // Add the chat ID to the Set
  }
});

app.listen(8000, () => console.log("Noti - Server is running on port 8000"));
