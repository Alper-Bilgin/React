# **⚛️ React Material UI (MUI)**

## 📦 1. Material UI ve Icons Kurulumu

İlk olarak bir React projesi oluşturman gerekiyor. Eğer elinde yoksa , ardından Material UI kütüphanesini kur:

```bash
npx create-react-app my-app
cd my-app
npm install @mui/material @emotion/react @emotion/styled
```

---

## 2. Material UI'yi Projede Kullanmak

Kurulumdan sonra doğrudan bileşenleri içe aktararak kullanabilirsin.

```jsx
import React from "react";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button variant="contained">Merhaba Dünya</Button>
    </div>
  );
}

export default App;
```

---

## 3. Tema Kullanımı

```jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Mavi
    },
    secondary: {
      main: "#dc004e", // Pembe
    },
  },
});

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>;
```

---

## 4. Material UI Bileşenleri

Aşağıda Material UI bileşenlerini kısa açıklamalarıyla listeledim:

### **Button (Buton)**

Kullanıcının bir işlem yapmasını tetiklemek için kullanılır. Örneğin form gönderme, bir sayfa açma gibi. Farklı stilleri (`contained`, `outlined`, `text`) vardır.

---

### **TextField (Metin Alanı)**

Kullanıcının veri (metin, sayı, vs.) girişi yapabilmesi için kullanılır. Formlar için temel bileşendir. E-posta, şifre, isim gibi girişler burada olur.

---

### **Select (Açılır Menü)**

Kullanıcının belirli bir listedeki seçeneklerden birini seçmesini sağlar. Dropdown menüdür. Ülke, kategori, yaş aralığı gibi seçimlerde kullanılır.

---

### **Checkbox (Onay Kutusu)**

Bir veya daha fazla seçeneğin seçilip seçilmediğini kontrol etmek için kullanılır. Örneğin "Kuralları kabul ediyorum" kutusu gibi.

---

### **Autocomplete (Otomatik Tamamlama)**

Kullanıcı yazdıkça ilgili öneriler gösteren gelişmiş bir seçim bileşenidir. Arama çubuğu, etiket seçimi gibi durumlarda çok kullanışlıdır.

---

### **Box**

Düzenleme (layout) için kullanılan temel bir yapı bileşenidir. İçerikleri hizalamak, arka plan rengi vermek, margin-padding ayarlamak gibi işlemler için kullanılır.

---

### **Stack**

Bileşenleri dikey ya da yatay olarak düzgün aralıklarla hizalamak için kullanılır. Flexbox temellidir. Hızlı ve düzenli bir sıralama sağlar.

---

### **Grid**

Responsive (duyarlı) ızgara sistemidir. Sayfanın mobil/tablet/masaüstü gibi farklı boyutlarda uyumlu görünmesini sağlar. Özellikle içerik düzenlemede çok önemli.

---

### **Card (Kart)**

Bilgi kartları oluşturmak için kullanılır. Görsel, başlık, açıklama ve buton gibi elemanları bir kutuda toplamak için idealdir. Ürün, profil, blog gibi içeriklerde sıkça kullanılır.

---

### **Accordion**

Tıklanınca açılıp kapanan bölümler oluşturmak için kullanılır. Sıkça "SSS - Sıkça Sorulan Sorular" gibi içeriklerde tercih edilir.

---

### **AppBar**

Uygulamanın üst kısmında yer alan sabit ya da kaydırılabilir bir başlık/menü çubuğudur. Logo, başlık, arama kutusu, menü ikonları gibi öğeler içerir.

---

### **ImageList**

Görsel galerisi düzenlemek için kullanılır. Farklı boyutlarda görselleri düzgün bir yapıda sıralamak için birebirdir.

---

### **Drawer**

Sayfanın kenarından açılan kayar menüdür. Mobil uygulamalarda genellikle soldan açılan navigasyon menüsü olarak kullanılır.

---

### **Badge**

Bir simgenin köşesinde küçük sayılar ya da noktalarla bilgi vermek için kullanılır. Bildirim, mesaj sayısı gibi alanlarda kullanılır.

---

### **Avatar**

Kullanıcı görseli, profil resmi ya da baş harfini göstermek için kullanılır. Sosyal medya, yorumlar ya da kullanıcı kartlarında çokça görülür.

---

### **Tooltip**

Bir öğenin üzerine gelince çıkan kısa açıklama balonudur. Kullanıcıya ek bilgi vermek için kullanılır. Genellikle ikonlar veya kısa metinlerle birlikte kullanılır.

---

### **Alert**

