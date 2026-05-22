# Admin Commands

The game uses the **Cmdr** execution framework. You can open the admin console at any time in-game by pressing `F3`.
You can also add custom commands if you know how it works...

Below is the complete list of administrative commands combined into a single, comprehensive table. Click the section below to expand or collapse the list.

---

<details open>
<summary>📋 All Admin Commands</summary>

| Command | Description | Syntax / Example |
| :--- | :--- | :--- |
| **`AnnouncementClient`** | Make an announcement for a custom player. | `AnnouncementClient [Player] [Message]` |
| **`AnnouncementServer`** | Make an announcement in the current server. | `AnnouncementServer [Message]` |
| **`AnnouncementGlobal`** | Make an announcement in all servers. | `AnnouncementGlobal [Message]` |
| **`Money`** | Add an amount of money to a player. | `Money [Player] [Amount]` |
| **`Currency`** | Add a currency to a custom path. | `Currency [Player] [PathTable] [Value]` <br> *Example:* `Currency Username {"Rebirth"} 1` |
| **`Dice`** | Give an amount of dice to a player! | `Dice [Player] [Name] [Amount]` |
| **`DiceGlobal`** | Give an amount of dice to all players. | `DiceGlobal [Name] [Amount]` |
| **`Item`** | Give an item with an optional mutation to a player. | `Item [Player] [ItemName] [MutationName (Optional)]` <br> *Example:* `Item Username Item A` <br> *With mutation:* `Item Username Item A Gold` |
| **`ItemsGlobal`** | Give an item to every player in the game! | `ItemsGlobal [ItemName] [MutationName (Optional)]` |
| **`Event`** | Start a mutation event. | `Event [EventName]` |
| **`EventGlobal`** | Start a mutation event in all servers. | `EventGlobal [EventName]` |
| **`Gamepass`** | Add a gamepass to a player. | `Gamepass [Player] [GamepassName]` |
| **`Products`** | Add a product to a player. | `Products [Player] [ProductName]` |
| **`Ban`** | Ban a player. | `Ban [Player] [Duration] [Reason]` |
| **`BanId`** | Ban a player using their User ID. | `BanId [UserId] [Duration] [Reason]` |
| **`UnbanId`** | Unban a player using their User ID. | `UnbanId [UserId]` |
| **`ResetData`** | Reset your data. | `ResetData` |
| **`RefreshBase`** | Command created just for the development of the game to reload your base when making the base system. | `RefreshBase` |

::: warning Rejoin Required
Rejoin after using `ResetData` to make sure everything resynces properly.
:::

</details>

---

::: tip Auto-Completion
Don't forget that **Cmdr** features full auto-completion! When typing out item names, player usernames, or mutation styles, press `Tab` or look at the command suggestions right above your input line to prevent typos.
:::