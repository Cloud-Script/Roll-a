# Upgrades Configuration

The upgrades system allows players to purchase permanent or scalable stat increases using in-game currency. Like items, upgrades rely on **Constants** to maintain clean code and provide auto-completion within your IDE.

---

### 1. Register Upgrade Names
Before configuring your upgrades, you must register their unique identifiers in the **UpgradesConstant** module. 

**Path:** `ReplicatedStorage > Shared > Constants > UpgradesConstant`

```lua
return {
    MONEY_MULT = "U_Money",
    ROLL_LUCK = "U_RollLuck",
    MUTATION_LUCK = "U_MutationLuck",
    EXTRA_ROLL = "U_ExtraRoll",
}
```

::: tip Unique Key Convention
Every string value is intentionally prefixed with `U_` (e.g., `"U_Money"`). This prefix ensures that upgrade data keys remain entirely unique and do not conflict with item names or other systems when saving player data.
:::

---

### 2. Configure Upgrade Settings
Once your constants are defined, you can map out their stats, pricing, scaling, and visual themes inside the main configuration file.

**Path:** `ReplicatedStorage > Shared > Config > UpgradesConfig`

```lua
return {
    [UpgradesConstant.MONEY_MULT] = {
        DisplayName = "Money Mult",
        Icon = "rbxassetid://129621791799320",
        BoostName = BoostsConstant.NAME.MONEY, -- The stat this upgrade modifies (see /boosts)

        -- UI Styling
        UIGradient = ColorsConstant.MONEY_GREEN, -- Color gradient for the upgrade title text
        UIStroke = Color3.fromRGB(17, 53, 3), -- Outline border color for the text

        -- Functions
        GetBoost = function(value)
            return 1 + 0.1 * (value or 0)
        end,

        GetPrice = function(value)
            return 100 * (3 ^ (value or 0))
        end,

        GetRebirth = function(value)
            return value // 10
        end,

        Order = 1, -- The position order in which this upgrade appears in the UI layout
    },
}
```

---

### ⚙️ Property Details

* **`BoostName`:** Connects your upgrade directly to a specific multiplier framework. You can explore all available stat modifiers inside the [Boosts Configuration](/boosts).
* **`UIGradient` & `UIStroke`:** Dictates the typography style and aesthetic layout of the text elements on the interface card.
* **`GetBoost`:** Receives the player's current upgrade level (`value`) and returns the final numerical multiplier applied to their stats.
* **`GetPrice`:** Receives the current level (`value`) and outputs the price required to purchase the next tier.
* **`GetRebirth`:** Receives the upgrade level and calculates how many rebirths the player must have achieved to unlock it.
* **`Order`:** Lower numbers will sort to the front/top of the upgrade shop grid layout.

---

::: warning Developer Products
Upgrades can also be linked directly to a Roblox Developer Product ID so players can purchase tiers using Robux. Check out the [Products Configuration](/products-config) for setup details.
:::

::: tip Advanced Rebirth Formula
The default example function uses an integer division operator (`//`) to enforce a progression rule:
```lua
GetRebirth = function(value)
    return value // 10
end
```
This formula allows players to buy exactly **10 upgrades per rebirth**. For upgrade, levels 0 to 9 require 0 rebirths, levels 10 to 19 require 1 rebirth, levels 20 to 29 require 2 rebirths, and so forth. If an upgrade should have no rebirth requirement at all, simply configure it to `return 0`.
:::