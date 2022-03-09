var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
//let terdaftar = false;
//Kita ubah let terdaftar menjadi true
// no 1b
let terdaftar = true;

let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log("Perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + "berasal dari " + asal);
}

//no 1b
if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

//a = b;
// diganti menjadi
var a = b;
//nama = b;

//no 1b
let arrNama = lengkap_arr[2];
//console.log("asal diakses = " + asal);
console.log("array = " + arrNama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();

//Jawab No 2
/* 
2a => Karena kondisi variabel terdaftar itu false, tidak sesuai dengan kondisi di if statement nya

2b => karena variabel nama itu const, const itu tidak bisa di reassign

2c => Tidak karena variabel asal itu bukan global variabel, dia berada di dalem function.
*/