Kullanıcıya hata, uyarı, başarı ya da bilgi mesajı göstermek için kullanılır. Renk ve ikonlarla mesajın türünü vurgular.

---

### **Dialog**

Sayfanın ortasında çıkan modal penceredir. Onay kutuları, formlar ya da kullanıcıyı durduran önemli mesajlar için kullanılır.

---

### **Snackbar**

Alt kısımda geçici olarak görünen kısa bilgilendirme mesajlarıdır. Örneğin “Kayıt başarılı” gibi mesajlar için idealdir. Kısa süre sonra otomatik kapanır.

---

### **Progress**

Bir işlemin devam ettiğini göstermek için kullanılır. Yükleme sırasında kullanıcıya "bekle" mesajı verir. Dairesel (spinner) ve yatay (bar) türleri vardır.

---

### **Skeleton**

İçerikler yüklenirken geçici olarak gösterilen iskelet yapıdır. Kullanıcıya bir şeylerin geleceğini belli eder. Daha şık bir yüklenme deneyimi sunar.

---

### **Table**

Verileri satır-sütun şeklinde tablo olarak göstermek için kullanılır. Listeleme, raporlama, yönetim panelleri gibi yerlerde sıkça tercih edilir.

---

### **Tabs**

Aynı alanda farklı içerikleri sekmelerle sunmak için kullanılır. Sayfalar arası geçiş yapmadan içerik değiştirme imkânı sunar.

---

## Uygulama Örneği (`App.jsx`)

```jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Drawer,
  List,
  ListItem,
  Alert,
  Snackbar,
  Checkbox,
  Autocomplete,
  Avatar,
  Tooltip,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Skeleton,
  Stack,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const users = ["Ali", "Ayşe", "Mehmet"];

function App() {
  const [tab, setTab] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Drawer */}
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem>Dashboard</ListItem>
          <ListItem>Profil</ListItem>
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1, ml: 25 }}>
        {/* AppBar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Kullanıcı Paneli
            </Typography>
            <Tooltip title="Mesajlar">
              <Badge badgeContent={3} color="error">
                <MailIcon />
              </Badge>
            </Tooltip>
            <Avatar alt="Kullanıcı" sx={{ ml: 2 }}>
              A
            </Avatar>
          </Toolbar>
        </AppBar>

        {/* İçerik */}
        <Box sx={{ p: 3 }}>
          {/* Tabs */}
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="Bilgiler" />
            <Tab label="Liste" />
          </Tabs>

          {tab === 0 && (
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Kullanıcı Bilgileri</Typography>
                    <Stack spacing={2} mt={2}>
                      <TextField label="Ad" />
                      <TextField label="E-posta" />
                      <Autocomplete options={users} renderInput={(params) => <TextField {...params} label="Kullanıcı Seç" />} />
                      <Checkbox /> Kuralları kabul ediyorum
                      <Button
                        variant="contained"
                        onClick={() => {
                          setLoading(true);
                          setTimeout(() => {
                            setLoading(false);
                            setOpenSnackbar(true);
                          }, 1000);
                        }}
                      >
                        Kaydet
                      </Button>
                      {loading && <CircularProgress />}
                      {loading && <Skeleton variant="text" width={150} />}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {tab === 1 && (
            <Box mt={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ad</TableCell>
                    <TableCell>Durum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user}</TableCell>
                      <TableCell>Aktif</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}

          {/* Snackbar */}
          <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)} message="Kayıt başarılı!" />

          {/* Alert + Dialog */}
          <Alert severity="info" sx={{ mt: 3 }} onClick={() => setOpenDialog(true)}>
            Daha fazla bilgi için tıklayın.
          </Alert>
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Bilgilendirme</DialogTitle>
            <DialogContent>Bu bir dialog penceresidir.</DialogContent>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
```

### 1. **State Variables**:

Bu bileşen, bazı durum (state) değişkenlerine sahip:

- **`tab`**: Mevcut açık olan sekmeyi tutar. Varsayılan değer `0` (ilk sekme).

- **`openSnackbar`**: Snackbar'ın (bilgi mesajı) açık olup olmadığını tutar.

- **`openDialog`**: Dialog (popup pencere) açık mı değil mi, bunu kontrol eder.

- **`loading`**: Veri yükleme işlemi sırasında gösterilecek yükleniyor animasyonunun durumunu belirtir.

```jsx
const [tab, setTab] = useState(0);
const [openSnackbar, setOpenSnackbar] = useState(false);
const [openDialog, setOpenDialog] = useState(false);
const [loading, setLoading] = useState(false);
```

