const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");
const token = "5992399200:AAG4RT6sjz4m5ZeK73R2Sv7lr5tUGXx4wRA";

const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello This is Noti Server");
  console.log("Hello This is Noti Server");
});

bot.setWebHook;

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Received your message");
});

// http listen port 생성 서버 실행
app.listen(8000, () => console.log("Noti - Server is running on port 8000"));
