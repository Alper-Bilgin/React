// ⚠️ ve ❓ hatalı durumlar için.
export const getDiceEmoji = (num: number): string => {
  const diceEmojis = ["⚠️", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
  return diceEmojis[num] || "❓";
};
