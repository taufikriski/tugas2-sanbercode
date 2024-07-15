const prompt = require('prompt-sync')({sigint: true});
// Mengambil input dari user
const x = prompt("Silakan Input bilangan genap:");

// Konversi input menjadi angka
const num = parseFloat(x);

// Memeriksa apakah input valid
if (isNaN(num)) {
  console.log("Input tidak valid. Silakan input kembali angka.");
} else if (num < 0) {
  console.log("Tidak bisa input bilangan negatif.");
} else if (num % 2 !== 0) {
  console.log("Tidak bisa input bilangan ganjil.");
} else {
  // Menghitung akar pangkat 2 dari bilangan genap
  const result = Math.sqrt(num);
  console.log(`Akar pangkat 2 dari ${num} adalah ${result}`);
}