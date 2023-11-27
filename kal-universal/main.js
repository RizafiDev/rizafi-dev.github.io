//kalkulator universal
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

//akar



//konversi suhu
function convertTemperature() {
  // Ambil nilai suhu, satuan asal, dan satuan tujuan
  var temperature = parseFloat(
    document.getElementById("inputTemperature").value
  );
  var fromUnit = document.getElementById("selectFrom").value;
  var toUnit = document.getElementById("selectTo").value;

  // Lakukan konversi suhu
  var resultSuhu;
  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      resultSuhu = (temperature * 9) / 5 + 32;
    } else if (toUnit === "kelvin") {
      resultSuhu = temperature + 273.15;
    } else if (toUnit === "reamur") {
      resultSuhu = (temperature * 4) / 5;
    } else {
      resultSuhu = temperature;
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      resultSuhu = ((temperature - 32) * 5) / 9;
    } else if (toUnit === "kelvin") {
      resultSuhu = ((temperature - 32) * 5) / 9 + 273.15;
    } else if (toUnit === "reamur") {
      resultSuhu = ((temperature - 32) * 4) / 9;
    } else {
      resultSuhu = temperature;
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      resultSuhu = temperature - 273.15;
    } else if (toUnit === "fahrenheit") {
      resultSuhu = ((temperature - 273.15) * 9) / 5 + 32;
    } else if (toUnit === "reamur") {
      resultSuhu = ((temperature - 273) * 4) / 5;
    } else {
      resultSuhu = temperature;
    }
  } else if (fromUnit === "reamur") {
    if (toUnit === "celsius") {
      resultSuhu = (temperature * 5) / 4;
    } else if (toUnit === "fahrenheit") {
      resultSuhu = (temperature * 9) / 4 + 32;
    } else if (toUnit === "kelvin") {
      resultSuhu = (temperature * 5) / 4 + 273;
    } else {
      resultSuhu = temperature;
    }
  }

  // Tampilkan hasil konversi
  document.getElementById("resultSuhu").innerText =
    "Hasil konversi: " + resultSuhu.toFixed(2) + " " + toUnit;
}
