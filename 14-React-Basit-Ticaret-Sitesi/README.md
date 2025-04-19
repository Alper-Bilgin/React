# React + Redux tabanlı Basit e-ticaret projesi

## 🔧 Proje Teknolojileri

- **React**: Kullanıcı arayüzlerini oluşturmak için kullanılan kütüphane.

- **React Router**: Sayfalar arası geçişleri yönetmek için.
- **Redux Toolkit**: Global state yönetimi için.
- **MUI (Material UI)**: Hazır stil bileşenleri.
- **Axios**: API çağrıları için.
- **FakeStoreAPI**: Sahte ürün verilerini almak için kullanılan API.

---

## 📁 Dosya ve Klasör Yapısı

```
src/
│
├── components/          # UI bileşenleri (Header, Product, etc.)
├── container/           # Sayfa düzenleri (Container)
├── css/                 # CSS dosyaları
├── pages/               # Sayfa bileşenleri (Home)
├── redux/
│   └── slices/          # Redux slice'ları (product, basket, app)
├── config/              # Router yapılandırması
├── App.js               # Ana uygulama bileşeni
└── main.jsx             # React uygulamasının başlatıldığı yer

```

---

## 🔁 Uygulamanın Genel Akışı

1.  Uygulama `main.jsx` dosyasından başlar.
2.  `App.jsx` içinde:

    - `Header`, `RouterConfig`, `Loading`, ve `Drawer` kullanılır.

3.  Ana sayfa (`Home`) açıldığında ürünler API'den çekilir ve listelenir.
4.  Kullanıcı bir ürüne tıkladığında detay sayfasına yönlendirilir.
5.  Sepete ürün eklenebilir, miktar değiştirilebilir.
6.  Sağ üstteki sepet ikonuna tıklandığında ürünlerin listelendiği bir `Drawer` açılır.

---

## 1️⃣ `App.jsx` - Ana Uygulama Bileşeni

```jsx
function App() {
  ...
  useEffect(() => {
    dispatch(calculateBasket());
  }, []);
```

- Uygulama ilk açıldığında sepetteki toplam tutar hesaplanıyor (`calculateBasket()`).
- `Drawer` bileşeni MUI'dan gelir, sepetteki ürünleri göstermek için sağdan açılan paneldir.
- Sepetteki ürünler `localStorage`'dan alınır.

## 2️⃣ `Header.jsx` - Üst Menü

### Görevleri:

- Logoya tıklayınca anasayfaya gider.

- Arama girişi yapar (aktif değil ama arayüz hazır).

- Temayı değiştirir.

- Sepet ikonuna tıklanınca Drawer açılır.

## 3️⃣ `ProductList.jsx` & `Product.jsx`

- `ProductList` bileşeni: API'den çekilen ürünleri listeler.
- `useEffect` içinde `dispatch(getAllProducts())` çalışır.

```jsx
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});
```

- API çağrısı yapılıp ürünler redux state'e kaydedilir.
- Her ürün için `Product.js` bileşeni render edilir.

## 4️⃣ `ProductDetails.jsx` - Ürün Detay Sayfası

### Görevleri:

- URL'den `id` alır (`useParams` ile).
- `selectedProduct` state’ine ürün detaylarını yazar.
- Kullanıcı adet belirler ve ürünü sepete ekler (`addToBasket`).
- Sepete eklerken:
  - Aynı ürün daha önce eklendiyse `count` değeri artırılır.
  - Yeni ürünse diziye eklenir.

## 5️⃣ `Drawer` - Sepet Görüntüleme

```jsx
<Drawer anchor="right" open={drawer}>
  {products.map(...)}
  <p>toplam tutar: {totalAmount}</p>
</Drawer>
```

- Sağdan açılır panel.
- `products` array'i üzerinden her ürün render edilir.
- Tutar, ürün adedi ile fiyatın çarpımıdır.

## 6️⃣ Redux Yapısı

**basketSlice.jsx**
Sepet ürünlerini, toplam tutarı ve drawer açma/kapama durumunu yönetir.

```jsx
addToBasket(); // Sepete ürün ekler
setDrawer(); // Drawer'ı açar/kapatır
calculateBasket(); // Toplam tutarı hesaplar
```

**productSlice.js**

- Tüm ürünleri ve seçilen ürünü tutar.
- `getAllProducts`: API'den ürünleri çeker.
- `setSelectedProduct`: Detay sayfasında gösterilecek ürünü belirler.

## 7️⃣ `Loading.jsx`

`productSlice.loading` değeri `true` ise `Backdrop` + `CircularProgress` gösterir.

## 8️⃣ `RouterConfig.jsx`

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product-details/:id" element={<ProductDetails />} />
</Routes>
```

- React Router ile sayfa yönlendirmelerini yönetir.
- Dinamik `id`’li rota ile detay sayfasına gider.

## 9️⃣ `PageContainer.jsx`

- Sadece bir `Container` sarmalayıcısıdır (MUI kullanır).
- İçeriği ortalamak ve sabit genişlik sağlamak için kullanılır.

---

## **🔄 Sepet Nasıl Çalışır?**

- Sepete ürün eklenince `addToBasket` tetiklenir.
- Eğer ürün zaten sepette varsa:

  - Mevcut ürün bulunur.

  - `count` artırılır.

  - `localStorage` güncellenir.

- Yeni ürünse direkt eklenir.
- `calculateBasket` çağrılarak toplam tutar güncellenir.
- Drawer içinden kullanıcı ürünleri görebilir.

---

## **💾 localStorage Kullanımı**

```jsx
localStorage.setItem("basket", JSON.stringify(basket));
```

- Kullanıcının sepeti tarayıcıda saklanır.
- Sayfa yenilense bile ürünler kaybolmaz.

---

# 🔄 Uygulamanın Genel Çalışma Akışı

1.  Uygulama açılır.
2.  `ProductList` içindeki `useEffect` çalışır → `getAllProducts` çağrılır.
3.  Ürünler `product.products` içine yüklenir.
4.  Her bir ürün `Product.jsx` bileşeni olarak listelenir.
5.  Ürüne tıklanınca detay sayfasına gidilir → `ProductDetails`.
6.  Detay sayfasında ürün adedi ayarlanabilir ve sepete eklenebilir.
7.  Sepet ikonuna tıklanınca `Drawer` açılır → ürünler ve toplam tutar gösterilir.
8.  Tüm sepet işlemleri `localStorage` ile kalıcı hale getirilir.
9.  Tema butonları ile arka plan-tema değiştirilebilir.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
