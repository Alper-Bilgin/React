# **⚛️** İngilizce-Türkçe Card Yapısı

## 📌 1. PROJENİN GENEL AMACI

Bir kullanıcı, İngilizce kelime kartlarını tek tek görecek, kartlara tıklayarak Türkçe anlamlarını görüntüleyecek ve "Anladım / Anlamadım" butonlarıyla ilerleyecek.

💡 Amaç: **Anlamadığı kelimeler tekrar gösterilir.**
Tüm kelimeler "anladım" olarak işaretlenirse bir tebrik mesajı gözüküyor.

## 📝 2. words.jsx – Kelime Listesi

```jsx
const words = [
  { en: "Apple", tr: "Elma" },
  { en: "Book", tr: "Kitap" },
  // ...
];

export default words;
```

### Açıklama:

- `words` adlı bir dizi oluşturduk. Her eleman `{ en: "...", tr: "..." }` formatında.
- Bu dizi, kartlara veri sağlayacak.
- `export default` diyerek bu veriyi başka dosyalarda kullanıma açtık.

## 📝 3. Flashcard.jsx – Kart ve Butonlar

```jsx
const Flashcard = ({ word, onAnswer }) => {
  const [flipped, setFlipped] = useState(false);
```

### Bu satır ne yapıyor?

- `word`: Kartın gösterdiği kelime.
- `onAnswer`: Kullanıcının "anladım/anlamadım" cevabını ana dosyaya iletmek için kullanılan bir fonksiyon.
- `flipped`: Kartın ön yüz mü, arka yüz mü gösterildiğini tutar.

```jsx
<Card onClick={handleClick}>{flipped ? word.tr : word.en}</Card>
```

- Kart tıklanırsa `handleClick` çalışır ve `flipped` state’i tersine çevrilir.
- `flipped === false` ise İngilizce gösterilir.
- `flipped === true` ise Türkçe gösterilir.

```jsx
<Button onClick={() => onAnswer(true)}>Anladım</Button>
<Button onClick={() => onAnswer(false)}>Anlamadım</Button>
```

- Kullanıcı "anladım" dediğinde `onAnswer(true)`
- Kullanıcı "anlamadım" dediğinde `onAnswer(false)`
- Bu bilgiler App.js’e geri gider.

## 📝 4.App.jsx

```jsx
const [queue, setQueue] = useState(words);
const [currentIndex, setCurrentIndex] = useState(0);
const [unknownWords, setUnknownWords] = useState([]);
const [sessionComplete, setSessionComplete] = useState(false);
```

- `queue`: Şu an gösterilecek kelimeler listesi.
- `currentIndex`: O anda hangi kartın gösterildiğini tutar.
- `unknownWords`: Kullanıcının anlamadığı kelimeleri buraya kaydederiz.
- `sessionComplete`: Tüm kelimeler öğrenildi mi? Kontrol için.

```jsx
const handleAnswer = (understood) => {
  const currentWord = queue[currentIndex];
//Şu anki kart alınıyor: queue[currentIndex]


if (!understood) {
  setUnknownWords((prev) => [...prev, currentWord]);
}
//Kullanıcı anlamadıysa kelime unknownWords listesine ekleniyor.


if (nextIndex < queue.length) {
  setCurrentIndex(nextIndex);
}
//Eğer sıradaki kelime varsa, currentIndex artırılıyor.


else if (unknownWords.length > 0 || !understood) {
  const nextRound = [...(understood ? unknownWords : [...unknownWords, currentWord])];
  setQueue(nextRound);
  setUnknownWords([]);
  setCurrentIndex(0);
}
//Liste bitti ama anlamadığı kelimeler varsa: yeni liste unknownWords’tan oluşturuluyor.

//Kullanıcı son kelimeyi de anlamadıysa, o da tekrar sıraya konuyor.

else {
  setSessionComplete(true);
}
//Eğer hiçbir kelime kalmadıysa oturum bitmiş kabul ediliyor.
```

```jsx
const resetSession = () => {
  setQueue(words);
  setUnknownWords([]);
  setCurrentIndex(0);
  setSessionComplete(false);
};
```

- Başlangıç ayarlarına dönülür.
- Yeni bir oturum başlatılır.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
