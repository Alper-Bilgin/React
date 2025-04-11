import "./App.css";

function App() {
  // Javascript kodları yazılır
  let a = 15;
  const firstName = "Alper";
  const lastName = "Bilgin";

  let vize1 = 60;
  let vize2 = 80;

  let sonuc = true;

  let isimler = ["Alper", "Enes", "Berke", "Ali"];

  return (
    // Html + JavaScript kodları yazılır
    <div>
      <div>Ad: {firstName}</div>
      <div>Soyad: {lastName}</div>
      <p>a değişkeninin değeri : {a} </p>
      <p>Ortalama : {(vize1 + vize2) / 2} </p>
      {sonuc ? <p>True</p> : <p>False</p>}
      {isimler.map((isim, index) => (
        <div style={{ backgroundColor: "pink" }} key={index}>
          {/* Style etiketinde ilk açılan parantez jsx için ikincisi css için */}
          {isim}
        </div>
      ))}
    </div>
  );
}
// Main.jsx içinde kullanabilmek için export edilmeli
export default App;
