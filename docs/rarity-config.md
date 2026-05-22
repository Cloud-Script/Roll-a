# Rarity Configuration

You can manage all item rarities within the **ItemsConstant** module.
If you don't want to add or edit rarity pass to next configuratiion

**Path:** `ReplicatedStorage > Shared > Constants > ItemsConstant`

::: tip Skipping this step
If you do not need to add or edit rarities, you can jump directly to the [Items Configuration](/items-config).
:::

---

### 1. Define Rarities
You can add or edit rarities in the `RARITY` table. By default, the template includes:

```lua
RARITY = {
    COMMON = "Common",
    UNCOMMON = "Uncommon",
    EPIC = "Epic",
    LEGENDARY = "Legendary",
    MYTHIC = "Mythic",
    DIVINE = "Divine",
    SECRET = "Secret",
}
```

### 2. Configure Rarity Colors (Gradients)
After adding or editing a rarity, you must define its visual identity. Go to the **ColorsConstant** module and assign a `ColorSequence` to your rarity. This gradient will be used for UI elements.

**Path:** `ReplicatedStorage > Shared > Constants > ColorConstant`

**Example:**
```lua
[ItemsConstant.RARITY.COMMON] = ColorSequence.new({
    ColorSequenceKeypoint.new(0, Color3.fromRGB(200, 200, 200)),
    ColorSequenceKeypoint.new(1, Color3.fromRGB(120, 120, 120)),
}),
```

### 3. Define Display Order
To ensure features like **Index** and **Auto-Sell** work correctly, you must define the `LayoutOrder` for each rarity in the **RarityOrder** module.

**Path:** `ReplicatedStorage > Shared > Constants > RarityOrder`

**Default Order:**
```lua
return {
    [ItemsConstant.RARITY.COMMON] = 1,
    [ItemsConstant.RARITY.UNCOMMON] = 10,
    [ItemsConstant.RARITY.EPIC] = 20,
    [ItemsConstant.RARITY.LEGENDARY] = 30,
    [ItemsConstant.RARITY.MYTHIC] = 40,
    [ItemsConstant.RARITY.DIVINE] = 50,
    [ItemsConstant.RARITY.SECRET] = 60,
}
```

---

::: danger Important: Dependency Check
If you edited or removed existing rarities (and not just added new ones), your game may not work properly until all removed rarities have been replaced in both the Dice and Items configurations.
:::