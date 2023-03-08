# Dynamic character sheet for the Ascendant role-playing game

---

This is a (mostly) automated character sheet for the _Ascendant_ RPG by Autarch. It is written in pure JavaScript and utilizies basic HTML with some rudimentary CSS included.

_Disclaimer:_

- I am not affliliated with Autarch, just a huge fan of Ascendant and their other games.
- I am not a web develeoper/designer, and it shows. While I can't make it look any better, the code is fully functional and solid for what it does.
- You are free to clone this repository and modify any of the code to your liking.

**What it does:**

- after entering the primary attributes, it automatically fills the secondary ones, the Health and Determination fields and the Primary Attributes CPs field, as well
- after entering the Power Level, it automatically calculates the Hero Points
- after entering every relevant value, it automatically calculates the Total Cost and Total SPs fields, and this is also true for the skills, as well
  the Perks and Drawbacks just have to be filled
- when done, it’s enough to press some buttons on the top to calculate all the CPs spent on Primary Abilities (though it was calculated automatically earlier, you can go for sure) Powers, Skill, Perks, and the Drawback CPs are a plus to the available CPs, naturally

**What it doesn’t do:**

- the power level checks
- the AV numbers calculation for the CHART
- any kind of saving/loading and importing/exporting
- the income field is not automatically populated
