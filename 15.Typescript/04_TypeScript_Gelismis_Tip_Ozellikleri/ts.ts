// 1. **Generic Types** (Generik Tipler)

// Tüm veri türlerine uyum sağlayan bir fonksiyon
// Bu fonksiyon, herhangi bir türde değer alır ve aynı türde bir değer döndürür.
function getItem<T>(value: T): T {
  return value; // Alınan değeri aynı türde geri döndürür.
}

const numberItem = getItem(42); // number türü, getItem fonksiyonu 42 değerini alıp number döndürür.
const stringItem = getItem("Hello, TypeScript!"); // string türü, getItem fonksiyonu string döndürür.

console.log(numberItem, stringItem); // Konsola number ve string türündeki değerleri yazdırır.

// 2. **Extending Types** (Tip Genişletme)

// Temel bir kullanıcı arayüzü (interface) tanımlanıyor
interface User {
  id: number; // Kullanıcı ID'si, sayısal bir değer
  name: string; // Kullanıcının adı, string türünde
  email: string; // Kullanıcının e-posta adresi, string türünde
}

// Yeni bir tip tanımlıyoruz, User arayüzünü genişleterek.
interface AdminUser extends User {
  role: "admin"; // Admin rolü için sabit bir değer "admin"
  permissions: string[]; // Admin kullanıcıları için izinler, string dizisi
}

// Admin tipi oluşturma
const adminUser: AdminUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  role: "admin", // Admin rolü verildi
  permissions: ["read", "write", "execute"], // Admin izinleri belirlendi
};

// 3. **Partial** (Opsiyonel Alanlar)

// Kullanıcıyı güncelleme için opsiyonel alanlar tanımlanıyor
// Bu fonksiyon, bir kullanıcıyı güncellerken bazı alanların opsiyonel olmasını sağlar.
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates }; // Kullanıcıyı güncellerken yalnızca gönderilen değerler değiştirilir.
}

const existingUser: User = { id: 2, name: "Jane Doe", email: "jane@example.com" };
const updatedUser = updateUser(existingUser, { name: "Jane Smith" }); // Yalnızca 'name' güncelleniyor
console.log(updatedUser); // Güncellenmiş kullanıcı bilgilerini konsola yazdırır.

// 4. **Required** (Zorunlu Alanlar)

// `Required` kullanarak tüm özellikleri zorunlu hale getiriyoruz
// Bu utility tipi, belirli bir türdeki tüm özellikleri zorunlu hale getirir.
interface Product {
  id: number; // Ürün ID'si
  name: string; // Ürün adı
  description?: string; // Ürün açıklaması, opsiyonel
  price: number; // Ürün fiyatı
}

type RequiredProduct = Required<Product>; // Required<Product> ile tüm alanlar zorunlu hale gelir

const newProduct: RequiredProduct = {
  id: 101,
  name: "Laptop",
  description: "High performance laptop", // Artık description zorunlu
  price: 1500,
};

console.log(newProduct); // Konsola, tüm zorunlu alanlarla oluşturulmuş yeni ürünü yazdırır.

// 5. **Readonly** (Salt Okunur Tipler)

// Salt okunur (değiştirilemez) ürün bilgileri
// `Readonly` ile bir türdeki tüm özellikleri salt okunur (readonly) hale getirebiliriz.
const readonlyProduct: Readonly<Product> = {
  id: 102,
  name: "Smartphone",
  description: "Latest model",
  price: 800,
};

// readonlyProduct.price = 850; // Hata! price değeri değiştirilemez çünkü readonly olarak tanımlandı.

console.log(readonlyProduct); // Konsola, readonly özellikleri olan ürünü yazdırır.

// 6. **Pick** (Seçilen Özellikler)

// `Pick` ile yalnızca bazı özellikleri seçerek yeni bir tip oluşturuyoruz
// Bu, bir türden yalnızca belirli özellikleri alarak yeni bir tür oluşturur.
type ProductPreview = Pick<Product, "id" | "name">; // Yalnızca id ve name özelliklerini seçiyoruz.

const productPreview: ProductPreview = { id: 103, name: "Smartwatch" };
// productPreview.description = "Description"; // Hata! 'description' mevcut değil, çünkü seçilen özelliklerden biri değil.

console.log(productPreview); // Konsola yalnızca id ve name özelliklerine sahip ürünü yazdırır.

// 7. **Omit** (Hariç Tutma)

// `Omit` ile belirli özellikleri hariç tutuyoruz
// Bu, bir türden belirli özellikleri çıkararak yeni bir tür oluşturur.
type ProductWithoutDescription = Omit<Product, "description">; // 'description' özelliğini çıkarıyoruz.

const productWithoutDescription: ProductWithoutDescription = {
  id: 104,
  name: "Tablet",
  price: 600,
};

console.log(productWithoutDescription); // Konsola description olmayan ürünü yazdırır.

// 8. **Fonksiyonlarla Kombinasyon** (Birlikte Kullanım)

// Sipariş öğesini temsil eden tipler
interface OrderItem {
  product: Product; // Ürün bilgileri
  quantity: number; // Ürün adedi
}

// Sipariş fonksiyonu (generik, opsiyonel ve zorunlu alanlar bir arada)
// Bu fonksiyon bir siparişi temsil eder ve ürünlerin detaylarını içerir.
type Order<T> = {
  user: User; // Siparişi veren kullanıcı
  items: T[]; // Sipariş öğeleri (ürünler)
  total: number; // Siparişin toplam tutarı
  status: "pending" | "completed" | "cancelled"; // Sipariş durumu
};

// Siparişin toplamını hesaplamak için fonksiyon
function calculateTotal(items: OrderItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0); // Toplam tutarı hesaplar
}

const order: Order<OrderItem> = {
  user: adminUser, // Siparişi veren admin kullanıcı
  items: [
    { product: newProduct, quantity: 2 }, // 2 adet laptop
    { product: productWithoutDescription, quantity: 3 }, // 3 adet tablet
  ],
  total: calculateTotal([
    { product: newProduct, quantity: 2 }, // 2 adet laptop
    { product: productWithoutDescription, quantity: 3 }, // 3 adet tablet
  ]), // Toplam tutarı hesapla
  status: "pending", // Sipariş durumu 'pending'
};

console.log(order); // Konsola, sipariş detaylarını yazdırır.

// 9. **Union Types ve Tip Güvenliği**

type PaymentStatus = "success" | "failed" | "pending"; // Ödeme durumu için union tipi

interface Payment {
  id: string; // Ödeme kimliği
  amount: number; // Ödeme miktarı
  status: PaymentStatus; // Ödeme durumu, sadece 'success', 'failed' veya 'pending' olabilir
}

const payment: Payment = {
  id: "pay12345", // Ödeme ID'si
  amount: 200, // Ödeme tutarı
  status: "pending", // Durum 'pending'
};

console.log(payment); // Konsola ödeme bilgilerini yazdırır.
