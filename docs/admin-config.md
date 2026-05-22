# Admin Configuration

In addition to the group rank settings found in the [General Configuration](/general-config), you can manually grant admin privileges to specific players using their Roblox User ID.

---

### 1. Opening Cmdr (Admin Console)
The game uses **Cmdr** for its admin console framework. 

* **Default Key:** Press `F3` in-game to toggle the console interface.
* **Custom Keybinds:** If you want to change the activation key, you can modify it within the **CmdrController** script.

**Path:** `StarterPlayer > StarterPlayerScripts > Controller > CmdrController`

---

### 2. Custom User IDs Whitelist
This configuration file allows you to manually whitelist specific accounts. Anyone whose User ID is added to this list will automatically receive admin permissions in-game, completely bypassing group rank restrictions.

**Path:** `ReplicatedStorage > Shared > Config > AdminConfig`

```lua
local userIds = {
    [-1] = true, -- Example placeholder ID (Player 1)

    -- [12345678] = true, -- Replace with the player's actual Roblox User ID
}
```

---

::: tip Tip
Manually adding User IDs is perfect for giving admin access to co-creators, internal testers, or friends who are not part of your Roblox group or do not have the required group rank.
:::