# Product Configuration

The shop system is designed to be highly scalable, allowing you to easily add new products. 

::: warning Important
This module is strictly for **Developer Products** (Robux purchases). Do **NOT** include Gamepasses here!
:::

**Path:** `ReplicatedStorage > Shared > Config > ProductsConfig`

---

### General Information
* **IDs:** Always replace `ID` and `GiftID` with your own Roblox Developer Product IDs.
* **Rewards System:** Most products use a custom rewards table. If you need details on how rewards are processed, check the [Rewards](/rewards) page.

---

### 1. General Products (Packs)
You can create an infinite amount of bundles or packs. To create a new one, simply duplicate the `STARTER_PACK` configuration.

::: info Roblox Policy Compliance
To comply with Roblox's policy regarding random virtual items, any pack containing a **Dice** (or any randomized reward) will automatically be hidden from players residing in countries where paid random items are restricted.
:::

* **Order:** Lower numbers mean the pack will appear first in the shop interface.
* **Customization:** Customize the UI look using the gradient options.

**Example:**
```lua
STARTER_PACK = {
    ID = 3592917239,
    GiftID = 3592917422,

    OneTime = true, -- Can only be purchased once

    UIPack = true,
    DisplayName = "Starter Pack",
    UIGradient = ColorSequence.new({
        ColorSequenceKeypoint.new(0, Color3.fromHex("00fafe")),
        ColorSequenceKeypoint.new(1, Color3.fromHex("1e64fd")),
    }),

    RewardGradient = ColorSequence.new({
        ColorSequenceKeypoint.new(0, Color3.fromHex("fe55d6")),
        ColorSequenceKeypoint.new(1, Color3.fromHex("8c00ff")),
    }),

    Order = 1,

    Rewards = {
        {
            Type = RewardsConstant.DICE,
            Value = DiceConstant.NAME.DICE_2,
            Amount = 2,
        },
        {
            Type = RewardsConstant.ITEM,
            Value = ItemsConstant.NAME.ITEM_A,
            Amount = 2,
        },
        {
            Type = RewardsConstant.MONEY,
            Value = 10000,
        },
    }
}
```

---

### 2. Dice Products
You can link a Roblox Developer Product to your dice to make them purchasable with Robux. If a dice does not have a product configured here, its Robux purchase button will automatically stay hidden.

* Use the exact constant key for the dice name.
* Match the reward value with that same constant.

**Example:**
```lua
[DiceConstant.NAME.DICE_1] = {
    ID = 3592917645,
    GiftID = 3592917715,

    Rewards = {
        {
            Type = RewardsConstant.DICE,
            Value = DiceConstant.NAME.DICE_1,
            Amount = 1,
        }
    }
}
```

---

### 3. Upgrades Products
Upgrades follow the same setup as Dice products, except they **do not use a GiftID**. Replace the key and reward parameters with your specific upgrade constants.

**Example:**
```lua
[UpgradesConstant.MONEY_MULT] = {
    ID = 3592917645,

    Rewards = {
        {
            Type = RewardsConstant.ADD_DATA,
            Param = {"Upgrades", UpgradesConstant.MONEY_MULT},
            Value = 1,
        }
    }
}
```

---

### 4. Currency Products
Adding new currencies requires a basic understanding of Luau. If you want to sell a new currency for Robux, duplicate the existing `MoneyProducts` table.

::: danger Warning
If you are not familiar with scripting, we highly recommend avoiding adding new custom currencies.
:::

1. **Configure the Rewards:** To change what currency is rewarded upon purchase, edit the `Param` field:

```lua
Rewards = {
    {
        Type = RewardsConstant.ADD_DATA,
        Param = {"CurrencyName"}, -- Change to your data store currency key
        Value = 1000000,
    }
}
```

2. **Register the Product Table:** Open your main Products Config (`init.luau`) and add your new table. The dictionary key doesn't matter, just make sure it is completely unique:

```lua
["Money"] = MoneyProducts, -- Replace "Money" with a unique key (not important the name of key just make sure it's unique!)
```

::: warning Important: Require Module
Don't forget to require your new module at the top of the main ProductsConfig
```lua
local MoneyProducts = require(script.MoneyProducts)
```
:::