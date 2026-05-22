# General Configuration

The **General Configuration** module allows you to fine-tune the core mechanics of your game, including group integration, multiplier boosts, cooldowns, and visual parameters.

---

### 1. Configuration File
You can adjust all general settings directly inside the main configuration script.

**Path:** `ReplicatedStorage > Shared > Config > GeneralConfig`

```lua
return {
    GROUP_ID = 436177122, -- Your Roblox group ID
    ADMIN_RANK = 230, -- Every rank in your group >= to this will get admin permissions
    STUDIO_ADMIN = true, -- If true, playing in Roblox Studio automatically grants admin

    FRIENDS_BOOST = 0.1, -- Extra boost multiplier per friend in the server
    MAX_FRIENDS = 5, -- Max friend boosts applied (e.g., 5 friends * 0.1 = +50% boost)
    
    PLUS_BOOST = 0.1, -- Roblox Premium/Plus multiplier boost
    REBIRTH_BOOST = 0.5, -- Extra boost multiplier earned per rebirth
    GROUP_BOOST = 0.1, -- Group member multiplier boost

    ROLL_COOLDOWN = 1.25, -- Cooldown between rolls (Recommended: 1.25), (This is just to prevent exploiters!)
    EQUIP_BEST_COOLDOWN = 5, -- Cooldown for the "Equip Best" feature (Recommended: 1)

    RESTOCK_COOLDOWN = 300, -- Shop restock interval (in seconds)
    EVENT_COOLDOWN = 600, -- Time interval between random server events (in seconds)

    INVENTORY_LIMIT = 500, -- Maximum items a player can hold (~100 bytes per item)

    SELL_PRICE = 120, -- Sell formula: Item Income * SELL_PRICE

    OFFLINE_REWARDS = 0.1, -- Percentage of rewards earned while offline
    MAX_OFFLINE = 21600, -- Maximum offline earnings duration (3600 * 6 = 6 hours)

    FREE_PODIUM = 5, -- Base podiums unlocked by default
    MAX_PODIUM = 21, -- Maximum podiums available (Max rebirths - 5)

    -- Visual Settings
    ROLL_RANDOM = 7, -- Number of fake items shown in the UI animation before revealing the real one
    ROLL_TICK = 0.2, -- Speed of the roll animation (time per item shown)
}