# Bot Battlr - React Web App

## Project Setup

Follow these steps to set up the project:
1. **Install dependencies:**

   Before starting, ensure you have Node.js and npm installed on your local machine.

   ```bash
   npm install

2. Run this command to get the backend started: 

   ```bash
   json-server --watch db.json

3. Test your server by visiting this route in the browser: `http://localhost:3000/bots`

## Project Features

As a user, you can:

1. **View Bot Profiles**: See profiles of all bots rendered in `BotCollection`.

2. **Enlist Bots**: Add an individual bot to your army by clicking on it. The selected bot will render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.

3. **Release Bots**: Release a bot from your army by clicking on it. The bot disappears from the `YourBotArmy` component.

4. **Discharge Bots**: Discharge a bot from their service forever by clicking the red button marked "x," which deletes the bot both from the backend and from the `YourBotArmy` on the frontend.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

## Author

- **Patience Mugambi**
- LinkedIn: [Patience Mugambi](https://www.linkedin.com/feed/)
