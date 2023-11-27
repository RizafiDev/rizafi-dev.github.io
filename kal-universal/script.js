function hitungAkar() {
  // Mendapatkan nilai dari input
  var inputAkar = document.getElementById("inputAkar").value;
  var rootType = document.getElementById("rootType").value;

  // Validasi input
  if (inputAkar === "" || isNaN(inputAkar)) {
    alert("Masukkan angka yang valid");
    return;
  }

  // Menghitung akar sesuai jenis yang dipilih
  var hasilAkar = Math.pow(parseFloat(inputAkar), 1 / rootType);

  // Menampilkan hasil
  document.getElementById("resultAkar").innerHTML =
    "Hasil : Akar " +
    rootType +
    " dari " +
    inputAkar +
    " adalah : " +
    hasilAkar;
}
