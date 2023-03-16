const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Data penjualan harus berupa array");
  }

  let totalModal = 0;
  let totalKeuntungan = 0;
  let produkBukuTerlaris = {};
  let penulisTerlaris = {};
  let maxTerjual = 0;

  dataPenjualan.forEach((produk) => {
    if (!produk.hargaBeli || !produk.hargaJual) {
      throw new Error(
        `Produk ${produk.idProduct} harus memiliki harga beli dan harga jual`
      );
    }

    totalModal += produk.hargaBeli * produk.totalTerjual;
    totalKeuntungan +=
      (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;

    if (produk.totalTerjual > maxTerjual) {
      produkBukuTerlaris = produk;
      maxTerjual = produk.totalTerjual;
    }

    if (!penulisTerlaris[produk.penulis]) {
      penulisTerlaris[produk.penulis] = produk.totalTerjual;
    } else {
      penulisTerlaris[produk.penulis] += produk.totalTerjual;
    }
  });

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return {
    totalKeuntungan: formatter.format(totalKeuntungan),
    totalModal: formatter.format(totalModal),
    persentaseKeuntungan: persentaseKeuntungan.toFixed() + "%",
    produkBukuTerlaris: produkBukuTerlaris.namaProduk,
    penulisTerlaris: Object.entries(penulisTerlaris)
      .sort((a, b) => b[1] - a[1])
      .map((penulis) => penulis[0])[0],
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
