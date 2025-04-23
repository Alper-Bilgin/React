# **React ve TypeScript ile Basit Zar Atma Oyunu**

## 🔹 **Imports ve Başlangıç Tanımları**

```tsx
import React, { useState } from "react";
import { DicePair } from "../types/Dice";
import { getDiceEmoji } from "../utils/diceEmoji";
import "./App.css";
```

- `React` ve `useState` React kütüphanesinden alınan temel fonksiyonlar.
- `DicePair`: iki zar içeren bir TypeScript arayüzü.
- `getDiceEmoji`: zar sayısını emojilere dönüştüren yardımcı fonksiyon.
- `App.css`: uygulamanın stil dosyası.

## 🎲 **Zar Atma Fonksiyonu**

```tsx
const rollDice = (): DicePair => ({
  die1: Math.floor(Math.random() * 6) + 1,
  die2: Math.floor(Math.random() * 6) + 1,
});
```

- **`rollDice`** fonksiyonu, iki zarın atılmasını simüle eder:

  - **`Math.random()`**: Bu fonksiyon, 0 ile 1 arasında rastgele bir sayı üretir. Örneğin, 0.25 gibi.

  - **`Math.floor()`**: Bu fonksiyon, bir sayıyı en yakın tam sayıya yuvarlar. Örneğin, `Math.floor(3.7)` sonucu 3 olacaktır.

  - **`Math.floor(Math.random() * 6) + 1`**: Bu ifade, 0 ile 5 arasında bir sayı üretir (`Math.random() * 6`), ve sonra 1 ekler, böylece sonuç 1 ile 6 arasında olur. Bu, zarın 1 ile 6 arasında bir değer almasını sağlar.

- **`rollDice`** fonksiyonu her çağrıldığında iki zarın değeri döndürülür ve bu değer `DicePair` tipinde bir nesne olarak geri gelir.

## 📦 **State Değişkenleri**

```tsx
const [leftDice, setLeftDice] = useState<DicePair>({ die1: 1, die2: 1 });
const [rightDice, setRightDice] = useState<DicePair>({ die1: 1, die2: 1 });
const [winner, setWinner] = useState<string>("");
const [leftScore, setLeftScore] = useState<number>(0);
const [rightScore, setRightScore] = useState<number>(0);
```

- `leftDice` ve `rightDice` → sol ve sağ zarların değerlerini tutar.
- `winner` → kimin kazandığını gösteren yazı.
- `leftScore`, `rightScore` → her iki tarafın toplam skorları.

## 🕹️ **Zar Atma Buton Fonksiyonu**

```tsx
const handleRoll = () => {
  const newLeftDice = rollDice();
  const newRightDice = rollDice();

  setLeftDice(newLeftDice);
  setRightDice(newRightDice);

  const leftTotal = newLeftDice.die1 + newLeftDice.die2;
  const rightTotal = newRightDice.die1 + newRightDice.die2;

  if (leftTotal > rightTotal) {
    setWinner("🎉 Kazanan: Sol!");
    setLeftScore((prev) => prev + 1);
  } else if (rightTotal > leftTotal) {
    setWinner("🎉 Kazanan: Sağ!");
    setRightScore((prev) => prev + 1);
  } else {
    setWinner("🤝 Berabere!");
  }
};
```

**`handleRoll`**: Bu fonksiyon, her buton tıklamasında iki yeni zar atma işlemini başlatır:

1.  **Yeni zarlar atılır**:

    - `newLeftDice` ve `newRightDice` değişkenleri, `rollDice` fonksiyonundan gelen zarları saklar.

2.  **State güncellenir**:

    - `setLeftDice` ve `setRightDice` ile sol ve sağ zarlar güncellenir.

3.  **Zarların toplamı hesaplanır**:

    - `leftTotal` ve `rightTotal` değişkenleri, her iki tarafın zarlarının toplamını hesaplar.

4.  **Kazanan belirlenir**:

    - **Eğer sol taraf daha yüksekse**, `winner` değişkeni "🎉 Kazanan: Sol!" olarak güncellenir, ve sol skor bir artırılır.

    - **Eğer sağ taraf daha yüksekse**, `winner` değişkeni "🎉 Kazanan: Sağ!" olarak güncellenir, ve sağ skor bir artırılır.

    - **Eğer toplamlar eşitse**, `winner` değişkeni "🤝 Berabere!" olarak güncellenir.

## 🎨 **JSX – Görsel Arayüz**

```tsx
return (
  <div className="container">
    <div className="side">
      <h2>Sol Zarlar 🎲</h2>
      <div className="dice">
        {getDiceEmoji(leftDice.die1)} {getDiceEmoji(leftDice.die2)}
      </div>
      <div>Toplam: {leftDice.die1 + leftDice.die2}</div>
      <div>Skor: {leftScore}</div>
    </div>

    <div className="side">
      <h2>Sağ Zarlar 🎲</h2>
      <div className="dice">
        {getDiceEmoji(rightDice.die1)} {getDiceEmoji(rightDice.die2)}
      </div>
      <div>Toplam: {rightDice.die1 + rightDice.die2}</div>
      <div>Skor: {rightScore}</div>
      <button onClick={handleRoll}>🎲 Zar At</button>
      <h3>{winner}</h3>
    </div>
  </div>
);
```

- **Sol ve Sağ Zarlar**: Her iki taraf için zarlar ve skorlar gösteriliyor.

  - **Zarları Emoji ile Gösterme**: `getDiceEmoji(leftDice.die1)` ve `getDiceEmoji(leftDice.die2)` çağrıları ile, zar değerlerini emoji formatında ekrana basıyoruz. Örneğin, `1` sayısı için "1️⃣" emoji, `6` sayısı için "6️⃣" emoji gösteriliyor.

- **Toplamlar**: Her iki tarafın zarlarının toplamı hesaplanıp gösteriliyor.

- **Skorlar**: Her iki tarafın kazandığı skorları gösteren metinler var.

- **Zar Atma Butonu**: Sağ taraf için bir **"Zar At"** butonu var. Bu butona tıklandığında, `handleRoll` fonksiyonu tetikleniyor ve zarlar yeniden atılıyor.

- **Kazanan Yazısı**: `winner` durumu her zar atışında güncelleniyor ve buradaki metin, kimin kazandığını veya berabere olduğunu ekranda gösteriyor.

## 🎯 **DicePair ve getDiceEmoji**

```tsx
export interface DicePair {
  die1: number;
  die2: number;
}
```

`DicePair` tipi, zar çiftlerini temsil eder. TypeScript'in type safety özelliğini kullanıyoruz.

```tsx
export const getDiceEmoji = (num: number): string => {
  const diceEmojis = ["⚠️", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
  return diceEmojis[num] || "❓";
};
```

**`getDiceEmoji`** fonksiyonu, zarın sayısını alır (`num` parametresi) ve bu sayıyı bir emojiye dönüştürür. Örneğin:

- 1 → "1️⃣"
- 2 → "2️⃣"
- 3 → "3️⃣"
- ...
- Eğer geçersiz bir sayı girilirse (örneğin 0 veya 7), `"❓"` döner.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
