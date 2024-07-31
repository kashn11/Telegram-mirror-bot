# Telegram to Discord Mirror Bot

This Node.js bot mirrors messages from a specified Telegram channel to a Discord channel. It facilitates real-time synchronization of conversations between these platforms, ensuring that users can stay updated across both.

## Features

- Mirrors text and media messages from Telegram to Discord.
- Supports real-time updates.
- Handles Telegram channels and Discord servers seamlessly.

## Prerequisites

- Node.js and npm installed
- Telegram API credentials (API ID, API Hash)
- Discord Bot Token
- Environment variables for configuration

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/telegram-discord-mirror-bot.git
   cd telegram-discord-mirror-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   telegram_session=<YOUR_TELEGRAM_SESSION_STRING>
   telegram_app_hash=<YOUR_TELEGRAM_API_HASH>
   telegram_channel_ids=<YOUR_TELEGRAM_CHANNEL_IDS>
   discord_bot_token=<YOUR_DISCORD_BOT_TOKEN>
   discord_channel_id=<YOUR_DISCORD_CHANNEL_ID>
   ```

   - `telegram_session`: The session string for your Telegram client.
   - `telegram_app_hash`: The API hash for your Telegram app.
   - `telegram_channel_ids`: A comma-separated list of Telegram channel IDs to mirror.
   - `discord_bot_token`: The token for your Discord bot.
   - `discord_channel_id`: The Discord channel ID where messages will be mirrored.

## Usage

1. Start the bot:
   ```bash
   node bot.js
   ```

2. Follow the prompts to log in to your Telegram account. The bot will start mirroring messages after a successful login.

## Contributing

Feel free to open issues or submit pull requests for new features, bug fixes, or improvements.

## License

This project is licensed under the MIT License.
