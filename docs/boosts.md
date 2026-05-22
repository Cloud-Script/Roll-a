# Boosts Configuration

The **Boosts** system ensures global scalability across the game. Whenever a player earns money, rolls, or triggers an action, the script call the `BoostsService` to calculate and apply their boosts.

**Path:** `ReplicatedStorage > Shared > Constants > BoostsConstant`

---

### Available Boost Names
These are the default registered boosts you can use throughout your configurations:
* `ROLL_AMOUNT`: Increases the number of dice rolled at once.
* `ROLL_LUCK`: Enhances overall roll luck.
* `MUTATION_LUCK`: Increases the chances of obtaining rare mutations.
* `MONEY`: Multiplies money.
* `INCOME`: Boosts passive income generated per second (by item).
* `OFFLINE`: Enhances offline progression earnings.
* `REBIRTH`: Multiplies rebirth.

---

### Boost Types
By default, the script treats every boost as a **Multiplier (Mult)**. However, you can change the mathematical behavior using the `Type` key:
* **Multiplier (Default):** Multiplies the base value (e.g., `Value = 2` means x2 earnings).
* `ADD`: Adds a flat amount directly to the base value (e.g., adding +1 extra dice slot).

---

### Boost Table Structure

You can implement boosts inside other configuration files (such as Gamepasses or Upgrades) by nesting them in a `Boosts` array. 

#### Example: Multiplier Boost (Default)
To create a standard multiplier (like $x1.5$ Money), simply omit the `Type` key:
```lua
Boosts = {
    {
        Name = BoostsConstant.NAME.MONEY,
        Value = 1.5, -- This acts as a x1.5 multiplier
    }
}
```

#### Example: Addition Boost
To add a flat flat amount (like adding +1 to your max simultaneous rolls), specify the `ADD` type:
```lua
Boosts = {
    {
        Name = BoostsConstant.NAME.ROLL_AMOUNT,
        Type = BoostsConstant.TYPE.ADD, -- Overrides multiplier logic to add flat values
        Value = 1, -- Gives +1 flat roll amount
    }
}
```

::: tip Configuration Tip
The `ADD` type is primarily utilized for mechanics like expanding dice roll slots or max storage capacity through a combination of gamepasses and upgrades.
:::