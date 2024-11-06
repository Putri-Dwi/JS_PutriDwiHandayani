function showCarSalesInfo() {
    // Objek penjualan mobil dengan berbagai tipe data
    let penjualanMobil = {
        mobil: {
            merk: "Honda",
            model: "Civic",
            tahun: 2022,
            warna: ["Merah", "Biru", "Hitam"],
            kapasitasMesin: 1800, // dalam cc
            harga: 35e7, // dalam IDR
            garansi: true, // Menunjukkan apakah ada garansi
            modelTerbaru: false // Menunjukkan apakah ini model terbaru
        },
        pembeli: {
            nama: "Budi Santoso",
            umur: 30,
            alamat: "Jalan Merdeka No. 10, Jakarta",
        },
        jumlahTerjual: 150,
        totalPendapatan: function() {
            return this.jumlahTerjual * this.mobil.harga;
        },
        deskripsi: "Penjualan Honda Civic yang sangat diminati di pasar."
    };

    // Menggunakan operator logika dan perbandingan
    let garansiInfo = penjualanMobil.mobil.garansi ? "Ya" : "Tidak";
    let modelTerbaruInfo = penjualanMobil.mobil.modelTerbaru ? "Ya" : "Tidak";
    
    // Contoh penggunaan operator logika
    let isPopular = penjualanMobil.jumlahTerjual > 100 && penjualanMobil.mobil.tahun >= 2020; // Popular jika terjual > 100 dan tahun >= 2020

    // Contoh penggunaan perbandingan kesetaraan
    let isLatestModel = penjualanMobil.mobil.modelTerbaru === true; // Memeriksa apakah ini model terbaru

    // Mengubah objek menjadi string untuk ditampilkan
    let info = `
        Mobil:
            Merk: ${penjualanMobil.mobil.merk}
            Model: ${penjualanMobil.mobil.model}
            Tahun: ${penjualanMobil.mobil.tahun}
            Warna: ${penjualanMobil.mobil.warna.join(', ')}
            Kapasitas Mesin: ${penjualanMobil.mobil.kapasitasMesin} cc
            Harga: Rp ${penjualanMobil.mobil.harga.toLocaleString()}
            Garansi: ${garansiInfo}
            Model Terbaru: ${modelTerbaruInfo}
            Populer: ${isPopular ? "Ya" : "Tidak"}
            Model Terbaru: ${isLatestModel ? "Ya" : "Tidak"}

        Pembeli:
            Nama: ${penjualanMobil.pembeli.nama}
            Umur: ${penjualanMobil.pembeli.umur}
            Alamat: ${penjualanMobil.pembeli.alamat}

        Jumlah Terjual: ${penjualanMobil.jumlahTerjual}
        Total Pendapatan: Rp ${penjualanMobil.totalPendapatan().toLocaleString()}
        Deskripsi: ${penjualanMobil.deskripsi}
    `;

    //alert(info);
    console.log (info);
}