### 2. **Drawer (Sabit Menü)**:

Bu kısım, sol tarafta sabit bir menü (drawer) oluşturan bileşendir. İçinde `Dashboard` ve `Profil` gibi iki menü öğesi bulunuyor.

```jsx
<Drawer variant="permanent" anchor="left">
  <List>
    <ListItem>Dashboard</ListItem>
    <ListItem>Profil</ListItem>
  </List>
</Drawer>
```

### 3. **AppBar (Başlık Çubuğu)**:

Bu, üst kısmında yer alan ve uygulamanın başlığını içeren çubuktur. Burada, "Kullanıcı Paneli" başlığı ve mesajlar için bir simge (MailIcon) ile kullanıcı avatar'ı eklenmiş. Ayrıca, mesaj simgesinin üzerinde 3 bildirim olduğunu belirten bir `Badge` var.

```jsx
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      Kullanıcı Paneli
    </Typography>
    <Tooltip title="Mesajlar">
      <Badge badgeContent={3} color="error">
        <MailIcon />
      </Badge>
    </Tooltip>
    <Avatar alt="Kullanıcı" sx={{ ml: 2 }}>
      A
    </Avatar>
  </Toolbar>
</AppBar>
```

### 4. **Sekmeler (Tabs)**:

Ekranın ana içeriği iki sekmeye ayrılmıştır:

- **Bilgiler**: Kullanıcı bilgilerini girme formu.
- **Liste**: Kullanıcıların listesini gösteren bir tablo.

Bu sekmeler, `Tabs` bileşeni ile yönetiliyor. `tab` state'i, hangi sekmenin seçili olduğunu belirler.

```jsx
<Tabs value={tab} onChange={(e, val) => setTab(val)}>
  <Tab label="Bilgiler" />
  <Tab label="Liste" />
</Tabs>
```

### 5. **Bilgiler Sekmesi (Form)**:

"Bilgiler" sekmesinde, kullanıcıdan ad, e-posta ve bir kullanıcı seçmesi istenen bir form bulunuyor. Ayrıca, bir onay kutusu (`Checkbox`) ile kuralları kabul etme işlemi yapılabiliyor. Formu kaydetmek için bir `Button` var. Butona tıklandığında yükleniyor durumu (`loading`) aktif hale gelir ve kısa bir süre sonra başarılı bir kayıt mesajı gösterilir (`Snackbar`).

```jsx
{
  tab === 0 && (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Kullanıcı Bilgileri</Typography>
            <Stack spacing={2} mt={2}>
              <TextField label="Ad" />
              <TextField label="E-posta" />
              <Autocomplete options={users} renderInput={(params) => <TextField {...params} label="Kullanıcı Seç" />} />
              <Checkbox /> Kuralları kabul ediyorum
              <Button
                variant="contained"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setOpenSnackbar(true);
                  }, 1000);
                }}
              >
                Kaydet
              </Button>
              {loading && <CircularProgress />}
              {loading && <Skeleton variant="text" width={150} />}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
```

### 6. **Liste Sekmesi (Tablo)**:

"Liste" sekmesinde, kullanıcıların isimlerinin ve durumlarının (Aktif) listelendiği bir tablo bulunuyor. Bu tablo, `Table`, `TableHead`, `TableRow`, `TableCell` bileşenleri ile yapılandırılmış.

```jsx
{
  tab === 1 && (
    <Box mt={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ad</TableCell>
            <TableCell>Durum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user}</TableCell>
              <TableCell>Aktif</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
```

### 7. **Snackbar (Mesaj)**:

Bir işlem başarılı olduğunda, kullanıcıya kısa bir mesaj gösteren `Snackbar` bileşeni kullanılıyor. Örneğin, "Kayıt başarılı!" mesajı 3 saniye boyunca ekranda görünür.

```jsx
<Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)} message="Kayıt başarılı!" />
```

### 8. **Alert ve Dialog (Bilgilendirme)**:

Bir `Alert` bileşeni, kullanıcıya ek bilgi almak için tıklayabileceğini belirten bir mesaj gösterir. Tıklama ile bir `Dialog` (popup pencere) açılır. Bu pencerede, kullanıcıya basit bir bilgi mesajı gösterilmektedir.

```jsx
<Alert severity="info" sx={{ mt: 3 }} onClick={() => setOpenDialog(true)}>
  Daha fazla bilgi için tıklayın.
</Alert>
<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogTitle>Bilgilendirme</DialogTitle>
  <DialogContent>Bu bir dialog penceresidir.</DialogContent>
</Dialog>
```

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
