const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan)) {
    return "Data penjualan harus berupa array";
  }

  let totalPenjualan = 0;

  dataPenjualan.forEach((produk) => {
    if (!produk.totalTerjual) {
      return `Produk ${produk.namaProduct} harus memiliki properti totalTerjual`;
    }

    totalPenjualan += produk.totalTerjual;
  });

  return totalPenjualan;
}

console.log(getTotalPenjualan(dataPenjualanPakAldi)); //output yang diahsilkan adalah 307 dari setiap value property `total terjual`, yaitu 90 + 37 + 90 + 90
