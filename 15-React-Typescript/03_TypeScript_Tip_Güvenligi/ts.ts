// Kullanıcının sahip olabileceği roller union type ile tanımlanıyor.
// Sadece 'admin', 'customer' veya 'guest' değerlerini alabilir.
type UserRole = "admin" | "customer" | "guest";

// ID tipi hem string hem de number olabilir.
// Bu, sistemin hem sayı ID'leri hem de UUID gibi string ID'leri desteklemesini sağlar.
type ID = number | string;

// Kullanıcı bilgilerini temsil eden arayüz.
// id, name, email ve role zorunlu alanlardır.
// phone alanı isteğe bağlıdır.
interface User {
  id: ID;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
}

// Ürün yapısını tanımlayan type alias.
// Her ürünün id, name, price ve stock bilgileri zorunludur.
// description açıklama alanı isteğe bağlıdır.
type Product = {
  id: ID;
  name: string;
  price: number;
  description?: string;
  stock: number;
};

// Siparişe eklenen her ürünün bilgisini tutar.
// Her öğe bir ürün (`product`) ve o üründen kaç tane olduğunu (`quantity`) içerir.
interface OrderItem {
  product: Product;
  quantity: number;
}

// Sipariş yapısını tanımlayan arayüz.
// Her siparişin bir id'si, kullanıcı id'si, ürün listesi (`items`), toplam tutarı (`total`) ve durumu (`status`) vardır.
// status alanı sadece belirli string değerleri alabilir: 'pending', 'completed', 'cancelled'
interface Order {
  id: ID;
  userId: ID;
  items: OrderItem[];
  total: number;
  status: "pending" | "completed" | "cancelled";
}

// Sepete ürün ekleme fonksiyonunun tipi tanımlanıyor.
// Fonksiyon bir sepet (OrderItem[]), bir ürün ve opsiyonel miktar alır.
// Yeni sepet listesini döner.
type AddToCart = (cart: OrderItem[], product: Product, quantity?: number) => OrderItem[];

// Sepete ürün ekleyen fonksiyonun kendisi.
// Eğer ürün sepette varsa miktarını artırır.
// Yoksa ürünü sepete yeni bir öğe olarak ekler.
// quantity verilmezse varsayılan olarak 1 kabul edilir.
const addToCart: AddToCart = (cart, product, quantity = 1) => {
  const existingItem = cart.find((item) => item.product.id === product.id);

  if (existingItem) {
    // Ürün zaten sepetteyse, miktarını artır
    return cart.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
  }

  // Ürün sepette yoksa, yeni bir öğe olarak ekle
  return [...cart, { product, quantity }];
};

// Siparişin toplam tutarını hesaplayan fonksiyon.
// Her ürünün fiyatı ile miktarı çarpılır ve tüm ürünler toplanır.
function calculateTotal(items: OrderItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

// Örnek bir kullanıcı oluşturuluyor.
// phone alanı verilmemiş, çünkü opsiyonel.
const user: User = {
  id: 1,
  name: "Alper Bilgin",
  email: "alper@bilgin.com",
  role: "customer",
};

// Örnek ürünler tanımlanıyor.
// productA açıklama içeriyor, productB içermiyor.
const productA: Product = {
  id: 1001,
  name: "Kablosuz Kulaklık",
  price: 1500,
  stock: 25,
  description: "Bluetooth 5.0, uzun pil ömrü",
};

const productB: Product = {
  id: 1002,
  name: "Laptop",
  price: 12000,
  stock: 10,
};

// Boş bir sepet oluşturuluyor.
let cart: OrderItem[] = [];

// Sepete ürünler ekleniyor.
// productA iki kez ekleniyor; ikinci ekleme miktarı artırıyor.
cart = addToCart(cart, productA, 2); // 2 adet kulaklık
cart = addToCart(cart, productB); // 1 adet laptop
cart = addToCart(cart, productA, 1); // 1 kulaklık daha → toplam 3 kulaklık

// Yeni bir sipariş oluşturuluyor.
// Kullanıcının id'si, sepet, hesaplanmış toplam tutar ve sipariş durumu ile birlikte.
const order: Order = {
  id: "ORD-0001",
  userId: user.id,
  items: cart,
  total: calculateTotal(cart),
  status: "pending",
};

// Sipariş bilgileri konsola yazdırılıyor.
console.log("Sipariş Özeti:");
console.log(`Müşteri: ${user.name}`);
console.log(`Ürün Sayısı: ${order.items.length}`);
console.log(`Toplam Tutar: ₺${order.total}`);
console.log(`Sipariş Durumu: ${order.status}`);
