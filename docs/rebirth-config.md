# Rebirth Configuration

The rebirth system uses a dynamic function to calculate the cost of each subsequent rebirth. This ensures that prices scale up automatically as players progress.

---

### 1. Price Calculation Function
Instead of manually listing a price for every single rebirth, you can configure the mathematical formula inside the configuration module.

**Path:** `ReplicatedStorage > Shared > Config > RebirthConfig`

```lua
-- Calculates the price based on the player's current rebirth amount
function module.GetPrice(amount: number)
    return 1e6 * 3 ^ (amount or 0)
end
```

---

### 💡 How It Works
The default formula uses an exponential growth model:
* **Base Price:** `1e6` represents $1,000,000$ (1 million) cash for the very first rebirth.
* **Multiplier:** `3 ^ (amount)` triples the cost for each rebirth the player already owns.

Here is a quick look at how the costs scale up:
* **Rebirth 0 (First Rebirth):** $1,000,000 \times 3^0 =$ **1,000,000**
* **Rebirth 1:** $1,000,000 \times 3^1 =$ **3,000,000**
* **Rebirth 2:** $1,000,000 \times 3^2 =$ **9,000,000**

::: tip Customization
If you want the price to increase slower or faster, you can change the multiplier `3` to another number (e.g., `2` for doubling the price, or `1.5` for a smoother progression).
:::

### Info
The rebirth multiplier bonuses can be adjusted globally in the [General Configuration](/general-config) under the `REBIRTH_BOOST` setting.