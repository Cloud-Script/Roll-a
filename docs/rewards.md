# Rewards Configuration

To make the game highly scalable, the template uses a centralized **Rewards** system. This structure is used across multiple modules, including Products, Gamepasses, and Events.

---

### Available Reward Types & Specifics
These are the default registered reward keys you can use, along with their unique parameters:

* `DICE`: Grants a specific dice to the player.
* `MONEY`: Directly adds standard currency.
* `OFFLINE`: Used only for Double_Offline (ProductsConfig!)

* `ADD_DATA`: Directly alters a player's profile data. This type requires an extra `Param` key, which is an array outlining the direct path to the variable inside the player's saved data structure.
  ```lua
  Type = RewardsConstant.ADD_DATA,
  Param = {"Money"}, -- Refers to the path of player data
  Value = 5000,
  ```

* `ITEM`: Grants a specific item to the player. When rewarding an item, you can optionally append a `Mutation` key to specify a unique variation of that item.
  ```lua
  Type = RewardsConstant.ITEM,
  Value = ItemsConstant.NAME.ITEM_A,
  Mutation = "Gold",
  ```

::: tip Developer Note
The custom keys (`ITEM`, `DICE`, `MONEY`) were created to simplify common actions for non-scripting users. However, if you understand basic scripting, you can use `ADD_DATA` to modify any player data path.
:::

---

### Reward Table Structure

A standard rewards block is constructed as an array of tables. You can stack as many rewards as you want inside a single block using the configurations detailed above.

```lua
Rewards = {
    {
        Type = RewardsConstant.DICE,
        Value = DiceConstant.NAME.DICE_2,
        Amount = 2,
    },
    {
        Type = RewardsConstant.ITEM,
        Value = ItemsConstant.NAME.ITEM_A,
    },
    {
        Type = RewardsConstant.MONEY,
        Value = 10000,
    },
}
```