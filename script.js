const produkList = [
  {
    nama: "Bakso Urat",
    harga: "Rp12.000",
    deskripsi: "Bakso urat isi daging sapi pilihan.",
    gambar: "baso1.png"
  },
  {
    nama: "Bakso Telur",
    harga: "Rp15.000",
    deskripsi: "Bakso isi telur rebus, gurih dan padat.",
    gambar: "baso2.jpg"
  }
];

const container = document.getElementById("produk-container");

produkList.forEach((produk) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${produk.gambar}" alt="${produk.nama}">
    <div class="card-body">
      <div class="card-title">${produk.nama}</div>
      <div class="card-price">${produk.harga}</div>
      <p>${produk.deskripsi}</p>
    </div>
  `;

  container.appendChild(card);
});
