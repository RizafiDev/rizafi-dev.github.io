function convertNumberBilangan() {
  // Get input values
  var inputBilangan = document.getElementById("inputBilangan").value;
  var selectBilanganAwal = document.getElementById("selectBilanganAwal").value;
  var selectBilanganAkhir = document.getElementById("selectBilanganAkhir").value;

  // Validate input
  if (inputBilangan === "") {
    alert("Masukkan bilangan terlebih dahulu");
    return;
  }

  // Convert input to decimal
  var decimalValue = 0;
  switch (selectBilanganAwal) {
    case "binary":
      decimalValue = parseInt(inputBilangan, 2);
      break;
    case "decimal":
      decimalValue = parseFloat(inputBilangan);
      break;
    case "hexadecimal":
      decimalValue = parseInt(inputBilangan, 16);
      break;
    case "octal":
      decimalValue = parseInt(inputBilangan, 8);
      break;
  }

  // Convert decimal to the desired format
  var result = "";
  switch (selectBilanganAkhir) {
    case "binaryResult":
      result = decimalValue.toString(2);
      break;
    case "decimalResult":
      result = decimalValue.toString();
      break;
    case "hexadecimalResult":
      result = decimalValue.toString(16).toUpperCase();
      break;
    case "octalResult":
      result = decimalValue.toString(8);
      break;
  }

  // Display the result
  document.getElementById("hasilBilangan").innerHTML = "Hasil konversi: " + result;
}