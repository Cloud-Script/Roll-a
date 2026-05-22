# Gamepass Configuration

The Gamepass system allows you to add permanent perks and boosts to your shop. 

::: warning Important ID Distinction
* The `ID` field must strictly be a **Gamepass ID**.
* The `GiftID` field must strictly be a **Developer Product ID** (used to allow players to gift the gamepass to others via Robux).
:::

**Path:** `ReplicatedStorage > Shared > Config > GamepassesConfig`

---

### 1. Creating Gamepasses
You can create as many gamepasses as you want. To add a new one, simply duplicate an existing gamepass entry inside the configuration table and customize its properties.

* **Order:** Lower numbers mean the gamepass will appear first in the shop UI.
* **UI Customization:** You can adjust the display name, description, icon, gradients, and stroke colors to fit your design.
* **Boosts:** Link gamepasses to specific player multipliers (refer to the [Boosts](/boosts) page if you need to create or view available boosts).

**Example:**
```lua
DOUBLE_MONEY = {
    ID = 1841141933,     -- Must be a Gamepass ID
    GiftID = 3592912914, -- Must be a Developer Product ID

    DisplayName = "Double Money",
    Icon = "rbxassetid://129621791799320",
    Desc = "",
    Order = 1,

    UIGradient = ColorsConstant.MONEY_GREEN,
    UIStroke = Color3.fromRGB(28, 83, 8),

    Boosts = {
        {
            Name = BoostsConstant.NAME.MONEY,
            Value = 2,
        }
    },
},
```