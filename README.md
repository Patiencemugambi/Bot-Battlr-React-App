# Bot Battlr - React Web App

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is an interactive React web application that allows users to browse a list of available bots, view their details, enlist them into their army, and release them as needed.

## Project Setup

Follow these steps to set up the project:

1. Create a new project folder.
2. Create a new GitHub repository.
3. Add your TM as a contributor to the project. (This is only for grading purposes. I promise not to steal your code).
4. Please make sure you regularly commit to the repository.
5. In your project directory, create a `db.json` file and use this dataLinks to an external site. for your server DB.
6. Run this command to get the backend started: `json-server --watch db.json`
7. Test your server by visiting this route in the browser: `http://localhost:8001/bots`

## Project Features

As a user, you can:

1. **View Bot Profiles**: See profiles of all bots rendered in `BotCollection`.

2. **Enlist Bots**: Add an individual bot to your army by clicking on it. The selected bot will render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.

3. **Release Bots**: Release a bot from your army by clicking on it. The bot disappears from the `YourBotArmy` component.

4. **Discharge Bots**: Discharge a bot from their service forever by clicking the red button marked "x," which deletes the bot both from the backend and from the `YourBotArmy` on the frontend.

## Advanced Deliverables

As a user, you should be able to:

- Choose if you want to enlist a bot into your army or just see their data. Clicking on the card should instead display a show view (`BotSpecs`) for that bot, which should replace `BotCollection`. `BotSpecs` should have two buttons: one to go back to the list view and another to enlist that bot.

- Sort bots by their health, damage, or armor. For this, create a new component, `SortBar`.

- When you enlist a bot, it will be **removed** from the `BotCollection` and added to `YourBotArmy`.

- Filter bots by their class. You can select multiple filters at the same time.

- Only enlist **one** bot from each `bot_class`. The classes are `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

## Author

- **Patience Mugambi**
- LinkedIn: [Patience Mugambi](https://www.linkedin.com/feed/)
