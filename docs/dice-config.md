# Dice Configuration

The Dice system handles everything related to obtaining items. You can find the main configuration here:

**Path:** `ReplicatedStorage > Shared > Config > DiceConfig`

---

### 1. Customizing the "Dice" Terminology
You can change the term "Dice" to anything you want (e.g., *Lucky Blocks*, *Crates*, *Chests*).

* **UI Update:** Make sure to manually change the title of **Dice Shop** in the **StockShop** frame to match your new term.
* **Constants:** Simply update your dice names in the constants (see below) to use your new term.

---

### 2. Dice Names (Constants)
Just like items, each dice must be registered in the **DiceConstant** module.

**Path:** `ReplicatedStorage > Shared > Constants > DiceConstant`

**Example:**
```lua
NAME = {
    DICE_1 = "Dice Name 1",
    DICE_2 = "Dice Name 2",
}
```

::: danger Important: Product Configuration
The **Product Config** also uses the Dice constants! 
After editing a dice name, make sure to update the **Product Config** as well. Otherwise, the game may be temporarily broken until the names match across all scripts.
:::

---

### 3. Understanding Dice Content (Rates)
The `Content` table determines the probability of obtaining each item. 

**Logic:** The system uses **Reversed Numbers**. A **lower number** means a **higher chance** of obtaining the item, while a **higher number** means it will be harder to get.
* **Item A** with a value of `1` (Higher chance)
* **Item B** with a value of `2` (Lower chance)

**How that work?:**
If you have Item A (1) and Item B (2):
* Total = `1/1 + 1/2 = 1.5`
* **Item A chance:** `(1 / 1) / 1.5 = 66.6%`
* **Item B chance:** `(1 / 2) / 1.5) = 33.3%`

```lua
local NormalContent = {
    [ItemsConstant.NAME.ITEM_A] = 1,
    [ItemsConstant.NAME.ITEM_B] = 2,
}
```

::: tip
You don't need to understand this, but just remember: the higher the number, the rarer the item is!
:::

### 3.1. Create Dice Content
Now, list all your items in the `NormalContent` table and configure their chances (refer to the logic in section 3 to balance your drops).

---

### 4. Creating Dice Data
Add your dice settings into `module.Dice`. 

**Path:** `ReplicatedStorage > Shared > Config > DiceConfig`

```lua
[DiceConstant.NAME.BASIC_DICE] = {
    Price = 10,
    Stock = {123, 123}, -- Random stock between 50 and 100
    StockChance = 100, -- 100% chance to restock

    Rarity = ItemsConstant.RARITY.COMMON,
    ImageId = "rbxassetid://106697895824838",
    
    Content = NormalContent,
    Luck = 1, -- Multiplier for the content rates
    
    Order = 1 -- Position in the shop (Lower = First)
},
```

### Settings Breakdown:
* **Price**: The cost of the dice.
* **Stock**: A table `{min, max}`. Set both to the same number for a fixed stock.
* **StockChance**: Percentage chance (0 to 100) that this item appears during a restock.
* **Rarity**: The rarity background used in the UI.
* **ImageId**: The asset ID for the dice icon.
* **Luck**: Global luck multiplier for this specific dice.
* **Rebirth**: The minimum amount of Rebirths needed to unlock it. **(Optional)**
* **Hided**: Hided from stock shop. **(Optional)**
* **Order**: Sorting order in the Stock Shop UI.