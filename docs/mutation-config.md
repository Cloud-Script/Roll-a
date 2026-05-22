# Mutations & Events Configuration

This section covers how to manage item **Mutations** and configure global server-wide **Events** that temporarily alter their drop rates.

## 1. Mutation Configuration

Mutations are unique modifiers applied to items, altering their base income and visual look.

**Path:** `ReplicatedStorage > Shared > Config > MutationConfig`

### Adding a New Mutation
To create a new mutation, open the script and add a new dictionary entry inside the table with its multiplier, color gradient, and display order.

* **Mult:** The income multiplier applied to the item when it has this mutation (e.g., `1.5` means $+50\%$ income).
* **Color:** The `ColorSequence` gradient used in the UI text or effects for this mutation.
* **Order:** Lower numbers mean this mutation will be prioritized or displayed first in UI sorting.

**Example:**
```lua
Gold = {
    Mult = 1.5,
    Color = ColorSequence.new({
        ColorSequenceKeypoint.new(0, Color3.fromHex("fbfe62")),
        ColorSequenceKeypoint.new(1, Color3.fromHex("ffa50a"))
    }),
    Order = 3,
},
```

::: tip Visual Asset Reminder
Don't forget that whenever you create a mutation, you must place the corresponding item models into their specific mutation folder under `ReplicatedStorage > Assets > Items`.
:::

## 2. Server Events Configuration

Events are global server-wide occurrences (like weather changes) that temporarily alter mutation drop rates.

**Path:** All event modules are located as children of `ReplicatedStorage > Shared > Config > MutationConfig > Events`

### Event Properties Breakdown

Every event module must follow the exact same structure and return a table containing these parameters:

* **Display:** The public name or message displayed at the bottom of the screen during the event.
* **Icon:** The asset image ID (`rbxassetid://...`) shown in the bottom HUD.
* **Mutations:** A custom rate table determining the drop probability of specific mutations. It uses **Reversed Numbers** logic (See [Dice Configuration Section 3](/dice-config#_3-understanding-dice-content-rates) for full details).
* **Duration:** How long the event lasts, written in **seconds** (e.g., `120` = 2 minutes).
* **MutateChance:** The baseline chance to trigger *any* mutation every time a player rolls an item. This uses a decimal scale from `0` to `1` (e.g., `0.1` = 10% chance, `0.5` = 50% chance).
* **Admin:** A boolean (`true`/`false`). If set to `true`, this event will never trigger naturally and can only be started manually by an admin.
* **Chance:** The chance of this event.

### Configuration Template

**Example:**
```lua
return {
    Display = "All Weather",
    Icon = "rbxassetid://91333013445699",

    Mutations = {
        Gold = 1,     -- Most commn item in this table
        Diamond = 4,
        Lava = 7,
        Galaxy = 10,  -- Rarest item in this table
    },

    Duration = 120,      -- 2 minutes
    MutateChance = 0.1,  -- 10% chance to roll a mutation

    Admin = false,       -- Can trigger randomly
    Chance = 50,
}
```