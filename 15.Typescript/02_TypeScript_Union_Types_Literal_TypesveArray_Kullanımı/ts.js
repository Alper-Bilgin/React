// 1. **Union Types (Birleşim Tipleri)**
// Union types, bir değişkenin birden fazla türde veri alabileceğini belirtir.
// Örneğin, `value` değişkeni hem `number` hem de `string` alabilir.
var value; // 'value' değişkeni ya sayı ya da string alabilir
value = 42; // geçerli, çünkü 42 bir sayıdır
console.log("value (sayısal):", value);
value = "Hello, TypeScript!"; // geçerli, çünkü "Hello, TypeScript!" bir stringdir
console.log("value (string):", value);
// Eğer 'value'ya başka bir tür atamaya çalışırsak, TypeScript hata verir
// value = true; // hata! Çünkü 'boolean' tipi geçerli değil
// Birleşim tiplerini fonksiyonlarda kullanma
function printId(id) {
    // 'id' hem number hem de string türünde olabilir
    console.log("ID:", id);
}
printId(101); // geçerli: sayı
printId("abc123"); // geçerli: string
// printId(true); // hata! Çünkü 'boolean' tipi geçerli değil
// 2. **Literal Types (Literal Tipleri)**
// Literal types, belirli bir değeri temsil eden türlerdir.
// Yani, bir değişken yalnızca belirli bir değeri alabilir.
var direction; // 'direction' değişkeni yalnızca "left" veya "right" olabilir
direction = "left"; // geçerli
console.log("direction (left):", direction);
direction = "right"; // geçerli
console.log("direction (right):", direction);
// direction = "up"; // hata! "up" geçerli değil
// Literal tiplerini fonksiyonlarda kullanma
function setStatus(status) {
    console.log("User status is:", status);
}
setStatus("active"); // geçerli
setStatus("banned"); // geçerli
// setStatus("pending"); // hata! "pending" geçerli değil
// 3. **Array Kullanımı**
/**
 * Dizilerde, her elemanın türünü belirleyerek veri tiplerini güvence altına alabiliriz.
 */
// Tipi belirtilmiş diziler
var numbers = [1, 2, 3, 4]; // numbers dizisi sadece sayılar içerebilir
console.log("numbers array:", numbers);
// Bu dizide yalnızca sayılar eklenebilir:
numbers.push(5); // geçerli
// numbers.push("six"); // hata! Çünkü "six" bir stringdir
var fruits = ["apple", "banana", "cherry"]; // fruits dizisi yalnızca string değerler alabilir
console.log("fruits array:", fruits);
// Alternatif olarak Array<T> kullanımı
var mixedNumbers = [1, 2, 3, 4, 5]; // Aynı şey Array<number> ile de yapılabilir
console.log("mixedNumbers array:", mixedNumbers);
// Dizilerde elemanlara erişim
console.log("first number:", numbers[0]); // 1. eleman
console.log("second fruit:", fruits[1]); // 2. eleman
// Array metodları
// Array'in her elemanını işlemek için map metodu
var squaredNumbers = numbers.map(function (num) { return num * num; }); // her sayıyı karesine alalım
console.log("squaredNumbers:", squaredNumbers);
// Dizilerde, opsiyonel elemanlar (Optional elements in arrays)
var optionalArray = [1, "apple", 2, "banana"];
console.log("optionalArray:", optionalArray);
// Dizilerde yanlış tiplerde veri eklemeye çalıştığımızda TypeScript hata verir
// optionalArray.push(true); // hata! 'boolean' tipi geçerli değil
// **Tuple Kullanımı (Farklı Türdeki Değerleri Aynı Dizide Tutma)**
// Tuple, farklı türdeki değerleri aynı dizide tutmamıza olanak tanır.
// Örneğin, bir kullanıcının adı ve yaşı.
var user = ["Alice", 30]; // İlk eleman string, ikinci eleman number
console.log("user:", user);
// Tuple içinde yanlış türde veri atamaya çalışırsak, TypeScript hata verir
// user = ["Bob", "thirty"]; // hata! İkinci eleman bir sayı olmalı
// **Çok Boyutlu Diziler (Multi-dimensional Arrays)**
// Bir matris (2D array) örneği
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("matrix (2D array):", matrix);
// Dizilerde TypeScript’in tip güvenliği sayesinde yanlış türde eleman eklenmesi engellenir
// numbers.push("text"); // hata! Çünkü 'numbers' dizisi sadece sayılar içeriyor
