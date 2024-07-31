const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");
const { NewMessage } = require("telegram/events");
const { Client, GatewayIntentBits } = require("discord.js");
const intents = [GatewayIntentBits.Guilds];
const discord_clinet = new Client({ intents });
require("dotenv").config();
const apiId = 5;
const discord_bot_token = process.env.discord_bot_token;
const apiHash = process.env.telegram_app_hash;
const stringSession = new StringSession(`${process.env.telegram_session}`); // fill this later with the value from session.save()

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  console.log("You should now be connected.");
  discord_clinet.login(discord_bot_token);
  discord_clinet.on("ready", async () => {
    console.log(`Logged in as ${discord_clinet.user.tag}!`);
  });
  console.log(client.session.save()); // Save this string to avoid logging in again
  client.addEventHandler(async (event) => {
    const message = event.message;
    const telegram_chat_id = process.env.telegram_channel_ids;
    if (message.isChannel && telegram_chat_id.includes(message.chatId.value)) {
      if (message.media) {
        // Handle media messages

        //get the caption of media
        const caption = message.message;
        const media = await client.downloadMedia(message.media, {
          workers: 1,
        });
        const channel = discord_clinet.channels.cache.get(
          `${process.env.discord_channel_id}`
        );
        await channel.send({
          content: `${caption}\n⁣`,
          files: [{ attachment: media }],
        });
      } else {
        // Handle text messages
        const text = message.message;
        // Here, you can save or forward the text message
        const channel = discord_clinet.channels.cache.get(
          process.env.discord_channel_id
        );
        await sendTextMessage(channel, text);
      }
    }
  }, new NewMessage({}));

  console.log("Listening for new messages...");
})();

// Function to send text message
const sendTextMessage = async (channel, message) => {
  try {
    await channel.send(message);
  } catch (error) {
    console.error(`Error sending text message: ${error}`);
  }
};
